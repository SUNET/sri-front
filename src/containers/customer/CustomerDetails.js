import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';

import CustomerDetails from '../../components/customer/CustomerDetails';

const mapStateToProps = (state, props) => {
  return {
    idFromModal: state.formModal.entityId,
    history: props.history,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
    deletedEntity: (customerId) => {
      dispatch(formModalActions.deletedEntity('Customer', customerId));
    },
  };
};

const CustomerDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);

export default CustomerDetailsContainer;
