import _ODFFormParentClass from './_ODFFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateODFMutation from '../../mutations/ODF/UpdateODFMutation';
import ValidationsODFForm from '../common/_BasicValidationForm';
// const
import { UPDATE_ODF_FORM, REMOVE } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class ODFUpdateForm extends _ODFFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_ODF_FORM;
  MODEL_NAME = 'ODF';
  ROUTE_LIST_DIRECTION = '/network/odfs';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { ODFId: this.props.ODF.id }, // Our refetchQuery needs to know the `ODFID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };

  handleSubmit = (entityData) => {
    this.setState({ editMode: false });
    this.props.hideModalForm();
    const portsToRemove = entityData.ports.filter((connection) => connection.status === REMOVE);
    const someItemWillBeDeleted = portsToRemove.length > 0;
    if (someItemWillBeDeleted) {
      this.entityDataToUpdate = entityData;
      this.props.showModalConfirm('partialDelete');
    } else {
      this.updateMutation(entityData, this);
    }
  };

  updateMutation(entityData, form) {
    UpdateODFMutation(entityData, form);
  }

  render() {
    let { handleSubmit, isFromModal } = this.props;
    const { editMode } = this.state;
    const showBackButton = isBrowser && !isFromModal;
    const showSaveCancelInHeader = showBackButton;
    const formId = `${this.FORM_ID}${isFromModal ? 'InModal' : ''}`;
    return (
      <form id={formId} onSubmit={handleSubmit(this.handleSubmit)}>
        {showSaveCancelInHeader && this.renderSaveCancelButtons()}
        {this.renderHeader(editMode, showBackButton)}
        {this.renderSections(editMode)}
        {!isFromModal && this.renderSaveCancelButtons()}
      </form>
    );
  }
}

ODFUpdateForm = reduxForm({
  validate: ValidationsODFForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(ODFUpdateForm);

const ODFUpdateFragment = createRefetchContainer(
  withTranslation()(ODFUpdateForm),
  {
    ODF: graphql`
      fragment ODFUpdateForm_ODF on ODF {
        id
        name
        description
        comments {
          id
          user {
            first_name
            last_name
          }
          comment
          submit_date
        }
        created
        creator {
          email
        }
        modified
        modifier {
          email
        }
      }
    `,
  },

  graphql`
    # Refetch query to be fetched upon calling 'refetch'.
    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
    query ODFUpdateFormRefetchQuery($ODFId: ID!) {
      getODFById(id: $ODFId) {
        ...ODFUpdateForm_ODF
      }
    }
  `,
);

export default ODFUpdateFragment;
