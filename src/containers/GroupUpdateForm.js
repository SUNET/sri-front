import { connect } from "react-redux";
import GroupUpdateForm from "../components/group/GroupUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";

const mapStateToProps = (state, props) => {
    const updateGroupSelector = formValueSelector("updateGroup");
    const initialValues = {
        name: props.group.name,
        description: props.group.description,
        members:
            props.members.length > 0
                ? props.members.map((member) => {
                      const member_node = member.contact;
                      return {
                          handle_id: member_node.handle_id,
                          name: member_node.first_name + " " + member_node.last_name,
                          contact_type: member_node.contact_type,
                          organization: member_node.roles[0].end.handle_id,
                          organization_label: member_node.roles[0].end.name,
                          email: member_node.emails[0].name,
                          email_obj: member_node.emails[0],
                          phone: member_node.phones[0].name,
                          phone_obj: member_node.phones[0],
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
        refreshFields: state.refreshFields
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const GroupUpdateFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupUpdateForm);

export default GroupUpdateFormContainer;
