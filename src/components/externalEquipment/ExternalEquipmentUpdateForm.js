import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateExternalEquipmentMutation from '../../mutations/externalEquipment/UpdateExternalEquipmentMutation';
import ValidationsExternalEquipmentForm from '../common/_BasicValidationForm';
// const
import { UPDATE_EXTERNALEQUIPMENT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class ExternalEquipmentUpdateForm extends _BasicFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_EXTERNALEQUIPMENT_FORM;
  MODEL_NAME = 'externalEquipment';
  ROUTE_LIST_DIRECTION = '/network/externalEquipments';
  state = {
    editMode: false,
  };
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
  handleSubmit = (externalEquipment) => {
    this.setState({ editMode: false });
    UpdateExternalEquipmentMutation(externalEquipment, this);
  };
  render() {
    let { handleSubmit } = this.props;
    const { editMode } = this.state;
    const showBackButton = isBrowser;
    return (
      <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
        {isBrowser && this.renderSaveCancelButtons()}
        {this.renderHeader(editMode, showBackButton)}
        {this.renderModelMainSection(editMode)}
        {this.renderWorkLog()}
        {this.renderSaveCancelButtons()}
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
