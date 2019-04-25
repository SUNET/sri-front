import { connect } from 'react-redux';
import Notify from '../components/Notify';
import * as actions from '../actions/Notify';


const mapStateToProps = (state, props) => {
  return {
      messages: state.notify.messages,
  }
};


const NotifyContainer = connect(
    mapStateToProps,
)(Notify);

export default NotifyContainer;
