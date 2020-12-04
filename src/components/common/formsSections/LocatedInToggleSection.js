import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import FieldArrayEquipments from '../../site/FieldArrayEquipments';
import { SAVED, NEW } from '../../../utils/constants';

export function getSelectedPhysical(selection, getMethod) {
  if (selection && selection.id) {
    return getMethod(selection.id).then((entity) => {
      const newEntity = {
        ...entity,
        origin: NEW,
        status: SAVED,
      };
      if (entity.operational_state) {
        newEntity.operational_state = entity.operational_state;
      }
      return newEntity;
    });
  }
  return null;
}

export async function handleSelectedPhysical({ selection, getMethod, form, dispatch }) {
  const newEntity = await getSelectedPhysical(selection, getMethod);
  if (newEntity) dispatch(arrayPush(form, 'located_in', newEntity));
}

export function renderEquipmentsToggleSection(editMode, entityFormClass) {
  const {
    t,
    entityRemovedId,
    showModalCreateForm,
    showModalEditForm,
    showModalDetailForm,
    dispatch,
    formSyncErrors,
    fields,
    form,
  } = entityFormClass.props;
  const { state } = entityFormClass;
  const componentClassName = 'equipment-list-block';
  return (
    <section className={`model-section ${componentClassName}`}>
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/equipments')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <FieldArray
            name="located_in"
            component={FieldArrayEquipments}
            editable={editMode}
            dispatch={dispatch}
            errors={formSyncErrors.located_in}
            metaFields={fields}
            handleDeployCreateForm={(typeEntityToShowForm) => {
              entityFormClass.setState({ fieldModalOpened: 'located_in' });
              showModalCreateForm(typeEntityToShowForm);
            }}
            showRowEditModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'located_in' });
              showModalEditForm(typeEntityToShowForm, entityId);
            }}
            showRowDetailModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'located_in' });
              showModalDetailForm(typeEntityToShowForm, entityId);
            }}
            handleSearchResult={async (selection, typeOfSelection) => {
              handleSelectedPhysical({
                selection,
                getMethod: entityFormClass.props[typeOfSelection],
                form,
                dispatch,
              });
            }}
            rerenderOnEveryChange
            entityRemovedId={state.fieldModalOpened === 'located_in' ? entityRemovedId : null}
          />
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}

export default {
  renderEquipmentsToggleSection,
};
