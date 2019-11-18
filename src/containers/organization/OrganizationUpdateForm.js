import { connect } from "react-redux";
import OrganizationUpdateForm from "../../components/organization/OrganizationUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors, registerField, isDirty } from "redux-form";
import { getContact } from "../../components/contact/Contact";
import uuidv4 from "uuid/v4";
import * as actions from "../../actions/Notify";

const mapStateToProps = (state, props) => {
    const updateOrganizationSelector = formValueSelector("updateOrganization");

    const organization = props.organization;
    const parent_node = organization.incoming.filter((relation) => relation.name === "Parent_of")[0];
    const initialValues = {
        relationship_parent_of: parent_node ? parent_node.relation.start.handle_id : "",
        relationship_parent_of_relation_id: parent_node ? parent_node.relation.relation_id : "",
        handle_id: organization.handle_id,
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
                  const contact_node = contact;
                  return {
                      handle_id: contact_node.handle_id,
                      name: contact_node.first_name + " " + contact_node.last_name,
                      contact_type: contact_node.contact_type,
                      role: contact_node.roles[0] ? contact_node.roles[0].role_data.handle_id : "",
                      role_label: contact_node.roles[0] ? contact_node.roles[0].role_data.name : "",
                      role_obj: contact_node.roles[0],
                      role_relation_id: contact_node.roles[0] ? contact_node.roles[0].relation_id : "",
                      email: contact_node.emails[0] ? contact_node.emails[0].name : "",
                      email_obj: contact_node.emails.length > 0 ? contact_node.emails[0] : undefined,
                      phone: contact_node.phones[0] ? contact_node.phones[0].name : "",
                      phone_obj: contact_node.phones.length > 0 ? contact_node.phones[0] : undefined,
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
        addresses:
            organization.addresses.length > 0
                ? organization.addresses.map((address) => {
                      return {
                          handle_id: address.handle_id,
                          name: address.name,
                          website: address.website,
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
                          name: "",
                          role: "",
                          email: "",
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
        isDirty_relationship_parent_of: isDirty("updateOrganization")(state, ["relationship_parent_of"]),
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
        getContact: (handle_id) => getContact(handle_id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        registerFieldAffiliation: () => dispatch(registerField("updateOrganization", "affiliation", "Field")),
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        }
    };
};

const OrganizationUpdateFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationUpdateForm);

export default OrganizationUpdateFormContainer;
