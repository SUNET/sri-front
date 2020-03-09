import { connect } from "react-redux";

import EndUserList from "../../components/endUser/EndUserList";

const mapStateToProps = (state, props) => {
    console.log('state: ', state);
    let { columns_visible, all_columns } = state.filterColumns.endUser;
    return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const EndUserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EndUserList);

export default EndUserListContainer;
