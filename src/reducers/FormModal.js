import types from '../types/formModal';

const initialState = {
  showModalForm: false,
  entityName: null,
  editing: false,
  entityId: null,
  entitySavedId: null,
  entityEditedId: null,
  entityRemovedId: null,
};

const ComponentFormRowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL_FORM:
      return {
        ...state,
        showModalForm: true,
        entityName: action.payload.entityName,
        editing: false,
        entityId: null,
        entitySavedId: null,
        entityEditedId: null,
        entityRemovedId: null,
      };
    case types.HIDE_MODAL_FORM:
      return {
        ...state,
        showModalForm: false,
        entityName: null,
        editing: false,
        entityId: null,
        entitySavedId: null,
        entityEditedId: null,
        entityRemovedId: null,
      };
    case types.SHOW_MODAL_DETAIL_FORM:
      return {
        ...state,
        showModalForm: true,
        entityName: action.payload.entityName,
        editing: false,
        entityId: action.payload.entityId,
        entitySavedId: null,
        entityEditedId: null,
        entityRemovedId: null,
      };
    case types.SHOW_MODAL_EDIT_FORM:
      return {
        ...state,
        showModalForm: true,
        entityName: action.payload.entityName,
        editing: true,
        entityId: action.payload.entityId,
        entitySavedId: null,
        entityEditedId: null,
        entityRemovedId: null,
      };
    case types.ROW_CREATED_IN_MODAL:
      return {
        ...state,
        showModalForm: false,
        entityName: action.payload.entityName,
        editing: false,
        entityId: null,
        entitySavedId: action.payload.entitySavedId,
        entityEditedId: null,
        entityRemovedId: null,
      };
    case types.ROW_EDITED_IN_MODAL:
      return {
        ...state,
        showModalForm: false,
        entityName: action.payload.entityName,
        editing: false,
        entityId: null,
        entitySavedId: null,
        entityEditedId: action.payload.entityEditedId,
        entityRemovedId: null,
      };
    case types.ROW_DELETED_IN_MODAL:
      return {
        ...state,
        showModalForm: false,
        entityName: action.payload.entityName,
        editing: false,
        entityId: null,
        entitySavedId: null,
        entityEditedId: null,
        entityRemovedId: action.payload.entityDeletedId,
      };
    default:
      return state;
  }
};

export default ComponentFormRowReducer;
