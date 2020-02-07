import { connect } from "react-redux";
import OrganizationUpdateForm from "../../components/organization/OrganizationUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors, registerField, isDirty } from "redux-form";
import { getContact } from "../../components/contact/Contact";
import uuidv4 from "uuid/v4";
import * as actions from "../../actions/Notify";
import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateOrganizationSelector = formValueSelector("updateOrganization");

    const organization = props.organization;
    const parent_node =
        organization.incoming && organization.incoming.filter((relation) => relation.name === "Parent_of")[0];
    const initialValues = {
        relationship_parent_of: parent_node ? parent_node.relation.start.id : "",
        organization_parent_id: organization.parent_organization[0]
            ? organization.parent_organization[0].organization_id
            : "",
        relationship_parent_of_relation_id: parent_node ? parent_node.relation.relation_id : "",
        id: organization.id,
        name: organization.name,
        type: organization.type,
        website: organization.website,
        organization_id: organization.organization_id,
        organization_number: organization.organization_number,
        affiliation: {
            customer: organization.affiliation_customer,
            end_customer: organization.affiliation_end_customer,
            host_user: organization.affiliation_host_user,
            partner: organization.affiliation_partner,
            provider: organization.affiliation_provider,
            site_owner: organization.affiliation_site_owner
        },
        affiliation_customer: organization.affiliation_customer,
        affiliation_end_customer: organization.affiliation_end_customer,
        affiliation_host_user: organization.affiliation_host_user,
        affiliation_partner: organization.affiliation_partner,
        affiliation_provider: organization.affiliation_provider,
        affiliation_site_owner: organization.affiliation_site_owner,
        description: organization.description,
        incident_management_info: organization.incident_management_info,
        contacts: organization.contacts
            ? organization.contacts.map((contact) => {
                  const contact_relation_id_obj = contact.roles.find((relation_node) => {
                      return relation_node.end.id === organization.id;
                  });
                  const contact_node = contact;
                  return {
                      id: contact_node.id,
                      name: contact_node.first_name + " " + contact_node.last_name,
                      contact_type: contact_node.contact_type,
                      role: contact_relation_id_obj ? contact_relation_id_obj.role_data.id : "",
                      role_label: contact_relation_id_obj ? contact_relation_id_obj.role_data.name : "",
                      role_obj: contact_relation_id_obj,
                      role_relation_id: contact_relation_id_obj ? contact_relation_id_obj.relation_id : "",
                      email: contact_node.emails,
                      email_obj: contact_node.emails,
                      phone: contact_node.phones,
                      phone_obj: contact_node.phones,
                      status: "saved",
                      origin: "store",
                      created: true
                  };
              })
            : [
                  {
                      name: "",
                      role: "",
                      email: "",
                      phone: "",
                      key: uuidv4(),
                      created: false,
                      status: "editing"
                  }
              ],
        addresses: organization.addresses
            ? organization.addresses.map((address) => {
                  return {
                      id: address.id,
                      name: address.name,
                      street: address.street,
                      postal_code: address.postal_code,
                      postal_area: address.postal_area,
                      phone: address.phone,
                      status: "saved",
                      origin: "store",
                      created: true
                  };
              })
            : [
                  {
                      name: "main",
                      street: "",
                      postal_code: "",
                      postal_area: "",
                      phone: "",
                      key: uuidv4(),
                      created: false,
                      status: "editing"
                  }
              ]
    };
    const contactsValues = updateOrganizationSelector(state, "contacts");
    return {
        initialValues,
        name: updateOrganizationSelector(state, "name"),
        type: updateOrganizationSelector(state, "type"),
        website: updateOrganizationSelector(state, "website"),
        organization_id: updateOrganizationSelector(state, "organization_id"),
        organization_number: updateOrganizationSelector(state, "organization_number"),
        description: updateOrganizationSelector(state, "description"),
        relationship_parent_of: updateOrganizationSelector(state, "relationship_parent_of"),
        organization_parent_id: updateOrganizationSelector(state, "organization_parent_id"),
        isDirty_relationship_parent_of: isDirty("updateOrganization")(state, ["organization_parent_id"]),
        incident_management_info: updateOrganizationSelector(state, "incident_management_info"),
        contactsValues: contactsValues,
        isDirty_contacts_roles:
            contactsValues &&
            contactsValues.map((contact, index) => {
                return isDirty("updateOrganization")(state, [`contacts[${index}].role`]);
            }),
        formSyncErrors: getFormSyncErrors("updateOrganization")(state),
        fields: getFormMeta("updateOrganization")(state),
        affiliation: {
            customer: updateOrganizationSelector(state, "affiliation_customer"),
            end_customer: updateOrganizationSelector(state, "affiliation_end_customer"),
            host_user: updateOrganizationSelector(state, "affiliation_host_user"),
            partner: updateOrganizationSelector(state, "affiliation_partner"),
            provider: updateOrganizationSelector(state, "affiliation_provider"),
            site_owner: updateOrganizationSelector(state, "affiliation_site_owner")
        },
        getContact: (id) => getContact(id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        registerFieldAffiliation: () => dispatch(registerField("updateOrganization", "affiliation", "Field")),
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        },
        showNewContactForm
    };
};

const OrganizationUpdateFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationUpdateForm);

export default OrganizationUpdateFormContainer;
