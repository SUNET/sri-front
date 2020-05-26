import { connect } from 'react-redux';
import { formValueSelector, getFormMeta, getFormSyncErrors, isDirty } from 'redux-form';
import uuidv4 from 'uuid/v4';
import ContactUpdateForm from '../../components/contact/ContactUpdateForm';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import * as createContactFormModalActions from '../../actions/ComponentFormRow';

const mapStateToProps = (state, props) => {
  const updateContactSelector = formValueSelector('updateContact');
  const initialValues = {
    first_name: props.contact.first_name,
    last_name: props.contact.last_name,
    id: props.contact.id,
    notes: props.contact.notes,
    title: props.contact.title,
    contact_type: props.contact.contact_type ? props.contact.contact_type.value : undefined,
    contactTypeObj: props.contact.contact_type,
    pgp_fingerprint: props.contact.pgp_fingerprint,
    emails: props.contact.emails
      ? props.contact.emails.map((email) => {
          return {
            id: email.id,
            email: email.name,
            type: email.type.value,
            type_name: email.type.name,
            type_value: email.type.value,
            email_obj: email,
            status: 'saved',
            origin: 'store',
          };
        })
      : [{ email: '', type: '' }],

    phones: props.contact.phones
      ? props.contact.phones.map((phone) => {
          return {
            id: phone.id,
            phone: phone.name,
            type: phone.type.value,
            type_name: phone.type.name,
            type_value: phone.type.value,
            phone_obj: phone,
            status: 'saved',
            origin: 'store',
          };
        })
      : [{ phone: '', type: '' }],

    organizations: props.contact.roles
      ? props.contact.roles.map((role) => {
          const role_node = role.role_data;
          return {
            role: role_node ? role_node.id : '',
            role_label: role_node ? role_node.name : '',
            role_obj: role,
            organization: role.end ? role.end.id : '',
            organization_id: role.end ? role.end.organization_id : '',
            organization_label: role.end ? role.end.name : '',
            status: 'saved',
            origin: 'store',
            created: true,
            key: role.relation_id,
          };
        })
      : [
          {
            role: '',
            organization: '',
            key: uuidv4(),
            created: false,
            status: 'editing',
          },
        ],
  };
  const organizationValues = updateContactSelector(state, 'organizations');
  return {
    initialValues,
    name: updateContactSelector(state, 'name'),
    first_name: updateContactSelector(state, 'first_name'),
    last_name: updateContactSelector(state, 'last_name'),
    notes: updateContactSelector(state, 'notes'),
    title: updateContactSelector(state, 'title'),
    pgp_fingerprint: updateContactSelector(state, 'pgp_fingerprint'),
    contact_type: updateContactSelector(state, 'contact_type'),
    contactTypeObj: updateContactSelector(state, 'contactTypeObj'),
    emailValues: updateContactSelector(state, 'emails'),
    phoneValues: updateContactSelector(state, 'phones'),
    organizationValues,
    isDirty_organizations_roles:
      organizationValues &&
      organizationValues.map((organization, index) => {
        return isDirty('updateContact')(state, [`organizations[${index}]`]);
      }),
    formSyncErrors: getFormSyncErrors('updateContact')(state),
    fields: getFormMeta('updateContact')(state),
    shown_in_modal: state.componentFormRow.show_contact_form,
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
    hideContactModal: () => dispatch(createContactFormModalActions.hideNewContactForm(props.index)),
  };
};

const ContactUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ContactUpdateForm);

export default ContactUpdateFormContainer;
