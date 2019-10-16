import { connect } from "react-redux";
import OrganizationUpdateForm from "../../components/organization/OrganizationUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";

const mapStateToProps = (state, props) => {
    const updateOrganizationSelector = formValueSelector("updateOrganization");
    const parent_node = props.organization.incoming.filter((relation) => relation.name === "Parent_of")[0];
    const initialValues = {
        handle_id: props.organization.handle_id,
        relationship_parent_of: parent_node ? parent_node.relation.start.handle_id : "",
        name: props.organization.name,
        type: props.organization.type,
        description: props.organization.description,
        incident_management_info: props.organization.incident_management_info,
        contacts:
            props.contacts.length > 0
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
                          email: contact_node.emails[0].name,
                          email_obj: contact_node.emails[0],
                          phone: contact_node.phones[0].name,
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
        description: updateOrganizationSelector(state, "description"),
        relationship_parent_of: updateOrganizationSelector(state, "relationship_parent_of"),
        handle_id: updateOrganizationSelector(state, "handle_id"),
        incident_management_info: updateOrganizationSelector(state, "incident_management_info"),
        memberValues: updateOrganizationSelector(state, "contacts"),
        formSyncErrors: getFormSyncErrors("updateOrganization")(state),
        fields: getFormMeta("updateOrganization")(state),
        refreshFields: state.refreshFields
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const OrganizationUpdateFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationUpdateForm);

export default OrganizationUpdateFormContainer;