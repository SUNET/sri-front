import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as actions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreatePortForm from '../../components/port/CreatePortForm';
import getCable from '../../components/cable/Cable';
import getPort from '../../components/port/Port';

const mapStateToProps = (state, props) => {
  const updatePortSelector = formValueSelector('createPort');
  return {
    fields: getFormMeta('createPort')(state),
    formSyncErrors: getFormSyncErrors('createPort')(state),
    name: updatePortSelector(state, 'name'),
    getCableById: (id) => getCable(id),
    getPortById: (id) => getPort(id),
    shownInModal: state.formModal.showModalForm,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
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

const CreatePortFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePortForm);

export default CreatePortFormContainer;
