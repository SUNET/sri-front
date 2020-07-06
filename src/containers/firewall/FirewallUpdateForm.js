import { connect } from 'react-redux';
import FirewallUpdateForm from '../../components/firewall/FirewallUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import getProvider from '../../components/provider/Provider';
import getCustomer from '../../components/customer/Customer';
import getEndUser from '../../components/endUser/EndUser';
import getSiteOwner from '../../components/siteOwner/SiteOwner';

function formatterSubInputs(subInputs) {
  return subInputs.map((element) => ({
    ...element,
    status: 'saved',
    origin: 'store',
  }));
}

const mapStateToProps = (state, props) => {
  const updateFirewallSelector = formValueSelector('updateFirewall');
  const { firewall } = props;

  const initialValues = {
    id: firewall.id,
    name: firewall.name,
    description: firewall.description,

    // General info
    // ip_addresses: switchData.ip_addresses,
    operational_state: firewall.operational_state,
    contract_number: firewall.contract_number,
    managed_by: firewall.managed_by ? firewall.managed_by.value : undefined,
    firewallManagedByObj: firewall.managed_by,

    // Details
    firewallModel: firewall.model,
    vendor: firewall.vendor,
    backup: firewall.backup,
    end_support: firewall.end_support,

    // Security
    security_class: firewall.security_class ? firewall.security_class.value : undefined,
    securityClassObj: firewall.security_class,
    security_comment: firewall.security_comment,
    supportGroupObj: firewall.support_group ? firewall.support_group : undefined,
    support_group_id: firewall.support_group ? firewall.support_group.id : undefined,
    responsibleGroupObj: firewall.responsible_group ? firewall.responsible_group : undefined,
    responsible_group_id: firewall.responsible_group ? firewall.responsible_group.id : undefined,

    // OS
    os: firewall.os,
    os_version: firewall.os_version,
    max_number_of_ports: firewall.max_number_of_ports,
    service_tag: firewall.service_tag,

    // Location
    rack_units: firewall.rack_units,
    rack_position: firewall.rack_position,
    owner: firewall.owner ? formatterSubInputs([firewall.owner]) : [],
  };

  return {
    initialValues,
    name: updateFirewallSelector(state, 'name'),
    description: updateFirewallSelector(state, 'description'),
    operational_state: updateFirewallSelector(state, 'operational_state'),
    contract_number: updateFirewallSelector(state, 'contract_number'),
    managed_by: updateFirewallSelector(state, 'managed_by'),
    firewallManagedByObj: updateFirewallSelector(state, 'firewallManagedByObj'),
    firewallModel: updateFirewallSelector(state, 'firewallModel'),
    vendor: updateFirewallSelector(state, 'vendor'),
    backup: updateFirewallSelector(state, 'backup'),
    end_support: updateFirewallSelector(state, 'end_support'),
    security_class: updateFirewallSelector(state, 'security_class'),
    securityClassObj: updateFirewallSelector(state, 'securityClassObj'),
    security_comment: updateFirewallSelector(state, 'security_comment'),
    supportGroupObj: updateFirewallSelector(state, 'supportGroupObj'),
    support_group_id: updateFirewallSelector(state, 'support_group_id'),
    responsibleGroupObj: updateFirewallSelector(state, 'responsibleGroupObj'),
    responsible_group_id: updateFirewallSelector(state, 'responsible_group_id'),
    os: updateFirewallSelector(state, 'os'),
    os_version: updateFirewallSelector(state, 'os_version'),
    max_number_of_ports: updateFirewallSelector(state, 'max_number_of_ports'),
    service_tag: updateFirewallSelector(state, 'service_tag'),
    rack_units: updateFirewallSelector(state, 'rack_units'),
    rack_position: updateFirewallSelector(state, 'rack_position'),
    owner: updateFirewallSelector(state, 'owner'),
    formSyncErrors: getFormSyncErrors('updateFirewall')(state),
    fields: getFormMeta('updateFirewall')(state),
    getProviderById: (id) => getProvider(id),
    getCustomerById: (id) => getCustomer(id),
    getEndUserById: (id) => getEndUser(id),
    getSiteOwnerById: (id) => getSiteOwner(id),
    entityInModalName: state.formModal.entityName,
    editedSubEntity: state.formModal.entityEditedId,
    entitySavedId: state.formModal.entitySavedId,
    entityRemovedId: state.formModal.entityRemovedId,
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
    showModalCreateForm: (entityName) => {
      dispatch(formModalActions.showModalCreateForm(entityName));
    },
    showModalDetailForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalDetailForm(entityName, entityId));
    },
    showModalEditForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalEditForm(entityName, entityId));
    },
  };
};
const FirewallUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(FirewallUpdateForm);

export default FirewallUpdateFormContainer;
