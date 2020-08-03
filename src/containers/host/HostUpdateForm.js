import { connect } from 'react-redux';
import HostUpdateForm from '../../components/host/HostUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateHostInModal' : 'updateHost';
  const updateHostSelector = formValueSelector(formName);
  const { host } = props;

  const initialValues = {
    id: host.id,
    name: host.name,
    description: host.description,
  };
  return {
    form: formName,
    initialValues,
    name: updateHostSelector(state, 'name'),
    description: updateHostSelector(state, 'description'),
    formSyncErrors: getFormSyncErrors('updateHost')(state),
    fields: getFormMeta('updateHost')(state),
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
const HostUpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostUpdateForm);

export default HostUpdateFormContainer;
