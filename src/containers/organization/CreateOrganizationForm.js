import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector, registerField, isDirty } from 'redux-form';
import { getContact } from '../../components/contact/Contact';
import CreateOrganizationForm from '../../components/organization/CreateOrganizationForm';
import * as actions from '../../actions/Notify';
import * as FormModalActions from '../../actions/FormModal';

const mapStateToProps = (state, props) => {
  const createOrganizationSelector = formValueSelector('createOrganization');
  const contactsValues = createOrganizationSelector(state, 'contacts');
  return {
    fields: getFormMeta('createOrganization')(state),
    formSyncErrors: getFormSyncErrors('createOrganization')(state),
    addressesValues: createOrganizationSelector(state, 'addresses'),
    contactsValues: contactsValues,
    name: createOrganizationSelector(state, 'name'),
    relationship_parent_of: createOrganizationSelector(state, 'relationship_parent_of'),
    organization_parent_id: createOrganizationSelector(state, 'organization_parent_id'),
    isDirty_contacts_roles:
      contactsValues &&
      contactsValues.map((contact, index) => {
        return isDirty('createOrganization')(state, [`contacts[${index}].role`]);
      }),
    affiliation: {
      customer: createOrganizationSelector(state, 'affiliation_customer'),
      end_customer: createOrganizationSelector(state, 'affiliation_end_customer'),
      host_user: createOrganizationSelector(state, 'affiliation_host_user'),
      partner: createOrganizationSelector(state, 'affiliation_partner'),
      provider: createOrganizationSelector(state, 'affiliation_provider'),
      site_owner: createOrganizationSelector(state, 'affiliation_site_owner'),
    },
    entityRemovedId: state.formModal.entityRemovedId,
    entitySavedId: state.formModal.entitySavedId,
    getContact: (id) => getContact(id),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  dispatch(registerField('createOrganization', 'affiliation', 'Field'));
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
    showNewContactForm: () => {
      dispatch(FormModalActions.showModalCreateForm('Contact'));
    },
    hideContactDetailForm: () => {
      dispatch(FormModalActions.hideModalForm());
    },
    showContactDetailForm: (idContact) => {
      dispatch(FormModalActions.showModalDetailForm('Contact', idContact));
    },
    showContactEditForm: (idContact) => {
      dispatch(FormModalActions.showModalEditForm('Contact', idContact));
    },
  };
};

const CreateOrganizationFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOrganizationForm);

export default CreateOrganizationFormContainer;
