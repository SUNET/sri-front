import types from '../types/formModal';

export const showModalCreateForm = (entityName) => ({
  type: types.SHOW_MODAL_FORM,
  payload: {
    entityName,
  },
});

export const hideModalForm = () => ({
  type: types.HIDE_MODAL_FORM,
});

export const showModalUpdateForm = (entityName, entityId) => ({
  type: types.SHOW_MODAL_DETAIL_FORM,
  payload: {
    entityName,
    entityId,
  },
});

export const createdEntity = (entityName, entitySavedId) => ({
  type: types.ROW_CREATED_IN_MODAL,
  payload: {
    entityName,
    entitySavedId,
  },
});

export const editedEntity = (entityName, entityEditedId) => ({
  type: types.ROW_EDITED_IN_MODAL,
  payload: {
    entityName,
    entityEditedId,
  },
});

export const deletedEntity = (entityName, entityDeletedId) => ({
  type: types.ROW_DELETED_IN_MODAL,
  payload: {
    entityName,
    entityDeletedId,
  },
});
