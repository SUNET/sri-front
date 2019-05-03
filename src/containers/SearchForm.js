import { connect } from "react-redux";

import SearchForm from "../components/SearchForm";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const SearchFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;
