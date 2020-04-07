import { connect } from "react-redux";

import ProviderList from "../../components/provider/ProviderList";

const mapStateToProps = (state, props) => {
    let { columns_visible, all_columns } = state.filterColumns.provider;
    return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const ProviderListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProviderList);

export default ProviderListContainer;
