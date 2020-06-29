import _FirewallFormParentClass from './_FirewallFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateFirewallMutation from '../../mutations/firewall/UpdateFirewallMutation';
import ValidationsFirewallForm from '../common/_BasicValidationForm';
// const
import { UPDATE_FIREWALL_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class FirewallUpdateForm extends _FirewallFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_FIREWALL_FORM;
  MODEL_NAME = 'firewall';
  ROUTE_LIST_DIRECTION = '/network/firewalls';
  state = {
    editMode: false,
  };
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
  handleSubmit = (firewall) => {
    this.setState({ editMode: false });
    UpdateFirewallMutation(firewall, this);
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

FirewallUpdateForm = reduxForm({
  form: 'updateFirewall',
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
