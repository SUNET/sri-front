import { connect } from "react-redux";
import { Group } from "../components/group";

const mapStateToProps = (state, props) => {
    const initialValues = {
        description: props.group.description,
        members: props.members.edges.map((member)=> {
            return {
                handle_id: member.node.handle_id,
                name: member.node.first_name + " " + member.node.last_name,
                organization: member.node.roles[0].end.handle_id,
                organization_label: member.node.roles[0].end.name,
                email: member.node.emails[0].name,
                phone: member.node.phones[0].name
            }
        }),
    };
    return { initialValues };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    };
};

const GroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Group);

export default GroupContainer;
