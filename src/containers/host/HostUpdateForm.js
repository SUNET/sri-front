import { connect } from 'react-redux';
import HostUpdateForm from '../../components/host/HostUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps('host', props.host, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
  };
};
const HostUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(HostUpdateForm);

export default HostUpdateFormContainer;
