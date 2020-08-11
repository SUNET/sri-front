import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { Field } from 'redux-form';
import { Form, Col } from 'react-bootstrap';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import { generateURL, formatAffiliationOrganizationData } from '../../utils';
import { isBrowser, isMobile } from 'react-device-detect';
import FieldInput from '../FieldInput';
// components
// const
import { SAVED } from '../../utils/constants';

const renderFormBlockSection = (editable, data, uniqueKey) => {
  const isPresentState = !editable;
  const presentContent = data.presentContent || '';
  return (
    <div className="form-internal-block__section" key={uniqueKey}>
      <div className="form-internal-block__section__title">{data.title}</div>
      <div
        className={`form-internal-block__section__content ${
          editable ? 'form-internal-block__section__content--edition-mode' : ''
        }`}
      >
        {isPresentState ? presentContent : data.editContent}
      </div>
    </div>
  );
};

class _PeeringPartnerFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'peeringPartner';
  ROUTE_LIST_DIRECTION = '/network/peering-partners';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderModelMainSection(editMode = true) {
    return (
      <section className="model-section">
        <Form.Row>
          <Col>
            <Col>{this.renderGeneralInfoToggleSection(editMode)}</Col>
          </Col>
        </Form.Row>
      </section>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, peering_link, as_number } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('network.peering.details.as-number'),
        presentContent: (
          as_number
        ),
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="as_number"
              component={FieldInput}
              disabled
              placeholder={t('general-forms.write-number')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('network.peering.details.peering-db-link'),
        presentContent: (
          <a href={generateURL(peering_link)} target="_blank" rel="noopener noreferrer">
            {peering_link}
          </a>
        ),
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="peering_link"
              component={FieldInput}
              disabled
              placeholder={t('organization-details.add-website')}
            />
          </Form.Group>
        ),
      },
    ];

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('organization-details.general-information')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {generalInfoFirstRow.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }
}

export default _PeeringPartnerFormParentClass;
