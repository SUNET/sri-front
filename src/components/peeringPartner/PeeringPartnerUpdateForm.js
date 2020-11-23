import _PeeringPartnerFormParentClass from './_PeeringPartnerFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdatePeeringPartnerMutation from '../../mutations/peeringPartner/UpdatePeeringPartnerMutation';
import ValidationsPeeringPartnerForm from '../common/_BasicValidationForm';
// const
import { UPDATE_PEERINGPARTNER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class PeeringPartnerUpdateForm extends _PeeringPartnerFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_PEERINGPARTNER_FORM;
  MODEL_NAME = 'peeringPartner';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { peeringPartnerId: this.props.peeringPartner.id }, // Our refetchQuery needs to know the `peeringPartnerID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (peeringPartner) => {
    this.setState({ editMode: false });
    UpdatePeeringPartnerMutation(peeringPartner, this);
  };
  render() {
    let { handleSubmit } = this.props;
    const { editMode } = this.state;
    const showBackButton = isBrowser;
    return (
      <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
        {isBrowser && this.renderSaveCancelButtons()}
        {this.renderHeader(editMode, showBackButton)}
        {this.renderSections(editMode)}
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

PeeringPartnerUpdateForm = reduxForm({
  validate: ValidationsPeeringPartnerForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(PeeringPartnerUpdateForm);

const PeeringPartnerUpdateFragment = createRefetchContainer(
  withTranslation()(PeeringPartnerUpdateForm),
  {
    peeringPartner: graphql`
      fragment PeeringPartnerUpdateForm_peeringPartner on PeeringPartner {
        id
        name
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
    query PeeringPartnerUpdateFormRefetchQuery($peeringPartnerId: ID!) {
      getPeeringPartnerById(id: $peeringPartnerId) {
        ...PeeringPartnerUpdateForm_peeringPartner
      }
    }
  `,
);

export default PeeringPartnerUpdateFragment;
