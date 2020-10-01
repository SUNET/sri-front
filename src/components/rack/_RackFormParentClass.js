import React from 'react';
import { Field } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import { Form } from 'react-bootstrap';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
// const
import renderFormBlockSection from '../common/BlockSection';
import { isBrowser } from 'react-device-detect';

class _RackFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'rack';
  ROUTE_LIST_DIRECTION = '/network/location-racks';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderSections(editMode) {
    return (
      <>
        {this.renderDimensionsToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderDimensionsToggleSection(editMode) {
    const componentClassName = 'dimensions-block';
    const { t, height, width, depth, rack_units } = this.props;
    const DimensionsRow = [
      {
        title: t('general-forms/dimensions/height'),
        presentContent: height,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="height"
              component={FieldInput}
              placeholder={t('general-forms/write-number')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/dimensions/width'),
        presentContent: width,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="width"
              component={FieldInput}
              placeholder={t('general-forms/write-website')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/dimensions/depth'),
        presentContent: depth,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="depth"
              component={FieldInput}
              placeholder={t('general-forms/write-website')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/dimensions/rack-units'),
        presentContent: rack_units,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="rack_units"
              component={FieldInput}
              placeholder={t('general-forms/write-website')}
            />
          </Form.Group>
        ),
      },
    ];

    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/dimensions')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {DimensionsRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _RackFormParentClass;
