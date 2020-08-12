import i18n from '../i18n';
import { UNLINK, REMOVE, SAVED } from '../utils/constants';

export function generateSubInputs(subInputObject, typeFieldName, specificFieldName = null) {
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
        if (typeFieldName && element.type) {
          resultElement[typeFieldName] = element.type.value;
        }
        if (specificFieldName && element[specificFieldName]) {
          resultElement[specificFieldName] = element[specificFieldName];
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
  if (response[responseFieldName].created.errors) {
    form.props.notify(i18n.t('notify.error'), 'error');
    return response[responseFieldName].created.errors;
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

export function formatExternalEquipmentVariables(data, isUpdate) {
  const FIELD_FOR_BASIC_INFO = isUpdate ? 'update_input' : 'create_input';
  const ownerToSaved = data.owner ? data.owner.find((o) => o.status === SAVED) : [];
  const ownerToRemove = data.owner ? data.owner.find((o) => o.status === REMOVE) : [];

  const portsToSaved = data.ports
    ? data.ports.filter((port) => port.status === SAVED).map((e) => ({ id: e.id, name: e.name }))
    : [];

  const portsToUnlink = data.ports
    ? data.ports.filter((port) => port.status === UNLINK).map((e) => ({ relation_id: e.relation_id }))
    : [];

  const portsToRemove = data.ports
    ? data.ports.filter((port) => port.status === REMOVE).map((e) => ({ id: e.id }))
    : [];

  const variables = {
    input: {
      [FIELD_FOR_BASIC_INFO]: {
        name: data.name,
        description: data.description,

        // General info
        rack_units: data.rack_units,
        rack_position: data.rack_position,

        // owner
        relationship_owner: ownerToSaved ? ownerToSaved.id : '', // id customer/siteOwner/provider/endUser
      },
      // ports
      update_has_port: portsToSaved,
      unlink_subinputs: portsToUnlink,
      deleted_has_port: portsToRemove,
    },
  };
  if (isUpdate) {
    variables.input[FIELD_FOR_BASIC_INFO].id = data.id;
  }
  if (ownerToRemove && ownerToRemove.length > 0) {
    variables.input.delete_owner = {
      id: ownerToRemove.id,
    };
  }
  return variables;
}

export default {};
