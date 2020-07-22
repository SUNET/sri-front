// IMPORT LIBRARIES
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import appReducer from './App';
import generalSearchReducer from './generalSearch';
import filterColumnsReducer from './filterColumns';
import formModalReducer from './FormModal';
import notifyReducer from './Notify';
import breadcrumbsReducer from './Breadcrumbs';
import confirmModalReducer from './ConfirmModal';

const reducers = (history) =>
  combineReducers({
    app: appReducer,
    generalSearch: generalSearchReducer,
    filterColumns: filterColumnsReducer,
    formModal: formModalReducer,
    confirmModal: confirmModalReducer,
    form: formReducer,
    notify: notifyReducer,
    router: connectRouter(history),
    breadcrumbs: breadcrumbsReducer,
  });

export default reducers;
