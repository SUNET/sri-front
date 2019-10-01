import { connect } from "react-redux";

import { GroupList } from "../components/group";

const mapStateToProps = (state, props) => {
    let { columns_visible, all_columns } = state.filterColumns.group;
    return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const GroupListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupList);

export default GroupListContainer;
