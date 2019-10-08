import { connect } from "react-redux";

import { saveRow, editRow, removeRow } from "../actions/ComponentFormRow";
import ComponentFormRow from "../components/ComponentFormRow";

const mapStateToProps = (state, props) => {
    if (state.componentFormRow[props.index] !== undefined) {
        let { is_saved, is_editing, is_new } = state.componentFormRow[props.index];
        return { is_saved, is_editing, is_new };
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveRow: () => dispatch(saveRow(props.index)),
        editRow: () => dispatch(editRow(props.index)),
        removeRow: () => dispatch(removeRow(props.index))
    };
};

const ComponentFormRowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentFormRow);

export default ComponentFormRowContainer;
