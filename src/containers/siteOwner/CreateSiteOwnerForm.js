import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreateSiteOwnerForm from '../../components/siteOwner/CreateSiteOwnerForm';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createSiteOwnerInModal' : 'createSiteOwner';
  const updateSiteOwnerSelector = formValueSelector('createSiteOwner');
  return {
    form: formName,
    fields: getFormMeta('createSiteOwner')(state),
    formSyncErrors: getFormSyncErrors('createSiteOwner')(state),
    name: updateSiteOwnerSelector(state, 'name'),
    url: updateSiteOwnerSelector(state, 'url'),
    isFromModal: props.isFromModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
    createdEntity: (entityName, entityId) => {
      dispatch(formModalActions.createdEntity(entityName, entityId));
    },
  };
};

const CreateSiteOwnerFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateSiteOwnerForm);

export default CreateSiteOwnerFormContainer;
