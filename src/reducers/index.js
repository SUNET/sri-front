// IMPORT LIBRARIES
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import appReducer from './App';
import searchReducer from './search';
import filterColumnsReducer from './filterColumns';
import formModalReducer from './FormModal';
import notifyReducer from './Notify';
import breadcrumbsReducer from './Breadcrumbs';

const reducers = (history) =>
  combineReducers({
    app: appReducer,
    search: searchReducer,
    filterColumns: filterColumnsReducer,
    formModal: formModalReducer,
    form: formReducer,
    notify: notifyReducer,
    router: connectRouter(history),
    breadcrumbs: breadcrumbsReducer,
  });

export default reducers;
