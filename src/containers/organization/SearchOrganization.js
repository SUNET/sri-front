import { connect } from "react-redux";
import SearchOrganization from "../../components/organization/SearchOrganization";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const SearchOrganizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchOrganization);

export default SearchOrganizationContainer;
