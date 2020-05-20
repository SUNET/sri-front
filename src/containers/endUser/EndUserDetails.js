import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';

import EndUserDetails from '../../components/endUser/EndUserDetails';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
  };
};

const EndUserDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(EndUserDetails);

export default EndUserDetailsContainer;
