import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';

import PortDetails from '../../components/port/PortDetails';

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
    deletedEntity: (portId) => {
      dispatch(formModalActions.deletedEntity('Port', portId));
    },
  };
};

const PortDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(PortDetails);

export default PortDetailsContainer;
