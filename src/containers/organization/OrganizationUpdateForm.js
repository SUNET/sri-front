import { connect } from "react-redux";
import OrganizationUpdateForm from "../../components/organization/OrganizationUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";

const mapStateToProps = (state, props) => {
    const updateGroupSelector = formValueSelector("updateOrganization");
    const initialValues = {
        name: props.group.name,
        description: props.group.description,
        contacts:
            props.contacts.edges.length > 0
                ? props.contacts.edges.map((contact) => {
                      const contact_node = contact.node;
                      return {
                          handle_id: contact_node.handle_id,
                          name: contact_node.first_name + " " + contact_node.last_name,
                          contact_type: contact_node.contact_type,
                          role: contact_node.roles[0],
                          role_label: contact_node.roles[0].end.name,
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
                  ]
    };
    return {
        initialValues,
        name: updateGroupSelector(state, "name"),
        description: updateGroupSelector(state, "description"),
        memberValues: updateGroupSelector(state, "contacts"),
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
