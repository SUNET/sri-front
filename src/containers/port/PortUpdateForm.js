import { connect } from 'react-redux';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import PortUpdateForm from '../../components/port/PortUpdateForm';
import * as actions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import getCable from '../../components/cable/Cable';
import getPort from '../../components/port/Port';

const mapStateToProps = (state, props) => {
  const updatePortSelector = formValueSelector('updatePort');
  const { port } = props;

  const initialValues = {
    id: port.id,
    name: port.name,
    description: port.description,
    port_type: port.port_type ? port.port_type.value : undefined,
    portTypeObj: port.port_type,
    parents: port.parent,
    connectedTo: port.connected_to,
  };
  return {
    initialValues,
    name: updatePortSelector(state, 'name'),
    description: updatePortSelector(state, 'description'),
    port_type: updatePortSelector(state, 'port_type'),
    portTypeObj: updatePortSelector(state, 'portTypeObj'),
    formSyncErrors: getFormSyncErrors('updatePort')(state),
    fields: getFormMeta('updatePort')(state),
    parents: updatePortSelector(state, 'parents'),
    connectedTo: updatePortSelector(state, 'connectedTo'),
    getCableById: (id) => getCable(id),
    getPortById: (id) => getPort(id),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
  };
};

const PortUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(PortUpdateForm);

export default PortUpdateFormContainer;
