import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateProviderMutation from '../../mutations/provider/UpdateProviderMutation';
import ValidationsProviderForm from '../common/_BasicValidationForm';
// const
import { UPDATE_PROVIDER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class ProviderUpdateForm extends _BasicFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_PROVIDER_FORM;
  MODEL_NAME = 'provider';
  ROUTE_LIST_DIRECTION = '/network/providers';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { providerId: this.props.provider.id }, // Our refetchQuery needs to know the `providerID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (provider) => {
    this.setState({ editMode: false });
    this.props.hideModalForm();
    UpdateProviderMutation(provider, this);
  };
  render() {
    let { with_same_name, handleSubmit, isFromModal } = this.props;
    const { editMode } = this.state;
    const showBackButton = isBrowser && !isFromModal;
    const showSaveCancelInHeader = showBackButton;
    const formId = `${this.FORM_ID}${isFromModal ? 'InModal' : ''}`;
    return (
      <form id={formId} onSubmit={handleSubmit(this.handleSubmit)}>
        {showSaveCancelInHeader && this.renderSaveCancelButtons()}
        {this.renderHeader(editMode, showBackButton)}
        {this.renderModelMainSection(editMode)}
        {with_same_name && this.renderRelatedEntities(with_same_name)}
        {this.renderWorkLog()}
        {!isFromModal && this.renderSaveCancelButtons()}
      </form>
    );
  }
}

ProviderUpdateForm = reduxForm({
  validate: ValidationsProviderForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(ProviderUpdateForm);

const ProviderUpdateFragment = createRefetchContainer(
  withTranslation()(ProviderUpdateForm),
  {
    provider: graphql`
      fragment ProviderUpdateForm_provider on Provider {
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
    query ProviderUpdateFormRefetchQuery($providerId: ID!) {
      getProviderById(id: $providerId) {
        ...ProviderUpdateForm_provider
      }
    }
  `,
);

export default ProviderUpdateFragment;
