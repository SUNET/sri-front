import _EndUserFormParentClass from './_EndUserFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateEndUserMutation from '../../mutations/endUser/UpdateEndUserMutation';
import ValidationsEndUserForm from '../common/_BasicValidationForm';
// const
import { UPDATE_ENDUSER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class EndUserUpdateForm extends _EndUserFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_ENDUSER_FORM;
  MODEL_NAME = 'endUser';
  ROUTE_LIST_DIRECTION = '/network/end-users';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { endUserId: this.props.endUser.id }, // Our refetchQuery needs to know the `endUserID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (endUser) => {
    this.setState({ editMode: false });
    this.props.hideModalForm();
    UpdateEndUserMutation(endUser, this);
  };
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

EndUserUpdateForm = reduxForm({
  validate: ValidationsEndUserForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(EndUserUpdateForm);

const EndUserUpdateFragment = createRefetchContainer(
  withTranslation()(EndUserUpdateForm),
  {
    endUser: graphql`
      fragment EndUserUpdateForm_endUser on EndUser {
        id
name
description
__typename
url

    uses {
      id
name
description
__typename
relation_id
      ...on Service {
       
    service_type {
        __typename
        id
        name
        
        
    }
  

    operational_state {
        __typename
        name
        value
    }
  
    }
    }

    with_same_name {
      id
name
description
__typename
      ...on EndUser {
       url
    },...on Customer {
       url
    },...on SiteOwner {
       url
    },...on Provider {
       url
    },...on Customer {
       url
    },...on Organization {
       website
organization_id
affiliation_partner
affiliation_customer
affiliation_provider
affiliation_host_user
affiliation_site_owner
affiliation_end_customer

    parent_organization {
        __typename
        id
        name
        organization_id
        
    }
  

    type {
        __typename
        name
        value
    }
  
    }
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
    query EndUserUpdateFormRefetchQuery($endUserId: ID!) {
      getEndUserById(id: $endUserId) {
        ...EndUserUpdateForm_endUser
      }
    }
  `,
);

export default EndUserUpdateFragment;
