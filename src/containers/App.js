import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = (state, props) => {
  return {
    is_fetching: state.app.is_fetching,
    is_app_loaded: state.app.is_app_loaded,
    is_contact_form_visible: state.formModal.showModalForm,
    router: state.router,
    generalFilter: state.generalSearch.filter,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
