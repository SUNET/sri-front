import { connect } from 'react-redux';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import CableUpdateForm from '../../components/cable/CableUpdateForm';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import { getProvider } from '../../components/provider/Provider';

const mapStateToProps = (state, props) => {
  const updateCableSelector = formValueSelector('updateCable');
  const { cable } = props;
  const initialValues = {
    id: cable.id,
    name: cable.name,
    description: cable.description,
    cable_type: cable.cable_type ? cable.cable_type.value : undefined,
    cableTypeObj: cable.cable_type,
  };
  return {
    initialValues,
    name: updateCableSelector(state, 'name'),
    description: updateCableSelector(state, 'description'),
    cable_type: updateCableSelector(state, 'cable_type'),
    cableTypeObj: updateCableSelector(state, 'cableTypeObj'),
    formSyncErrors: getFormSyncErrors('updateCable')(state),
    fields: getFormMeta('updateCable')(state),
    getProvider: (id) => getProvider(id),
    shownInModal: state.formModal.showModalForm,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
  };
};

const CableUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CableUpdateForm);

export default CableUpdateFormContainer;
