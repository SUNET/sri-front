import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreateCableForm from '../../components/cable/CreateCableForm';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createCableInModal' : 'createCable';
  const updateCableSelector = formValueSelector('createCable');
  return {
    form: formName,
    fields: getFormMeta(formName)(state),
    formSyncErrors: getFormSyncErrors(formName)(state),
    name: updateCableSelector(state, 'name'),
    isFromModal: props.isFromModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    showModalCreateForm: (entityName) => {
      dispatch(formModalActions.showModalCreateForm(entityName));
    },
    showModalUpdateForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalUpdateForm(entityName, entityId));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
  };
};

const CreateCableFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCableForm);

export default CreateCableFormContainer;
