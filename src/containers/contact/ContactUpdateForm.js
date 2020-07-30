import { connect } from 'react-redux';
import { formValueSelector, getFormMeta, getFormSyncErrors, isDirty } from 'redux-form';
import uuidv4 from 'uuid/v4';
import ContactUpdateForm from '../../components/contact/ContactUpdateForm';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import * as FormModalActions from '../../actions/FormModal';
import { UNLINK, REMOVE, SAVED } from '../../utils/constants';

const formatRoles = (roles = []) => {
  const emptyObject = {
    id: '',
    name: '',
    organization_id: '',
    organization_number: null,
    roles: [
      {
        id: '',
        status: 'editing',
        origin: 'store',
        created: false,
        relation_id: null,
      },
    ],
  };
  const rolesByOrganizations = [];

  roles.forEach((role) => {
    const indexInResultArray = rolesByOrganizations.findIndex((org) => org.id === role.end.id);
    const roleData = {
      ...role.role_data,
      ...{
        relation_id: role.relation_id,
        status: 'saved',
        origin: 'store',
        created: true,
      },
    };

    if (indexInResultArray < 0) {
      const organizationData = { ...role.end, status: SAVED, origin: 'store' };
      rolesByOrganizations.push({ ...organizationData, roles: [roleData] });
    } else {
      rolesByOrganizations[indexInResultArray].roles.push(roleData);
    }
  });
  return roles.length > 0 ? rolesByOrganizations : [emptyObject];
};

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateContactInModal' : 'updateContact';
  const updateContactSelector = formValueSelector(formName);
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

    organizations: formatRoles(props.contact.roles),
  };

  return {
    form: formName,
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
    organizations: updateContactSelector(state, 'organizations'),
    formSyncErrors: getFormSyncErrors(formName)(state),
    fields: getFormMeta(formName)(state),
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
    hideContactModal: () => dispatch(FormModalActions.hideModalForm(props.index)),
  };
};

const ContactUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ContactUpdateForm);

export default ContactUpdateFormContainer;
