import React from 'react';
import { Field } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import { Form } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
// const
import { isBrowser } from 'react-device-detect';
import { SAVED } from '../../utils/constants';
import renderFormBlockSection from '../common/BlockSection';

class _SiteFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'site';
  ROUTE_LIST_DIRECTION = '/network/location-sites';

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
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderAddressToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, site_type } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/location-site-type'),
        presentContent: site_type,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel={t('general-forms/type-placeholder')}
            type="site_types"
            name="site_type"
            onChange={(e) => {}}
          />
        ),
      },
      this.getUrlField(),
    ];

    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/general-information')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {generalInfo.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderAddressToggleSection(editMode) {
    const componentClassName = 'address-block';

    const { t, country, area, longitude, latitude } = this.props;

    const addressInfo = [
      {
        title: t('general-forms/location-site-type'),
        presentContent: country,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel={t('general-forms/type-placeholder')}
            type="countries"
            name="country"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/area'),
        presentContent: area,
        editContent: (
          <Form.Group>
            <Field type="text" name="area" component={FieldInput} placeholder={t('general-forms/area-placeholder')} />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/longitude'),
        presentContent: longitude,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="longitude"
              component={FieldInput}
              placeholder={t('general-forms/decimal-placeholder')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/latitude'),
        presentContent: latitude,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="latitude"
              component={FieldInput}
              placeholder={t('general-forms/decimal-placeholder')}
            />
          </Form.Group>
        ),
      },
    ];
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/address')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {addressInfo.map((formData, index) => {
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

export default _SiteFormParentClass;
