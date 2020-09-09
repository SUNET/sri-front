import { connect } from 'react-redux';
import OrganizationUpdateForm from '../../components/organization/OrganizationUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors, registerField, isDirty } from 'redux-form';
import { getContact } from '../../components/contact/Contact';
import uuidv4 from 'uuid/v4';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import * as FormModalActions from '../../actions/FormModal';
import * as confirmModalActions from '../../actions/ConfirmModal';

function formattedContacts(organization) {
  const { contacts } = organization;
  let allFormattedContacts = [];
  if (contacts) {
    allFormattedContacts = contacts.map((contact) => {
      const contactRelationIdObj = contact.roles.filter((relationNode) => relationNode.end.id === organization.id);
      return {
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        name: `${contact.first_name} ${contact.last_name}`,
        contact_type: contact.contact_type,
        originalRoles: contactRelationIdObj.map((relationNode) => ({
          ...relationNode.role_data,
          relation_id: relationNode.relation_id,
          status: 'saved',
        })),
        roles: contactRelationIdObj.map((relationNode) => ({
          ...relationNode.role_data,
          relation_id: relationNode.relation_id,
          status: 'saved',
        })),
        email: contact.emails,
        email_obj: contact.emails,
        phone: contact.phones,
        phone_obj: contact.phones,
        status: 'saved',
        origin: 'store',
        created: true,
        key: contact.id,
      };
    });
  }
  return allFormattedContacts;
}
function formattedAddresses(addresses) {
  if (addresses) {
    return addresses.map((address) => ({
      id: address.id,
      name: address.name,
      street: address.street,
      postal_code: address.postal_code,
      postal_area: address.postal_area,
      phone: address.phone,
      status: 'saved',
      origin: 'store',
      created: true,
      key: address.id,
    }));
  }
  return [
    {
      name: 'main',
      street: '',
      postal_code: '',
      postal_area: '',
      phone: '',
      key: uuidv4(),
      created: false,
      status: 'editing',
    },
  ];
}
const mapStateToProps = (state, props) => {
  const updateOrganizationSelector = formValueSelector('updateOrganization');

  const { organization } = props;
  const parent_node =
    organization.incoming && organization.incoming.filter((relation) => relation.name === 'Parent_of')[0];
  const initialValues = {
    relationship_parent_of: parent_node ? parent_node.relation.start.id : '',
    organization_parent: organization.parent_organization,
    organization_parent_id: organization.parent_organization ? organization.parent_organization.organization_id : null,
    id: organization.id,
    name: organization.name,
    type: organization.type ? organization.type.value : undefined,
    typeObj: organization.type,
    website: organization.website,
    organization_id: organization.organization_id,
    organization_number: organization.organization_number,
    affiliation: {
      customer: organization.affiliation_customer,
      end_customer: organization.affiliation_end_customer,
      host_user: organization.affiliation_host_user,
      partner: organization.affiliation_partner,
      provider: organization.affiliation_provider,
      site_owner: organization.affiliation_site_owner,
    },
    affiliation_customer: organization.affiliation_customer,
    affiliation_end_customer: organization.affiliation_end_customer,
    affiliation_host_user: organization.affiliation_host_user,
    affiliation_partner: organization.affiliation_partner,
    affiliation_provider: organization.affiliation_provider,
    affiliation_site_owner: organization.affiliation_site_owner,
    description: organization.description,
    incident_management_info: organization.incident_management_info,
    contacts: formattedContacts(organization),
    addresses: formattedAddresses(organization.addresses),
  };
  const contactsValues = updateOrganizationSelector(state, 'contacts');
  const addressesValues = updateOrganizationSelector(state, 'addresses');

  return {
    initialValues,
    name: updateOrganizationSelector(state, 'name'),
    type: updateOrganizationSelector(state, 'type'),
    typeObj: updateOrganizationSelector(state, 'typeObj'),
    website: updateOrganizationSelector(state, 'website'),
    organization_id: updateOrganizationSelector(state, 'organization_id'),
    organization_number: updateOrganizationSelector(state, 'organization_number'),
    description: updateOrganizationSelector(state, 'description'),
    relationship_parent_of: updateOrganizationSelector(state, 'relationship_parent_of'),
    organization_parent_id: updateOrganizationSelector(state, 'organization_parent_id'),
    organization_parent: updateOrganizationSelector(state, 'organization_parent'),
    isDirty_relationship_parent_of: isDirty('updateOrganization')(state, ['organization_parent_id']),
    incident_management_info: updateOrganizationSelector(state, 'incident_management_info'),
    contactsValues,
    addressesValues,
    isDirty_contacts_roles:
      contactsValues &&
      contactsValues.map((contact, index) => {
        return isDirty('updateOrganization')(state, [`contacts[${index}].role`]);
      }),
    formSyncErrors: getFormSyncErrors('updateOrganization')(state),
    fields: getFormMeta('updateOrganization')(state),
    affiliation: {
      customer: updateOrganizationSelector(state, 'affiliation_customer'),
      end_customer: updateOrganizationSelector(state, 'affiliation_end_customer'),
      host_user: updateOrganizationSelector(state, 'affiliation_host_user'),
      partner: updateOrganizationSelector(state, 'affiliation_partner'),
      provider: updateOrganizationSelector(state, 'affiliation_provider'),
      site_owner: updateOrganizationSelector(state, 'affiliation_site_owner'),
    },
    entityRemovedId: state.formModal.entityRemovedId,
    entitySavedId: state.formModal.entitySavedId,
    getContact: (id) => getContact(id),
    // these props are because this form has entities listed as attributes
    isDeleteConfirmed: state.confirmModal.confirmDelete,
    confirmModalType: state.confirmModal.type,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    registerFieldAffiliation: () => dispatch(registerField('updateOrganization', 'affiliation', 'Field')),
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
    hideContactForm: () => {
      dispatch(FormModalActions.hideModalForm());
    },
    showNewContactForm: () => {
      dispatch(FormModalActions.showModalCreateForm('Contact'));
    },
    showContactDetailForm: (idContact) => {
      dispatch(FormModalActions.showModalDetailForm('Contact', idContact));
    },
    showContactEditForm: (idContact) => {
      dispatch(FormModalActions.showModalEditForm('Contact', idContact));
    },
    // these methods are because this form has entities listed as attributes
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};

const OrganizationUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(OrganizationUpdateForm);

export default OrganizationUpdateFormContainer;
