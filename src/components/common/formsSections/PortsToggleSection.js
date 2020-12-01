import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import FieldArrayPorts from '../FieldArrayPorts';
import { SAVED } from '../../../utils/constants';

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

export function renderPortsToggleSection(editMode = false, entityFormClass, headerConfig) {
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
            headerConfig={headerConfig}
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

export default {
  renderPortsToggleSection,
};
