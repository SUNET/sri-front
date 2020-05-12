import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import CustomerDetails from '../../components/customer/CustomerDetails';

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

const CustomerDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);

export default CustomerDetailsContainer;
