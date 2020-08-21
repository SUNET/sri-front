import _OpticalLinkFormParentClass from './_OpticalLinkFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateOpticalLinkMutation from '../../mutations/opticalLink/UpdateOpticalLinkMutation';
import ValidationsOpticalLinkForm from './ValidationsOpticalLinkForm';
// const
import { UPDATE_OPTICALLINK_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class OpticalLinkUpdateForm extends _OpticalLinkFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_OPTICALLINK_FORM;
  MODEL_NAME = 'opticalLink';
  ROUTE_LIST_DIRECTION = '/network/opticalLinks';
  state = {
    editMode: false,
  };
  refetch = () => {
    this.props.relay.refetch(
      { opticalLinkId: this.props.opticalLink.id }, // Our refetchQuery needs to know the `opticalLinkID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (opticalLink) => {
    this.setState({ editMode: false });
    UpdateOpticalLinkMutation(opticalLink, this);
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
        {this.renderPortsToggleSection(editMode)}
        {editMode && this.renderBulkPortToggleSection()}
        {this.renderWorkLog()}
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

OpticalLinkUpdateForm = reduxForm({
  validate: ValidationsOpticalLinkForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(OpticalLinkUpdateForm);

const OpticalLinkUpdateFragment = createRefetchContainer(
  withTranslation()(OpticalLinkUpdateForm),
  {
    opticalLink: graphql`
      fragment OpticalLinkUpdateForm_opticalLink on OpticalLink {
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
    query OpticalLinkUpdateFormRefetchQuery($opticalLinkId: ID!) {
      getOpticalLinkById(id: $opticalLinkId) {
        ...OpticalLinkUpdateForm_opticalLink
      }
    }
  `,
);

export default OpticalLinkUpdateFragment;
