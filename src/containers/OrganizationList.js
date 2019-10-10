import { connect } from "react-redux";

import { OrganizationList } from "../components/organization";

const mapStateToProps = (state, props) => {
    let { columns_visible, all_columns } = state.filterColumns.organization;
    return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const OrganizationListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationList);

export default OrganizationListContainer;
