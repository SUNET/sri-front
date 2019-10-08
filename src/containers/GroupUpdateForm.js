import { connect } from "react-redux";
import { GroupUpdateForm } from "../components/group";
import { formValueSelector } from "redux-form";

const mapStateToProps = (state, props) => {
    const updateGroupSelector = formValueSelector("updateGroup");
    const initialValues = {
        name: props.group.name,
        description: props.group.description,
        members: props.members.edges.map((member) => {
            return {
                handle_id: member.node.handle_id,
                name: member.node.first_name + " " + member.node.last_name,
                contact_type: member.node.contact_type,
                organization: member.node.roles[0].end.handle_id,
                organization_label: member.node.roles[0].end.name,
                email: member.node.emails[0].name,
                email_obj: member.node.emails[0],
                phone: member.node.phones[0].name,
                phone_obj: member.node.phones[0],
                status: "save",
                origin: "store",
                created: true
            };
        })
    };
    return {
        initialValues,
        name: updateGroupSelector(state, "name"),
        description: updateGroupSelector(state, "description")
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
