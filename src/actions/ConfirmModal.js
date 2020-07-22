import types from '../types/confirmModal';

export const showModalConfirm = (type) => ({
  type: types.SHOW_MODAL_CONFIRM,
  payload: {
    type,
  },
});

export const hideModalConfirm = () => ({
  type: types.HIDE_MODAL_CONFIRM,
});

export const onConfirmDeleteModal = () => ({
  type: types.CONFIRM_DELETED_IN_MODAL,
});
