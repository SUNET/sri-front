// eslint-disable-next-line
import * as actions from '../actions/Breadcrumbs';

const appData = {
  isDetailsEntity: false,
  entityDetails: {},
};

const appReducer = (state = appData, action) => {
  switch (action.type) {
    case actions.MOVE_TO_DETAILS:
      return {
        ...state,
        isDetailsEntity: true,
        entityDetails: { ...state.entityDetails, ...action.payload.detailsEntity },
      };
    case actions.GET_OUT_OF_DETAILS:
      return {
        ...state,
        isDetailsEntity: false,
        entityDetails: {},
      };
    default:
      return state;
  }
};

export default appReducer;
