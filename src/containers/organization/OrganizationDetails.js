import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';

import OrganizationDetails from '../../components/organization/OrganizationDetails';

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

const OrganizationDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(OrganizationDetails);

export default OrganizationDetailsContainer;
