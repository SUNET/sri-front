import _HostFormParentClass from './_HostFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateMutation from '../../mutations/host/UpdateHostMutation';
import ValidationsHostForm from './ValidationsHostForm';
// const
import { UPDATE_HOST_FORM, REMOVE } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class HostUpdateForm extends _HostFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_HOST_FORM;
  MODEL_NAME = 'host';
  ROUTE_LIST_DIRECTION = '/network/hosts';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
      visibleConvertHostModal: false,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { hostId: this.props.host.id }, // Our refetchQuery needs to know the `hostID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };

  handleSubmit = (entityData) => {
    this.setState({ editMode: false });
    const ownerToRemove = entityData.owner ? entityData.owner.filter((ow) => ow.status === REMOVE) : [];
    const someItemWillBeDeleted = ownerToRemove.length > 0;
    if (someItemWillBeDeleted) {
      this.entityDataToUpdate = entityData;
      this.props.showModalConfirm('partialDelete');
    } else {
      this.updateMutation(entityData, this);
    }
  };

  updateMutation(entityData, form) {
    UpdateMutation(entityData, form);
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
        {this.state.visibleConvertHostModal && this.renderConvertHostModal()}
      </form>
    );
  }
}

HostUpdateForm = reduxForm({
  validate: ValidationsHostForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(HostUpdateForm);

const HostUpdateFragment = createRefetchContainer(
  withTranslation()(HostUpdateForm),
  {
    host: graphql`
      fragment HostUpdateForm_host on Host {
        id
        name
        description
        location {
          id
          name
        }
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
    query HostUpdateFormRefetchQuery($hostId: ID!) {
      getHostById(id: $hostId) {
        ...HostUpdateForm_host
      }
    }
  `,
);

export default HostUpdateFragment;
