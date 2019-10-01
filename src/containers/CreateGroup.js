import { connect } from "react-redux";

import { addRow } from "../actions/ComponentFormRow";
import { CreateGroup } from "../components/group";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addRow: (index) => dispatch(addRow(index)),
    };
};

const CreateGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGroup);

export default CreateGroupContainer;
