import { UNLINK, REMOVE, SAVED, CHANGED } from '../../utils/constants';

export const formattedRoles = (organizations = [], form) => {
  const result = organizations.reduce(
    (acc, curr) => {
      if (curr.status === UNLINK) {
        acc.toUnlink.push(
          ...curr.roles
            .filter((role) => Number.isInteger(role.relation_id))
            .map((role) => ({ relation_id: role.relation_id })),
        );
      } else if (curr.status === CHANGED) {
        acc.toAdd.push(
          ...curr.roles
            .filter((role) => role.status === SAVED)
            .map((role) => ({
              role_id: role.id,
              organization_id: curr.id,
            })),
        );
        acc.toUnlink.push(
          ...curr.roles
            .filter((role) => Number.isInteger(role.relation_id))
            .map((role) => ({ relation_id: role.relation_id })),
        );
      } else {
        acc.toUnlink.push(
          ...curr.roles
            .filter((role) => role.status === UNLINK && Number.isInteger(role.relation_id))
            .map((role) => ({ relation_id: role.relation_id })),
        );
        acc.toAdd.push(
          ...curr.roles
            .filter((role) => role.status === SAVED && !Number.isInteger(role.relation_id) && !role.relation_id)
            .map((role) => ({
              role_id: role.id,
              organization_id: curr.id,
            })),
        );
      }
      return acc;
    },
    {
      toAdd: [],
      toUnlink: [],
    },
  );
  return result;
};

export const formattedSubInputs = (dataList = [], fieldName) => {
  const result = dataList.reduce(
    (acc, curr) => {
      if (curr.status === REMOVE) acc.toDelete.push({ id: curr.id });
      if (curr.status === SAVED) {
        if (curr.origin === 'store') {
          acc.toUpdate.push({
            id: curr.id,
            name: curr[fieldName],
            type: curr.type.value ? curr.type.value : curr.type,
          });
        } else {
          acc.toCreate.push({
            name: curr[fieldName],
            type: curr.type.value ? curr.type.value : curr.type,
          });
        }
      }
      return acc;
    },
    {
      toCreate: [],
      toUpdate: [],
      toDelete: [],
    },
  );
  return result;
};

export default {
  formattedRoles,
  formattedSubInputs,
};
