import _ODFFormParentClass from './_ODFFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateODFMutation from '../../mutations/ODF/UpdateODFMutation';
import ValidationsODFForm from '../common/_BasicValidationForm';
// const
import { UPDATE_ODF_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class ODFUpdateForm extends _ODFFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_ODF_FORM;
  MODEL_NAME = 'ODF';
  ROUTE_LIST_DIRECTION = '/network/odfs';
  state = {
    editMode: false,
  };
  refetch = () => {
    this.props.relay.refetch(
      { ODFId: this.props.ODF.id }, // Our refetchQuery needs to know the `ODFID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (ODF) => {
    this.setState({ editMode: false });
    UpdateODFMutation(ODF, this);
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

ODFUpdateForm = reduxForm({
  validate: ValidationsODFForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(ODFUpdateForm);

const ODFUpdateFragment = createRefetchContainer(
  withTranslation()(ODFUpdateForm),
  {
    ODF: graphql`
      fragment ODFUpdateForm_ODF on ODF {
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
    query ODFUpdateFormRefetchQuery($ODFId: ID!) {
      getODFById(id: $ODFId) {
        ...ODFUpdateForm_ODF
      }
    }
  `,
);

export default ODFUpdateFragment;