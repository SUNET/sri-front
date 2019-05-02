import * as actions from "../actions/Notify";

const notify = {
  refresh: true,
  messages: []
};

const notifyReducer = (state = notify, action) => {
  switch (action.type) {
    case actions.NEW:
      state = { ...state };
      state.messages.push(action.payload);
      state.messages.sort(function(m1, m2) {
        if (m1.level === m2.level) {
          return 0;
        } else if (m1.level === "danger") {
          return 1;
        }
        return -1;
      });
      state.refresh = !state.refresh;
      return state;
    case actions.RM:
      let messages = [];
      if (state.messages.length > 0) {
        messages = state.messages
          .reverse()
          .slice(1)
          .reverse();
      }
      return {
        messages: messages,
        refresh: !state.refresh
      };
    case actions.RM_ALL:
      return {
        messages: [],
        refresh: !state.refresh
      };
    default:
      return state;
  }
};
export default notifyReducer;
