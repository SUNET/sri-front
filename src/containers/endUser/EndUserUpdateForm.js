import { connect } from 'react-redux';
import EndUserUpdateForm from '../../components/endUser/EndUserUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
  const updateEndUserSelector = formValueSelector('updateEndUser');
  const { endUser } = props;

  const initialValues = {
    id: endUser.id,
    name: endUser.name,
    description: endUser.description,
    url: endUser.url,
  };
  return {
    initialValues,
    name: updateEndUserSelector(state, 'name'),
    description: updateEndUserSelector(state, 'description'),
    url: updateEndUserSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateEndUser')(state),
    fields: getFormMeta('updateEndUser')(state),
    relatedEntities: endUser.with_same_name,
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
    // ,showNewContactForm
  };
};

const EndUserUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(EndUserUpdateForm);

export default EndUserUpdateFormContainer;
