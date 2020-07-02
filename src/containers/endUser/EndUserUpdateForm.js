import { connect } from 'react-redux';
import EndUserUpdateForm from '../../components/endUser/EndUserUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateEndUserInModal' : 'updateEndUser';
  const updateEndUserSelector = formValueSelector('updateEndUser');
  const { endUser } = props;

  const initialValues = {
    id: endUser.id,
    name: endUser.name,
    description: endUser.description,
    url: endUser.url,
  };
  return {
    form: formName,
    initialValues,
    name: updateEndUserSelector(state, 'name'),
    description: updateEndUserSelector(state, 'description'),
    url: updateEndUserSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateEndUser')(state),
    fields: getFormMeta('updateEndUser')(state),
    relatedEntities: endUser.with_same_name,
    isFromModal: Boolean(props.isFromModal),
    isEditModeModal: Boolean(props.isFromModal && state.formModal.editing),
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

const EndUserUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(EndUserUpdateForm);

export default EndUserUpdateFormContainer;
