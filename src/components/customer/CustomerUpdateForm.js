import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateCustomerMutation from '../../mutations/customer/UpdateCustomerMutation';
import BasicValidation from '../common/_BasicValidationForm';
// const
import { UPDATE_CUSTOMER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CustomerUpdateForm extends _BasicFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_CUSTOMER_FORM;
  MODEL_NAME = 'customer';
  ROUTE_LIST_DIRECTION = '/network/customers';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { customerId: this.props.customer.id }, // Our refetchQuery needs to know the `customerID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (customer) => {
    this.setState({ editMode: false });
    this.props.hideModalForm();
    UpdateCustomerMutation(customer, this);
  };
  render() {
    let { relatedEntities, handleSubmit, isFromModal } = this.props;
    const { editMode } = this.state;
    const showBackButton = isBrowser && !isFromModal;
    const showSaveCancelInHeader = showBackButton;
    const formId = `${this.FORM_ID}${isFromModal ? 'InModal' : ''}`;
    return (
      <form id={formId} onSubmit={handleSubmit(this.handleSubmit)}>
        {showSaveCancelInHeader && this.renderSaveCancelButtons()}
        {this.renderHeader(editMode, showBackButton)}
        {this.renderModelMainSection(editMode)}
        {relatedEntities && this.renderRelatedEntities(relatedEntities)}
        {this.renderWorkLog()}
        {!isFromModal && this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CustomerUpdateForm = reduxForm({
  validate: BasicValidation.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(CustomerUpdateForm);

const CustomerUpdateFragment = createRefetchContainer(
  withTranslation()(CustomerUpdateForm),
  {
    customer: graphql`
      fragment CustomerUpdateForm_customer on Customer {
        id
        name
        description
        url
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
    query CustomerUpdateFormRefetchQuery($customerId: ID!) {
      getCustomerById(id: $customerId) {
        ...CustomerUpdateForm_customer
      }
    }
  `,
);

export default CustomerUpdateFragment;
