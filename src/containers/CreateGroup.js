import { connect } from "react-redux";

import { addRow } from "../actions/ComponentFormRow";
import { CreateGroup } from "../components/group";

const mapStateToProps = (state, props) => {
    if (state.form !== undefined && state.form.createGroup !== undefined) {
        let formValues = state.form.createGroup.values;
        return { formValues };
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addRow: (index) => dispatch(addRow(index))
    };
};

const CreateGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGroup);

export default CreateGroupContainer;
