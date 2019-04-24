// eslint-disable-next-line
import * as actions from "../actions/App";


const appData = {
    is_app_loaded: false,
};


let appReducer = (state=appData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
