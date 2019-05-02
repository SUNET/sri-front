import { connect } from "react-redux";

import App from "../components/App";

const mapStateToProps = (state, props) => {
  return {
    is_fetching: state.app.is_fetching
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
