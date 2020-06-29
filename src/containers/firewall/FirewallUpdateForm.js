import { connect } from 'react-redux';
import FirewallUpdateForm from '../../components/firewall/FirewallUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const updateFirewallSelector = formValueSelector('updateFirewall');
  const { firewall } = props;

  const initialValues = {
    id: firewall.id,
    name: firewall.name,
    description: firewall.description,
    url: firewall.url,
  };
  return {
    initialValues,
    name: updateFirewallSelector(state, 'name'),
    description: updateFirewallSelector(state, 'description'),
    url: updateFirewallSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateFirewall')(state),
    fields: getFormMeta('updateFirewall')(state),
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
const FirewallUpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirewallUpdateForm);

export default FirewallUpdateFormContainer;
