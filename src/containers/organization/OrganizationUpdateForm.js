import { connect } from "react-redux";
import OrganizationUpdateForm from "../../components/organization/OrganizationUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors, registerField } from "redux-form";
import { getContact } from "../../components/contact/Contact";
import uuidv4 from "uuid/v4";

const mapStateToProps = (state, props) => {
    const updateOrganizationSelector = formValueSelector("updateOrganization");
    const parent_node = props.organization.incoming.filter((relation) => relation.name === "Parent_of")[0];
    const initialValues = {
        relationship_parent_of: parent_node ? parent_node.relation.start.handle_id : "",
        name: props.organization.name,
        type: props.organization.type,
        website: props.organization.website,
        customer_id: props.organization.customer_id,
        affiliation: {
            customer: props.organization.affiliation_customer,
            end_customer: props.organization.affiliation_end_customer,
            host_user: props.organization.affiliation_host_user,
            partner: props.organization.affiliation_partner,
            provider: props.organization.affiliation_provider,
            site_owner: props.organization.affiliation_site_owner
        },
        affiliation_customer: props.organization.affiliation_customer,
        affiliation_end_customer: props.organization.affiliation_end_customer,
        affiliation_host_user: props.organization.affiliation_host_user,
        affiliation_partner: props.organization.affiliation_partner,
        affiliation_provider: props.organization.affiliation_provider,
        affiliation_site_owner: props.organization.affiliation_site_owner,
        description: props.organization.description,
        incident_management_info: props.organization.incident_management_info,
        contacts: props.contacts
            ? props.contacts.map((contact) => {
                  const contact_node = contact.contact;
                  const role_node = contact.role;
                  return {
                      handle_id: contact_node.handle_id,
                      name: contact_node.first_name + " " + contact_node.last_name,
                      contact_type: contact_node.contact_type,
                      role: role_node.handle_id,
                      role_label: role_node.name,
                      role_relation_id: contact.relation_id,
                      email: contact_node.emails[0] ? contact_node.emails[0].name : "",
                      email_obj: contact_node.emails[0],
                      phone: contact_node.phones[0] ? contact_node.phones[0].name : "",
                      phone_obj: contact_node.phones[0],
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
            props.organization.addresses.length > 0
                ? props.organization.addresses.map((address) => {
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
    return {
        initialValues,
        name: updateOrganizationSelector(state, "name"),
        type: updateOrganizationSelector(state, "type"),
        website: updateOrganizationSelector(state, "website"),
        customer_id: updateOrganizationSelector(state, "customer_id"),
        description: updateOrganizationSelector(state, "description"),
        relationship_parent_of: updateOrganizationSelector(state, "relationship_parent_of"),
        incident_management_info: updateOrganizationSelector(state, "incident_management_info"),
        contactsValues: updateOrganizationSelector(state, "contacts"),
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
        registerFieldAffiliation: () => dispatch(registerField("updateOrganization", "affiliation", "Field"))
    };
};

const OrganizationUpdateFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationUpdateForm);

export default OrganizationUpdateFormContainer;
