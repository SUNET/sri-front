import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import FieldArrayPorts from '../FieldArrayPorts';
import { SAVED } from '../../../utils/constants';

const getAllOtherPorts = (cable, originalPortId) => {
  if (!cable) {
    return null;
  }
  return cable.ports.find((port) => port.id !== originalPortId);
};

export function getSelectedPort(selection, getMethod) {
  if (selection && selection.id) {
    return getMethod(selection.id).then((entity) => ({
      ...entity,
      status: SAVED,
    }));
  }
  return null;
}

export async function handleSelectedPort({ selection, getMethod, form, dispatch }) {
  const newEntity = await getSelectedPort(selection, getMethod);
  if (newEntity) dispatch(arrayPush(form, 'ports', newEntity));
}

export function renderPortsToggleSection(editMode = false, entityFormClass) {
  const {
    t,
    entityRemovedId,
    showModalCreateForm,
    showModalEditForm,
    showModalDetailForm,
    dispatch,
    formSyncErrors,
    fields,
    getPortById,
    form,
  } = entityFormClass.props;
  const { state } = entityFormClass;
  return (
    <section className="model-section">
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('main-entity-name/ports')}</h2>
        </ToggleHeading>

        <TogglePanel>
          <FieldArray
            name="ports"
            component={FieldArrayPorts}
            editable={editMode}
            dispatch={dispatch}
            errors={formSyncErrors.parents}
            metaFields={fields}
            handleDeployCreateForm={(typeEntityToShowForm) => {
              entityFormClass.setState({ fieldModalOpened: 'ports' });
              showModalCreateForm(typeEntityToShowForm);
            }}
            showRowEditModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'ports' });
              showModalEditForm(typeEntityToShowForm, entityId);
            }}
            showRowDetailModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'ports' });
              showModalDetailForm(typeEntityToShowForm, entityId);
            }}
            handleSearchResult={async (selection) => {
              handleSelectedPort({ selection, getMethod: getPortById, form, dispatch });
            }}
            rerenderOnEveryChange
            entityRemovedId={state.fieldModalOpened === 'ports' ? entityRemovedId : null}
          />
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}

export function formatPortData(portsDataList) {
  return {
    ports: portsDataList.map((port) => {
      const cable = {
        name: port?.connected_to?.name,
        id: port?.connected_to?.id,
        __typename: port?.connected_to?.__typename,
      };

      const endPorts = getAllOtherPorts(port?.connected_to, port.id);
      const endEquipments = endPorts?.parent;
      const partOf = port.part_of;
      const portWithAllData = {
        ...port,
        cable: cable ? [cable] : [],
        endEquipment: endEquipments ? [endEquipments] : [],
        endPorts: endPorts ? [endPorts] : [],
        unit: partOf ? [partOf] : null,
        dependsOnPort: partOf ? partOf.dependents : null,
      };
      return portWithAllData;
    }),
  };
}

export default {
  renderPortsToggleSection,
};
