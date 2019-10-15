import { connect } from "react-redux";
import SearchContact from "../components/SearchContact";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const SearchContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContact);

export default SearchContactContainer;
