import { connect } from "react-redux";

import { showHideColumn, showAllColumns, cancelFilterColumns } from "../actions/FilterColumns";
import FilterColumns from "../components/FilterColumns";

const mapStateToProps = (state, props) => {
    let { columns_visible, all_columns } = state.filterColumns;
    return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showHideColumn: (column, visible) => dispatch(showHideColumn(column, visible)),
        showAllColumns: (columns) => dispatch(showAllColumns(columns)),
        cancelFilterColumns: (columns) => dispatch(cancelFilterColumns(columns))
    };
};

const FilterColumnsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterColumns);

export default FilterColumnsContainer;
