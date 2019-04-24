import { combineReducers } from 'redux';

import appReducer from './reducers/App';


const appStore = combineReducers({
    app: appReducer,
});

export default appStore;
