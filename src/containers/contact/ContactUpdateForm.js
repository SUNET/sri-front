import { connect } from "react-redux";
import ContactUpdateForm from "../../components/contact/ContactUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";

const mapStateToProps = (state, props) => {
    const updateContactSelector = formValueSelector("updateContact");
    const initialValues = {
        name: props.contact.first_name + " " + props.contact.last_name,
        notes: props.contact.notes,
        title: props.contact.title,
        contact_type: props.contact.contact_type,
        pgp_fingerprint: props.contact.pgp_fingerprint,
        emails: props.contact.emails
            ? props.contact.emails.map((email) => {
                  return {
                      handle_id: email.handle_id,
                      email: email.name,
                      type: email.type,
                      email_obj: email,
                      status: "saved",
                      origin: "store"
                  };
              })
            : [{ email: "", type: "" }],

        phones: props.contact.phones
            ? props.contact.phones.map((phone) => {
                  return {
                      handle_id: phone.handle_id,
                      phone: phone.name,
                      type: phone.type,
                      phone_obj: phone,
                      status: "saved",
                      origin: "store"
                  };
              })
            : [{ phone: "", type: "" }],

        organizations: props.contact.roles
            ? props.contact.roles.map((role) => {
                  const role_node = role.role_data;
                  return {
                      role: role_node ? role_node.handle_id : "",
                      role_label: role_node ? role_node.name : "",
                      role_obj: role,
                      organization: role.end ? role.end.handle_id : "",
                      organization_label: role.end ? role.end.name : "",
                      status: "saved",
                      origin: "store",
                      created: true
                  };
              })
            : [
                  {
                      role: "",
                      organization: "",
                      key: uuidv4(),
                      created: false,
                      status: "editing"
                  }
              ]
    };
    return {
        initialValues,
        name: updateContactSelector(state, "name"),
        notes: updateContactSelector(state, "notes"),
        title: updateContactSelector(state, "title"),
        pgp_fingerprint: updateContactSelector(state, "pgp_fingerprint"),
        contact_type: updateContactSelector(state, "contact_type"),
        emailValues: updateContactSelector(state, "emails"),
        phoneValues: updateContactSelector(state, "phones"),
        organizationValues: updateContactSelector(state, "organizations"),
        formSyncErrors: getFormSyncErrors("updateContact")(state),
        fields: getFormMeta("updateContact")(state),
        refreshFields: state.refreshFields
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const ContactUpdateFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactUpdateForm);

export default ContactUpdateFormContainer;
