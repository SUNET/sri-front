import { connect } from "react-redux";
import GroupUpdateForm from "../../components/group/GroupUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";
import * as actions from "../../actions/Notify";
import { getContact } from "../../components/contact/Contact";

const mapStateToProps = (state, props) => {
    const updateGroupSelector = formValueSelector("updateGroup");
    const group = props.group;
    console.log("New PROPS", props);
    const initialValues = {
        handle_id: group.handle_id,
        name: group.name,
        description: group.description,
        members: group.contacts
            ? group.contacts.map((member) => {
                  return {
                      handle_id: member.handle_id,
                      name: member.first_name + " " + member.last_name,
                      contact_type: member.contact_type,
                      organization: member.roles[0] ? member.roles[0].end.handle_id : "",
                      organization_label: member.roles[0] ? member.roles[0].end.name : "",
                      email: member.emails[0] ? member.emails[0].name : "",
                      email_obj: member.emails.length > 0 ? member.emails[0] : undefined,
                      phone: member.phones[0] ? member.phones[0].name : "",
                      phone_obj: member.phones.length > 0 ? member.phones[0] : undefined,
                      status: "saved",
                      origin: "store",
                      created: true
                  };
              })
            : [
                  {
                      name: "",
                      organization: "",
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
        memberValues: updateGroupSelector(state, "members"),
        formSyncErrors: getFormSyncErrors("updateGroup")(state),
        fields: getFormMeta("updateGroup")(state),
        getContact: (handle_id) => getContact(handle_id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        }
    };
};

const GroupUpdateFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupUpdateForm);

export default GroupUpdateFormContainer;
