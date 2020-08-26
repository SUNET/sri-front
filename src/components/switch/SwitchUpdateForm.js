import _SwitchFormParentClass from './_SwitchFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateSwitchMutation from '../../mutations/switch/UpdateSwitchMutation';
import ValidationsSwitchForm from './ValidationsSwitchForm';
// const
import { UPDATE_SWITCH_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class SwitchUpdateForm extends _SwitchFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_SWITCH_FORM;
  MODEL_NAME = 'switch';
  ROUTE_LIST_DIRECTION = '/network/switches';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { switchId: this.props.switch.id }, // Our refetchQuery needs to know the `switchID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (switchData) => {
    this.setState({ editMode: false });
    UpdateSwitchMutation(switchData, this);
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
        {this.renderModelMainSection(editMode)}
        {/* {editMode && this.renderBulkPortToggleSection()} */}
        {this.renderWorkLog()}
        {!isFromModal && this.renderSaveCancelButtons()}
      </form>
    );
  }
}

SwitchUpdateForm = reduxForm({
  validate: ValidationsSwitchForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(SwitchUpdateForm);

const SwitchUpdateFragment = createRefetchContainer(
  withTranslation()(SwitchUpdateForm),
  {
    switch: graphql`
      fragment SwitchUpdateForm_switch on Switch {
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
    query SwitchUpdateFormRefetchQuery($switchId: ID!) {
      getSwitchById(id: $switchId) {
        ...SwitchUpdateForm_switch
      }
    }
  `,
);

export default SwitchUpdateFragment;
