import { connect } from 'react-redux';
import ExternalEquipmentUpdateForm from '../../components/externalEquipment/ExternalEquipmentUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateExternalEquipmentInModal' : 'updateExternalEquipment';
  const updateExternalEquipmentSelector = formValueSelector(formName);
  const { externalEquipment } = props;

  const initialValues = {
    id: externalEquipment.id,
    name: externalEquipment.name,
    description: externalEquipment.description,
    url: externalEquipment.url,
  };
  return {
    form: formName,
    initialValues,
    name: updateExternalEquipmentSelector(state, 'name'),
    description: updateExternalEquipmentSelector(state, 'description'),
    url: updateExternalEquipmentSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateExternalEquipment')(state),
    fields: getFormMeta('updateExternalEquipment')(state),
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
  };
};
const ExternalEquipmentUpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExternalEquipmentUpdateForm);

export default ExternalEquipmentUpdateFormContainer;
