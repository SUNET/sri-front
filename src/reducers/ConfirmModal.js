import types from '../types/confirmModal';

const initialState = {
  showModalConfirm: false,
  modalConfirmType: '', // delete ||
  confirmDelete: false,
};

const ComponentFormRowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL_CONFIRM:
      return {
        ...state,
        showModalConfirm: true,
        type: action.payload.type,
        confirmDelete: false,
      };
    case types.HIDE_MODAL_CONFIRM:
      return {
        ...state,
        showModalConfirm: false,
        confirmDelete: false,
      };
    case types.CONFIRM_DELETED_IN_MODAL:
      return {
        ...state,
        confirmDelete: true,
      };
    default:
      return state;
  }
};

export default ComponentFormRowReducer;
