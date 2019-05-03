import { connect } from "react-redux";

import Base from "../components/Base";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const BaseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Base);

export default BaseContainer;
