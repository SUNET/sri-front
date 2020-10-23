import _FirewallFormParentClass from './_FirewallFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateFirewallMutation from '../../mutations/firewall/UpdateFirewallMutation';
import ValidationsFirewallForm from './ValidationsFirewallForm';
// const
import { UPDATE_FIREWALL_FORM, REMOVE } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class FirewallUpdateForm extends _FirewallFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_FIREWALL_FORM;
  MODEL_NAME = 'firewall';
  ROUTE_LIST_DIRECTION = '/network/firewalls';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { firewallId: this.props.firewall.id }, // Our refetchQuery needs to know the `firewallID`
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
    UpdateFirewallMutation(entityData, form);
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

FirewallUpdateForm = reduxForm({
  validate: ValidationsFirewallForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(FirewallUpdateForm);

const FirewallUpdateFragment = createRefetchContainer(
  withTranslation()(FirewallUpdateForm),
  {
    firewall: graphql`
      fragment FirewallUpdateForm_firewall on Firewall {
        id
        name
        description
        operational_state {
          name
          value
        }
        managed_by {
          id
          name
          value
        }
        responsible_group {
          id
          name
        }
        support_group {
          id
          name
        }
        backup
        security_class {
          name
          value
        }
        security_comment
        os
        os_version
        model
        vendor
        service_tag
        end_support
        max_number_of_ports
        rack_units
        rack_position
        rack_back
        contract_number
        location {
          id
          name
        }
        owner {
          __typename
          id
          name
          ... on EndUser {
            type: node_type {
              name: type
            }
          }
          ... on Customer {
            type: node_type {
              name: type
            }
          }
          ... on HostUser {
            type: node_type {
              name: type
            }
          }
          ... on Provider {
            type: node_type {
              name: type
            }
          }
        }
        ports {
          id
          name
          __typename
          relation_id
          type: port_type {
            name
          }
        }
        __typename
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
    query FirewallUpdateFormRefetchQuery($firewallId: ID!) {
      getFirewallById(id: $firewallId) {
        ...FirewallUpdateForm_firewall
      }
    }
  `,
);

export default FirewallUpdateFragment;
