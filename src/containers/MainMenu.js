import { connect } from "react-redux";

import MainMenu from "../components/MainMenu";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const MainMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu);

export default MainMenuContainer;
