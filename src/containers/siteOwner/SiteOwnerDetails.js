import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';

import SiteOwnerDetails from '../../components/siteOwner/SiteOwnerDetails';

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

const SiteOwnerDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(SiteOwnerDetails);

export default SiteOwnerDetailsContainer;
