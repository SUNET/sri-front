import _OrganizationFormParentClass from './_OrganizationFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateOrganizationMutation from '../../mutations/organization/UpdateOrganizationMutation';
import ValidationsOrganizationForm from './ValidationOrganizationForm';
import PropTypes from 'prop-types';
// const
import { UPDATE_ORGANIZATION_FORM, REMOVE } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class OrganizationUpdateForm extends _OrganizationFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_ORGANIZATION_FORM;
  MODEL_NAME = 'organization';
  state = {
    editMode: false,
  };

  static propTypes = {
    onChange: PropTypes.func,
  };

  refetch = () => {
    this.props.relay.refetch(
      { organizationId: this.props.organization.id }, // Our refetchQuery needs to know the `organizationID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };

  handleSubmit = (entityData) => {
    this.setState({ editMode: false });
    const someItemWillBeDeleted = entityData.contacts.filter((contact) => contact.status === REMOVE).length > 0;
    if (someItemWillBeDeleted) {
      this.entityDataToUpdate = entityData;
      this.props.showModalConfirm('partialDelete');
    } else {
      this.updateMutation(entityData, this);
    }
  };

  updateMutation(entityData, form) {
    UpdateOrganizationMutation(entityData, form);
  }

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

const asyncValidate = ValidationsOrganizationForm.composeAsyncValidators([
  ValidationsOrganizationForm.asyncValidate_organization_id,
  ValidationsOrganizationForm.asyncValidate_relationship_parent_of,
]);

OrganizationUpdateForm = reduxForm({
  form: 'updateOrganization',
  validate: ValidationsOrganizationForm.organizationFormValidate,
  enableReinitialize: true,
  asyncValidate,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(OrganizationUpdateForm);

const OrganizationUpdateFormFragment = createRefetchContainer(
  withTranslation()(OrganizationUpdateForm),
  {
    organization: graphql`
      fragment OrganizationUpdateForm_organization on Organization {
        id
        name
        type {
          name
          value
        }
        website
        organization_id
        organization_number
        description
        incident_management_info
        parent_organization {
          organization_id
          id
          relation_id
          name
        }
        addresses {
          id
          name
          street
          postal_code
          postal_area
          phone
        }
        incoming {
          name
          relation {
            relation_id
            type
            end {
              id
              node_name
            }
            start {
              id
              node_name
            }
          }
        }
        contacts {
          id
          first_name
          last_name
          contact_type {
            name
            value
          }
          emails {
            id
            name
            type {
              name
              value
            }
          }
          phones {
            id
            name
            type {
              name
              value
            }
          }
          roles {
            relation_id
            role_data {
              id
              name
            }
            end {
              id
              name
            }
          }
        }
        with_same_name {
          id
          name
          ... on EndUser {
            url
          }
          ... on Customer {
            url
          }
          ... on SiteOwner {
            url
          }
          ... on Provider {
            url
          }
          ... on PeeringPartner {
            peering_link
          }
          __typename
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
    query OrganizationUpdateFormRefetchQuery($organizationId: ID!) {
      getOrganizationById(id: $organizationId) {
        ...OrganizationUpdateForm_organization
      }
    }
  `,
);

export default OrganizationUpdateFormFragment;
