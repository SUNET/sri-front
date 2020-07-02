import { connect } from 'react-redux';
import SiteOwnerUpdateForm from '../../components/siteOwner/SiteOwnerUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateSiteOwnerInModal' : 'updateSiteOwner';
  const updateSiteOwnerSelector = formValueSelector('updateSiteOwner');
  const { siteOwner } = props;

  const initialValues = {
    id: siteOwner.id,
    name: siteOwner.name,
    description: siteOwner.description,
    url: siteOwner.url,
  };
  return {
    form: formName,
    initialValues,
    name: updateSiteOwnerSelector(state, 'name'),
    description: updateSiteOwnerSelector(state, 'description'),
    url: updateSiteOwnerSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateSiteOwner')(state),
    fields: getFormMeta('updateSiteOwner')(state),
    relatedEntities: siteOwner.with_same_name,
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

const SiteOwnerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(SiteOwnerUpdateForm);

export default SiteOwnerUpdateFormContainer;
