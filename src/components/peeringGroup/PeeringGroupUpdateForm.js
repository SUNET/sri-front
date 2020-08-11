import _PeeringGroupFormParentClass from './_PeeringGroupFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdatePeeringGroupMutation from '../../mutations/peeringGroup/UpdatePeeringGroupMutation';
import ValidationsPeeringGroupForm from '../common/_BasicValidationForm';
// const
import { UPDATE_PEERINGGROUP_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class PeeringGroupUpdateForm extends _PeeringGroupFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_PEERINGGROUP_FORM;
  MODEL_NAME = 'peeringGroup';
  ROUTE_LIST_DIRECTION = '/network/peeringGroups';
  state = {
    editMode: false,
  };
  refetch = () => {
    this.props.relay.refetch(
      { peeringGroupId: this.props.peeringGroup.id }, // Our refetchQuery needs to know the `peeringGroupID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (peeringGroup) => {
    this.setState({ editMode: false });
    UpdatePeeringGroupMutation(peeringGroup, this);
  };
  render() {
    let { handleSubmit } = this.props;
    const { editMode } = this.state;
    const showBackButton = isBrowser;
    return (
      <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
        {isBrowser && this.renderSaveCancelButtons()}
        {this.renderHeader(editMode, showBackButton)}
        {this.renderWorkLog()}
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

PeeringGroupUpdateForm = reduxForm({
  validate: ValidationsPeeringGroupForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(PeeringGroupUpdateForm);

const PeeringGroupUpdateFragment = createRefetchContainer(
  withTranslation()(PeeringGroupUpdateForm),
  {
    peeringGroup: graphql`
      fragment PeeringGroupUpdateForm_peeringGroup on PeeringGroup {
        id
        name
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
    query PeeringGroupUpdateFormRefetchQuery($peeringGroupId: ID!) {
      getPeeringGroupById(id: $peeringGroupId) {
        ...PeeringGroupUpdateForm_peeringGroup
      }
    }
  `,
);

export default PeeringGroupUpdateFragment;
