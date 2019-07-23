import { connect } from "react-redux";

import { showHideColumn, showAllColumns } from "../actions/FilterColumns";
import FilterColumns from "../components/FilterColumns";

const mapStateToProps = (state, props) => {
    let { columnsVisible, all_columns } = state.filterColumns;
    return { columnsVisible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showHideColumn: (column, visible) => dispatch(showHideColumn(column, visible)),
        showAllColumns: (columns) => dispatch(showAllColumns(columns))
    };
};

const FilterColumnsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterColumns);

export default FilterColumnsContainer;
