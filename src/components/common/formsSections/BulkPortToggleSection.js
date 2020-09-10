import React from 'react';
import { arrayPush } from 'redux-form';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import BulPort from '../BulkPort';

export function renderBulkPortToggleSection(entityFormClass) {
  const { t, form, dispatch } = entityFormClass.props;
  return (
    <section className="model-section">
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/bulk-port')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <BulPort
            handleBulkPortResponse={(dataForBulkPortCreate) => {
              dataForBulkPortCreate.forEach((portData) => {
                dispatch(arrayPush(form, 'ports', portData));
              });
            }}
          />
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}

export default {};
