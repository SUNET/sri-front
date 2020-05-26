import _PortFormParentClass from './_PortFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdatePortMutation from '../../mutations/port/UpdatePortMutation';
import BasicValidation from '../common/_BasicValidationForm';
// const
import { UPDATE_PORT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class PortUpdateForm extends _PortFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_PORT_FORM;
  MODEL_NAME = 'port';
  ROUTE_LIST_DIRECTION = '/network/ports';
  state = {
    editMode: true,
  };
  refetch = () => {
    this.props.relay.refetch(
      { portId: this.props.port.id }, // Our refetchQuery needs to know the `portID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        console.log('Refetch done');
      },
      { force: true },
    );
  };
  handleSubmit = (port) => {
    this.setState({ editMode: !this.state.editMode });
    UpdatePortMutation(port, this);
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
        {this.renderParentToggleSection(editMode)}
        {this.renderConnectedToToggleSection(editMode)}
        {this.renderWorkLog()}
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

PortUpdateForm = reduxForm({
  form: 'updatePort',
  validate: BasicValidation.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(PortUpdateForm);

const PortUpdateFragment = createRefetchContainer(
  withTranslation()(PortUpdateForm),
  {
    port: graphql`
      fragment PortUpdateForm_port on Port {
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
    query PortUpdateFormRefetchQuery($portId: ID!) {
      getPortById(id: $portId) {
        ...PortUpdateForm_port
      }
    }
  `,
);

export default PortUpdateFragment;
