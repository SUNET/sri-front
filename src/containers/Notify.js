import { connect } from 'react-redux';
import * as actions from "../actions/Notify";
import Notify from '../components/Notify';


const mapStateToProps = (state, props) => {
  return {
      messages: state.notify.messages,
  }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        rmNotification: (e) => {
            dispatch(actions.rmNotification());
        }
    }
};

const NotifyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notify);

export default NotifyContainer;
