import { connect } from "react-redux";

import { showHideColumn, showAllColumns, cancelFilterColumns } from "../actions/FilterColumns";
import FilterColumns from "../components/FilterColumns";

const mapStateToProps = (state, props) => {
    if (state.filterColumns[props.model] !== undefined) {
        let { columns_visible, all_columns } = state.filterColumns[props.model];
        return { columns_visible, all_columns };
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showHideColumn: (column, visible) => dispatch(showHideColumn(column, visible, props.model)),
        showAllColumns: (columns) => dispatch(showAllColumns(columns, props.model)),
        cancelFilterColumns: (columns) => dispatch(cancelFilterColumns(columns, props.model))
    };
};

const FilterColumnsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterColumns);

export default FilterColumnsContainer;
