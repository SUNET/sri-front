import { connect } from 'react-redux';
import ProviderUpdateForm from '../../components/provider/ProviderUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const updateProviderSelector = formValueSelector('updateProvider');
  const { provider } = props;

  const initialValues = {
    id: provider.id,
    name: provider.name,
    description: provider.description,
    url: provider.url,
  };
  return {
    initialValues,
    name: updateProviderSelector(state, 'name'),
    description: updateProviderSelector(state, 'description'),
    url: updateProviderSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateProvider')(state),
    fields: getFormMeta('updateProvider')(state),
    relatedEntities: provider.with_same_name,
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

const ProviderUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProviderUpdateForm);

export default ProviderUpdateFormContainer;
