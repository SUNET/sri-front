import { connect } from 'react-redux';
import * as actions from '../../actions/Notify';

import FirewallDetails from '../../components/firewall/FirewallDetails';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
  };
};

const FirewallDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(FirewallDetails);

export default FirewallDetailsContainer;
