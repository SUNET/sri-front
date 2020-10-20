import React from 'react';
import { change } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import renderFormBlockSection from '../BlockSection';
import { SAVED } from '../../../utils/constants';
import MultiDropdownAutocompleteLocationsRacks from '../../MultiDropdownAutocompleteLocationsRacks';

export function renderLocationRackToggleSection(editMode = true, { t, form, dispatch, location }) {
  const componentClassName = 'location-block';
  const locationInfo = [
    {
      title: null,
      presentContent: location && location[0] ? location[0].name : '',
      editContent: (
        <MultiDropdownAutocompleteLocationsRacks
          optionsPreSelected={location}
          onSelectOption={(newSelection) => {
            console.log('newSelection: ', newSelection);
            if (newSelection.length > 0) {
              dispatch(change(form, 'location', [{ ...newSelection[0], status: SAVED }]));
            } else {
              dispatch(change(form, 'location', []));
            }
          }}
        />
      ),
    },
  ];
  return (
    <section className={`model-section ${componentClassName}`}>
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/location')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {locationInfo.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}
