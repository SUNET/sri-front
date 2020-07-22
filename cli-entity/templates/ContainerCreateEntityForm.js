import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import Create__EntityClassName__Form from '../../components/__entityName__/Create__EntityClassName__Form';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'create__EntityClassName__InModal' : 'create__EntityClassName__';
  const update__EntityClassName__Selector = formValueSelector(formName);
  return {
    form: formName,
    fields: getFormMeta('create__EntityClassName__')(state),
    formSyncErrors: getFormSyncErrors('create__EntityClassName__')(state),
    name: update__EntityClassName__Selector(state, 'name'),
    url: update__EntityClassName__Selector(state, 'url'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
  };
};

const Create__EntityClassName__FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create__EntityClassName__Form);

export default Create__EntityClassName__FormContainer;
