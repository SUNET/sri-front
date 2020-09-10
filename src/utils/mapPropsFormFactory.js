import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import FIELDS_FORMS, { FIELD_TYPES } from './formsFieldsByEntity';

function formatterSubInputs(subInputs) {
  return subInputs.map((element) => ({
    ...element,
    status: 'saved',
    origin: 'store',
  }));
}

function getDataByFieldType({ fieldName, dataField, fieldType, state, selector }) {
  const result = {
    initialValue: null,
    selectorValue: null,
  };
  switch (fieldType) {
    case FIELD_TYPES.SINGLE:
      result.initialValue = { [fieldName]: dataField };
      if (state) result.selectorValue = { [fieldName]: selector(state, fieldName) };
      break;
    case FIELD_TYPES.ID_OBJECT:
      result.initialValue = {
        [`${fieldName}_obj`]: dataField,
        [`${fieldName}_id`]: dataField ? dataField.id : undefined,
      };
      if (state) {
        result.selectorValue = {
          [`${fieldName}_obj`]: selector(state, `${fieldName}_obj`),
          [`${fieldName}_id`]: selector(state, `${fieldName}_id`),
        };
      }
      break;
    case FIELD_TYPES.OBJECT:
      result.initialValue = {
        [fieldName]: dataField ? dataField.value : undefined,
      };
      if (state) {
        result.selectorValue = { [fieldName]: selector(state, fieldName) };
      }
      break;
    case FIELD_TYPES.OBJ_TO_LIST:
      result.initialValue = {
        [fieldName]: dataField ? formatterSubInputs([dataField]) : undefined,
      };
      if (state) {
        result.selectorValue = { [fieldName]: selector(state, fieldName) };
      }
      break;
    case FIELD_TYPES.ARRAY_LIST:
      result.initialValue = {
        [fieldName]: dataField ? formatterSubInputs(dataField) : undefined,
      };
      if (state) {
        result.selectorValue = { [fieldName]: selector(state, fieldName) };
      }
      break;
    default:
  }
  return result;
}

function getStateModalsProps(state, props) {
  return {
    isDeleteConfirmed: state.confirmModal.confirmDelete,
    confirmModalType: state.confirmModal.type,
    isFromModal: Boolean(props.isFromModal),
    isEditModeModal: Boolean(props.isFromModal && state.formModal.editing),
    entityInModalName: state.formModal.entityName,
    editedSubEntity: state.formModal.entityEditedId,
    entitySavedId: state.formModal.entitySavedId,
    entityRemovedId: state.formModal.entityRemovedId,
  };
}

function generatePropsByConfigList(fieldList, { operationType, data, state, selector }) {
  const isInitialValuesOperation = operationType === 'initialValues';
  let newValues;
  const result = {};
  if (isInitialValuesOperation) result.id = data.id;
  return {
    ...result,
    ...fieldList.reduce((acc, currentField) => {
      const dataByFieldType = getDataByFieldType({
        fieldName: currentField.name,
        dataField: data ? data[currentField.name] : null,
        fieldType: currentField.type,
        state,
        selector,
      });
      if (isInitialValuesOperation) {
        newValues = dataByFieldType.initialValue;
      } else {
        newValues = dataByFieldType.selectorValue;
      }
      return { ...acc, ...newValues };
    }, {}),
  };
}

function getInitialValues(fieldList, entityData) {
  return generatePropsByConfigList(fieldList, { operationType: 'initialValues', data: entityData });
}

function getFieldsFormProps(fieldList, state, selector) {
  return generatePropsByConfigList(fieldList, { operationType: 'fieldsFormProps', state, selector });
}

function createPropsObject({ formStructureData, entityData, state, isUpdateForm = false, isFromModal = false }) {
  const formType = isUpdateForm ? 'update' : 'create';
  const formName = isFromModal
    ? `${formStructureData.formName[formType]}InModal`
    : `${formStructureData.formName[formType]}`;
  const selector = formValueSelector(formName);

  const propsObject = {
    form: formName,
    formSyncErrors: getFormSyncErrors(formName)(state),
    fields: getFormMeta(formName)(state),
    ...getFieldsFormProps(formStructureData.fields, state, selector),
  };
  if (isUpdateForm) {
    propsObject.initialValues = getInitialValues(formStructureData.fields, entityData);
  }
  return propsObject;
}

export function getUpdateProps(nameEntity, props, state) {
  const propsFieldsObject = createPropsObject({
    formStructureData: FIELDS_FORMS[nameEntity],
    entityData: props[nameEntity],
    state,
    isUpdateForm: true,
    isFromModal: props.isFromModal,
  });
  const propsModals = getStateModalsProps(state, props);
  return {
    ...propsFieldsObject,
    ...propsModals,
  };
}

export function getCreateProps(nameEntity, props, state) {
  const propsFieldsObject = createPropsObject({
    formStructureData: FIELDS_FORMS[nameEntity],
    entityData: props[nameEntity],
    state,
    isUpdateForm: false,
    isFromModal: props.isFromModal,
  });
  return propsFieldsObject;
}
