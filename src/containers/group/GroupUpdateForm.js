import { connect } from "react-redux";
import GroupUpdateForm from "../../components/group/GroupUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";
import * as actions from "../../actions/Notify";
import { getContact } from "../../components/contact/Contact";

const mapStateToProps = (state, props) => {
    const updateGroupSelector = formValueSelector("updateGroup");
    const group = props.group;
    const initialValues = {
        handle_id: group.handle_id,
        name: group.name,
        description: group.description,
        members: group.contacts
            ? group.contacts.map((member) => {
                  let group_relation_id_obj =
                      member.outgoing &&
                      member.outgoing.find((relation_node) => {
                          return (
                              relation_node.relation.type === "Member_of" &&
                              relation_node.relation.end.handle_id === group.handle_id
                          );
                      });
                  return {
                      handle_id: member.handle_id,
                      name: member.first_name + " " + member.last_name,
                      contact_type: member.contact_type,
                      organization: member.roles[0] ? member.roles[0].end.handle_id : "",
                      organization_label: member.roles[0] ? member.roles[0].end.name : "",
                      group_relation_id: group_relation_id_obj && group_relation_id_obj.relation.relation_id,
                      email: member.emails,
                      email_obj: member.emails,
                      phone: member.phones,
                      phone_obj: member.phones,
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
