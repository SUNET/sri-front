import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import FieldArrayServices from '../FieldArrayServices';
import { SAVED } from '../../../utils/constants';

export function getSelectedService(selection, getMethod) {
  if (selection && selection.id) {
    return getMethod(selection.id).then((entity) => ({
      ...entity,
      status: SAVED,
    }));
  }
  return null;
}

export async function handleSelectedService({ selection, getMethod, form, dispatch }) {
  const newEntity = await getSelectedService(selection, getMethod);
  if (newEntity) dispatch(arrayPush(form, 'uses', newEntity));
}

export function renderServiceListToggleSection(editMode = false, entityFormClass, headerConfig) {
  const {
    t,
    entityRemovedId,
    showModalCreateForm,
    showModalEditForm,
    showModalDetailForm,
    dispatch,
    formSyncErrors,
    fields,
    getServiceById,
    form,
  } = entityFormClass.props;

  const { state } = entityFormClass;
  return (
    <section className="model-section">
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('main-entity-name/services')}</h2>
        </ToggleHeading>

        <TogglePanel>
          <FieldArray
            name="uses"
            headerConfig={headerConfig}
            component={FieldArrayServices}
            editable={editMode}
            dispatch={dispatch}
            errors={formSyncErrors.parents}
            metaFields={fields}
            handleDeployCreateForm={(typeEntityToShowForm) => {
              entityFormClass.setState({ fieldModalOpened: 'uses' });
              showModalCreateForm(typeEntityToShowForm);
            }}
            showRowEditModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'uses' });
              showModalEditForm(typeEntityToShowForm, entityId);
            }}
            showRowDetailModal={(typeEntityToShowForm, entityId) => {
              entityFormClass.setState({ fieldModalOpened: 'uses' });
              showModalDetailForm(typeEntityToShowForm, entityId);
            }}
            handleSearchResult={async (selection) => {
              handleSelectedService({ selection, getMethod: getServiceById, form, dispatch });
            }}
            rerenderOnEveryChange
            entityRemovedId={state.fieldModalOpened === 'uses' ? entityRemovedId : null}
          />
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}

export default {
  renderServiceListToggleSection,
};
