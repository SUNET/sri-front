import * as actions from "../actions/Notify";


const notify = {
  messages: [
    {msg: 'hoh ho ho', vals: null, level: 'danger'},
    {msg: 'heh he he', vals: null, level: 'success'},
    {msg: 'hih hi hi', vals: null, level: 'danger'},
  ],
};


const notifyReducer = (state=notify, action) => {
  switch (action.type) {
    case actions.NEW:
        state = {...state};
        state.messages.add(action.payload);
        state.messages.sort(function (m1, m2) {
            if (m1.level === m2.level) { return 0 }
            else if (m1.level === 'danger') {return -1}
            return 1;
        });
        return state;
    case actions.RM:
      return {
        messages: state.messages.slice(1),
      };
    case actions.RM_ALL:
      return {
        messages: [],
      };
    default:
      return state;
  }
};
export default notifyReducer;
