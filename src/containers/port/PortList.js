import { connect } from "react-redux";

import PortList from "../../components/port/PortList";

const mapStateToProps = (state, props) => {
    let { columns_visible, all_columns } = state.filterColumns.port;
    return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const PortListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PortList);

export default PortListContainer;
