import { connect } from 'react-redux';
import __EntityClassName__UpdateForm from '../../components/__entityName__/__EntityClassName__UpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'update__EntityClassName__InModal' : 'update__EntityClassName__';
  const update__EntityClassName__Selector = formValueSelector(formName);
  const { __entityName__ } = props;

  const initialValues = {
    id: __entityName__.id,
    name: __entityName__.name,
    description: __entityName__.description,
    url: __entityName__.url,
  };
  return {
    form: formName,
    initialValues,
    name: update__EntityClassName__Selector(state, 'name'),
    description: update__EntityClassName__Selector(state, 'description'),
    url: update__EntityClassName__Selector(state, 'url'),
    formSyncErrors: getFormSyncErrors('update__EntityClassName__')(state),
    fields: getFormMeta('update__EntityClassName__')(state),
  };
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
const __EntityClassName__UpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(__EntityClassName__UpdateForm);

export default __EntityClassName__UpdateFormContainer;
