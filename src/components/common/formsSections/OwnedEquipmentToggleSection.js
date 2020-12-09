import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import FieldArrayOwns from '../FieldArrayOwns';
import { NEW, SAVED } from '../../../utils/constants';

export function getSelectedOwnEquipment(selection, getMethod) {
  if (selection && selection.id) {
    return getMethod(selection.id).then((entity) => ({
      ...entity,
      status: SAVED,
      origin: NEW,
    }));
  }
  return null;
}

export async function handleSelectedOwnEquipment({ selection, getMethod, form, dispatch }) {
  const newEntity = await getSelectedOwnEquipment(selection, getMethod);
  console.log('newEntity: ', newEntity);
  if (newEntity) dispatch(arrayPush(form, 'owns', newEntity));
}

export function renderOwnedEquipmentToggleSection(editMode = false, entityFormClass, headerConfig) {
  const {
    t,
    entityRemovedId,
    showModalCreateForm,
    showModalEditForm,
    showModalDetailForm,
    dispatch,
    formSyncErrors,
    fields,
    getOwnEquipmentById,
    form,
  } = entityFormClass.props;

  const { state } = entityFormClass;
  return (
    <section className="model-section">
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/owned-equipment')}</h2>
        </ToggleHeading>

        <TogglePanel>
          <FieldArray
            name="owns"
            headerConfig={headerConfig}
            component={FieldArrayOwns}
            editable={editMode}
            dispatch={dispatch}
            errors={formSyncErrors.parents}
            metaFields={fields}
            handleDeployCreateForm={(typeEntityToShowForm) => {
              entityFormClass.setState({ fieldModalOpened: 'owns' });
              showModalCreateForm(typeEntityToShowForm);
            }}
            showRowEditModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'owns' });
              showModalEditForm(typeEntityToShowForm, entityId);
            }}
            showRowDetailModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'owns' });
              showModalDetailForm(typeEntityToShowForm, entityId);
            }}
            handleSearchResult={async (selection, typeOfSelection) => {
              handleSelectedOwnEquipment({
                selection,
                getMethod: entityFormClass.props[typeOfSelection],
                form,
                dispatch,
              });
            }}
            rerenderOnEveryChange
            entityRemovedId={state.fieldModalOpened === 'owns' ? entityRemovedId : null}
          />
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}

export default {
  renderOwnedEquipmentToggleSection,
};
