import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import FieldArrayOwner from '../FieldArrayOwner';
import { SAVED } from '../../../utils/constants';

export function getSelectedOwner(selection, getMethod) {
  if (selection && selection.id) {
    return getMethod(selection.id).then((entity) => ({
      ...entity,
      status: SAVED,
    }));
  }
  return null;
}

export async function handleSelectedOwner({ selection, getMethod, form, dispatch }) {
  const newEntity = await getSelectedOwner(selection, getMethod);
  if (newEntity) dispatch(arrayPush(form, 'owner', newEntity));
}

export function renderOwnerToggleSection(editMode = false, entityFormClass, headerConfig) {
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
  return (
    <section className="model-section">
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/owner')}</h2>
        </ToggleHeading>

        <TogglePanel>
          <FieldArray
            name="owner"
            headerConfig={headerConfig}
            component={FieldArrayOwner}
            editable={editMode}
            dispatch={dispatch}
            errors={formSyncErrors.parents}
            metaFields={fields}
            handleDeployCreateForm={(typeEntityToShowForm) => {
              entityFormClass.setState({ fieldModalOpened: 'owner' });
              showModalCreateForm(typeEntityToShowForm);
            }}
            showRowEditModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'owner' });
              showModalEditForm(typeEntityToShowForm, entityId);
            }}
            showRowDetailModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'owner' });
              showModalDetailForm(typeEntityToShowForm, entityId);
            }}
            handleSearchResult={async (selection, typeOfSelection) => {
              handleSelectedOwner({ selection, getMethod: entityFormClass.props[typeOfSelection], form, dispatch });
            }}
            rerenderOnEveryChange
            entityRemovedId={state.fieldModalOpened === 'owner' ? entityRemovedId : null}
          />
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}

export default {
  renderOwnerToggleSection,
};
