import { connect } from 'react-redux';
import * as actions from '../../actions/Notify';

import SwitchDetails from '../../components/switch/SwitchDetails';

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

const SwitchDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchDetails);

export default SwitchDetailsContainer;
