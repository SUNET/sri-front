import { connect } from "react-redux";

import CustomerList from "../../components/customer/CustomerList";

const mapStateToProps = (state, props) => {
    let { columns_visible, all_columns } = state.filterColumns.customer;
    return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const CustomerListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerList);

export default CustomerListContainer;
