import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import renderFormBlockSection from '../BlockSection';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../ToggleSection';
import FieldInput from '../../FieldInput';

import '../../../style/RackBackInput.scss';

export function renderRackToggleSection(editMode = true, { t, rack_position, rack_units }) {
  const renderRackBackInput = (disabled) => (
    <div className="rack-back-section">
      <Form.Group>
        <Field type="checkbox" name="rack_back" component={FieldInput} disabled={disabled} />
      </Form.Group>
      <span className="rack-back-section__text">{t('general-forms/rack-back-text')}</span>
    </div>
  );

  const rackInfo = [
    {
      title: t('general-forms/equipment-height'),
      presentContent: rack_units,
      editContent: (
        <Form.Group>
          <Field type="text" name="rack_units" component={FieldInput} placeholder={t('general-forms/write-number')} />
        </Form.Group>
      ),
    },
    {
      title: t('general-forms/rack-position'),
      presentContent: rack_position,
      editContent: (
        <Form.Group>
          <Field
            type="text"
            name="rack_position"
            component={FieldInput}
            placeholder={t('general-forms/write-number')}
          />
        </Form.Group>
      ),
    },
    {
      title: t('general-forms/rack-back'),
      presentContent: renderRackBackInput(true),
      editContent: renderRackBackInput(false),
    },
  ];
  return (
    <section className="model-section">
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/rack-section')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {rackInfo.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    </section>
  );
}

export default {};
