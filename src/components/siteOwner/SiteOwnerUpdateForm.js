import _SiteOwnerFormParentClass from './_SiteOwnerFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateSiteOwnerMutation from '../../mutations/siteOwner/UpdateSiteOwnerMutation';
import ValidationsSiteOwnerForm from '../common/_BasicValidationForm';
// const
import { UPDATE_SITEOWNER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class SiteOwnerUpdateForm extends _SiteOwnerFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_SITEOWNER_FORM;
  MODEL_NAME = 'siteOwner';
  ROUTE_LIST_DIRECTION = '/network/site-owners';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { siteOwnerId: this.props.siteOwner.id }, // Our refetchQuery needs to know the `siteOwnerID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (siteOwner) => {
    this.setState({ editMode: false });
    this.props.hideModalForm();
    UpdateSiteOwnerMutation(siteOwner, this);
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

SiteOwnerUpdateForm = reduxForm({
  validate: ValidationsSiteOwnerForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(SiteOwnerUpdateForm);

const SiteOwnerUpdateFragment = createRefetchContainer(
  withTranslation()(SiteOwnerUpdateForm),
  {
    siteOwner: graphql`
      fragment SiteOwnerUpdateForm_siteOwner on SiteOwner {
        id
name
description
__typename
url

    responsible_for {
      id
name
description
__typename
relation_id
      ...on Site {
       country
owner_id
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
    query SiteOwnerUpdateFormRefetchQuery($siteOwnerId: ID!) {
      getSiteOwnerById(id: $siteOwnerId) {
        ...SiteOwnerUpdateForm_siteOwner
      }
    }
  `,
);

export default SiteOwnerUpdateFragment;
