import { connect } from 'react-redux';
import ProviderUpdateForm from '../../components/provider/ProviderUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateProviderInModal' : 'updateProvider';
  const updateProviderSelector = formValueSelector(formName);
  const { provider } = props;

  const initialValues = {
    id: provider.id,
    name: provider.name,
    description: provider.description,
    url: provider.url,
  };
  return {
    form: formName,
    initialValues,
    name: updateProviderSelector(state, 'name'),
    description: updateProviderSelector(state, 'description'),
    url: updateProviderSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateProvider')(state),
    fields: getFormMeta('updateProvider')(state),
    relatedEntities: provider.with_same_name,
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

const ProviderUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProviderUpdateForm);

export default ProviderUpdateFormContainer;
