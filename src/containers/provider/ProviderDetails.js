import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';

import ProviderDetails from '../../components/provider/ProviderDetails';

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

const ProviderDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProviderDetails);

export default ProviderDetailsContainer;
