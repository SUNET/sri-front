import { connect } from "react-redux";
import SearchProvider from "../../components/provider/SearchProvider";
import { showHideColumn, showAllColumns, cancelFilterColumns } from "../../actions/FilterColumns";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showHideColumn: (column, visible, model) => dispatch(showHideColumn(column, visible, model)),
        showAllColumns: (columns, model) => dispatch(showAllColumns(columns, model)),
        cancelFilterColumns: (columns, model) => dispatch(cancelFilterColumns(columns, model))
    };
};

const SearchProviderContainer = connect(mapStateToProps, mapDispatchToProps)(SearchProvider);

export default SearchProviderContainer;
