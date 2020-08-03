import _HostFormParentClass from './_HostFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateHostMutation from '../../mutations/host/UpdateHostMutation';
import ValidationsHostForm from '../common/_BasicValidationForm';
// const
import { UPDATE_HOST_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class HostUpdateForm extends _HostFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_HOST_FORM;
  MODEL_NAME = 'host';
  ROUTE_LIST_DIRECTION = '/network/hosts';
  state = {
    editMode: false,
  };
  refetch = () => {
    this.props.relay.refetch(
      { hostId: this.props.host.id }, // Our refetchQuery needs to know the `hostID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (host) => {
    this.setState({ editMode: false });
    UpdateHostMutation(host, this);
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

HostUpdateForm = reduxForm({
  validate: ValidationsHostForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(HostUpdateForm);

const HostUpdateFragment = createRefetchContainer(
  withTranslation()(HostUpdateForm),
  {
    host: graphql`
      fragment HostUpdateForm_host on Host {
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
    query HostUpdateFormRefetchQuery($hostId: ID!) {
      getHostById(id: $hostId) {
        ...HostUpdateForm_host
      }
    }
  `,
);

export default HostUpdateFragment;
