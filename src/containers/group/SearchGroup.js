import { connect } from "react-redux";

import SearchGroup from "../components/SearchGroup";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchGroup);

export default SearchContainer;
