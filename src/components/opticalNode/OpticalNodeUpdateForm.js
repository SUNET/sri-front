import _OpticalNodeFormParentClass from './_OpticalNodeFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateOpticalNodeMutation from '../../mutations/opticalNode/UpdateOpticalNodeMutation';
import ValidationsOpticalNodeForm from './ValidationsOpticalNodeForm';
// const
import { UPDATE_OPTICALNODE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class OpticalNodeUpdateForm extends _OpticalNodeFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_OPTICALNODE_FORM;
  MODEL_NAME = 'opticalNode';
  ROUTE_LIST_DIRECTION = '/network/opticalNodes';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { opticalNodeId: this.props.opticalNode.id }, // Our refetchQuery needs to know the `opticalNodeID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (opticalNode) => {
    this.setState({ editMode: false });
    UpdateOpticalNodeMutation(opticalNode, this);
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

OpticalNodeUpdateForm = reduxForm({
  validate: ValidationsOpticalNodeForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(OpticalNodeUpdateForm);

const OpticalNodeUpdateFragment = createRefetchContainer(
  withTranslation()(OpticalNodeUpdateForm),
  {
    opticalNode: graphql`
      fragment OpticalNodeUpdateForm_opticalNode on OpticalNode {
        __typename
        id
        name
        description
        type {
          id
          name
          value
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
        rack_units
        rack_position
        rack_back
        operational_state {
          id
          name
          value
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
    query OpticalNodeUpdateFormRefetchQuery($opticalNodeId: ID!) {
      getOpticalNodeById(id: $opticalNodeId) {
        ...OpticalNodeUpdateForm_opticalNode
      }
    }
  `,
);

export default OpticalNodeUpdateFragment;
