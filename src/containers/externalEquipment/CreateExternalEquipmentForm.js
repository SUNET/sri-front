import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as actions from '../../actions/Notify';
import CreateExternalEquipmentForm from '../../components/externalEquipment/CreateExternalEquipmentForm';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createExternalEquipmentInModal' : 'createExternalEquipment';
  const updateExternalEquipmentSelector = formValueSelector(formName);
  return {
    form: formName,
    fields: getFormMeta('createExternalEquipment')(state),
    formSyncErrors: getFormSyncErrors('createExternalEquipment')(state),
    name: updateExternalEquipmentSelector(state, 'name'),
    url: updateExternalEquipmentSelector(state, 'url'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
  };
};

const CreateExternalEquipmentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateExternalEquipmentForm);

export default CreateExternalEquipmentFormContainer;
