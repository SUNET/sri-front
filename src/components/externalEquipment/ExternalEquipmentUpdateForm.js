import _ExternalEquipmentFormParentClass from './_ExternalEquipmentFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateExternalEquipmentMutation from '../../mutations/externalEquipment/UpdateExternalEquipmentMutation';
import ValidationsExternalEquipmentForm from '../common/_BasicValidationForm';
// const
import { UPDATE_EXTERNALEQUIPMENT_FORM, REMOVE } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class ExternalEquipmentUpdateForm extends _ExternalEquipmentFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_EXTERNALEQUIPMENT_FORM;
  MODEL_NAME = 'externalEquipment';
  ROUTE_LIST_DIRECTION = '/network/externalEquipments';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { externalEquipmentId: this.props.externalEquipment.id }, // Our refetchQuery needs to know the `externalEquipmentID`
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
    const portsToRemove = entityData.ports.filter((connection) => connection.status === REMOVE);
    const someItemWillBeDeleted = ownerToRemove.length > 0 || portsToRemove.length > 0;
    if (someItemWillBeDeleted) {
      this.entityDataToUpdate = entityData;
      this.props.showModalConfirm('partialDelete');
    } else {
      this.updateMutation(entityData, this);
    }
  };

  updateMutation(entityData, form) {
    UpdateExternalEquipmentMutation(entityData, form);
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

ExternalEquipmentUpdateForm = reduxForm({
  validate: ValidationsExternalEquipmentForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(ExternalEquipmentUpdateForm);

const ExternalEquipmentUpdateFragment = createRefetchContainer(
  withTranslation()(ExternalEquipmentUpdateForm),
  {
    externalEquipment: graphql`
      fragment ExternalEquipmentUpdateForm_externalEquipment on ExternalEquipment {
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
    query ExternalEquipmentUpdateFormRefetchQuery($externalEquipmentId: ID!) {
      getExternalEquipmentById(id: $externalEquipmentId) {
        ...ExternalEquipmentUpdateForm_externalEquipment
      }
    }
  `,
);

export default ExternalEquipmentUpdateFragment;
