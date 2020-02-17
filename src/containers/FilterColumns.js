import { connect } from "react-redux";

import { showHideColumn, showAllColumns, cancelFilterColumns } from "../actions/FilterColumns";
import FilterColumnsMenu from "../components/FilterColumnsMenu";

const mapStateToProps = (state, props) => {
    if (state.filterColumns[props.model] !== undefined) {
        let { columns_visible, all_columns } = state.filterColumns[props.model];
        return { columns_visible, all_columns };
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showHideColumn: (column, visible, model) => dispatch(showHideColumn(column, visible, model)),
        showAllColumns: (columns, model) => dispatch(showAllColumns(columns, model)),
        cancelFilterColumns: (columns, model) => dispatch(cancelFilterColumns(columns, model))
    };
};

const FilterColumnsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterColumnsMenu);

export default FilterColumnsContainer;
