import i18n from '../i18n';
import { UNLINK, REMOVE, SAVED } from '../utils/constants';

export function generateSubInputs(subInputObject, typeFieldName) {
  const result = {
    toUpdate: [],
    toUnlink: [],
    toDelete: [],
  };

  if (subInputObject) {
    result.toUpdate = subInputObject
      .filter((element) => element.status === SAVED)
      .map((element) => {
        const resultElement = {
          id: element.id,
          name: element.name,
        };
        if (element.description) {
          resultElement.description = element.description;
        }
        if (element.type) {
          resultElement[typeFieldName] = element.type.value;
        }
        return resultElement;
      });

    result.toUnlink = subInputObject
      .filter((element) => element.status === UNLINK)
      .map((element) => ({ relation_id: element.relation_id, clientMutationId: element.id }));

    result.toDelete = subInputObject
      .filter((element) => element.status === REMOVE)
      .map((element) => ({ id: element.id }));
  }
  return result;
}

export function onCompleteCompositeCreationEntity(
  form,
  response,
  entityObj,
  entityName,
  responseFieldName,
  entityNameList,
  CreateCommentMutation,
) {
  if (response[responseFieldName].errors) {
    form.props.notify(i18n.t('notify.error'), 'error');
    return response[responseFieldName].updated.errors;
  }
  const entityId = response[responseFieldName].created[entityName.toLowerCase()].id;
  if (entityObj.comment) {
    CreateCommentMutation(entityId, entityObj.comment);
  }
  form.props.notify(i18n.t(`notify.network/${entityNameList}-created-success`), 'success');
  if (form.props.history) {
    form.props.history.push(`/network/${entityNameList}/${entityId}`);
  } else {
    form.props.createdEntity(entityName, entityId);
    form.props.hideModalForm();
  }
}

export default {};
