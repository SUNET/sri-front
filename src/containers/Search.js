import { connect } from "react-redux";

import { startSearch, successSearch } from "../actions/Search";
import Search from "../components/Search";

const mapStateToProps = (state, props) => {
    let { search, loading, results, queried } = state.search;
    return { search, loading, results, queried };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startSearch: (value) => dispatch(startSearch(value)),
        successSearch: (items) => dispatch(successSearch(items))
    };
};

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;
