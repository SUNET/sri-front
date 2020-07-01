// Common imports
import React from 'react';
import { Field } from 'redux-form';
import { Form, Col } from 'react-bootstrap';
// components
import BackCTA from '../common/BackCTA';
import EditField from '../EditField';
import FieldInput from '../FieldInput';
import InfoCreatorModifier from '../InfoCreatorModifier';
import SaveCancelCTAs from '../common/SaveCancelCTAs';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import Worklog from '../Worklog';
import FieldRelatedEntity from './FieldRelatedEntity';
// const
import { isBrowser, isMobile } from 'react-device-detect';
import { generateURL, formatAffiliationOrganizationData } from '../../utils';
import INFO_BY_ENTITIES from './infoByTypeEntity';
// scss
import '../../style/ModelDetails.scss';

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

class _BasicFormParentClass extends React.Component {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME;
  ROUTE_LIST_DIRECTION;

  componentDidMount() {
    if (this.IS_UPDATED_FORM) {
      this.updateBreadcrumbsData();
    }
  }

  componentWillUnmount() {
    if (this.IS_UPDATED_FORM) {
      this.props.getOutOfDetails();
    }
  }

  updateBreadcrumbsData() {
    this.props.moveToDetails({
      id: this.props.initialValues.id,
      name: this.props.initialValues.name,
    });
  }

  // Methods
  refetch = () => {
    throw new Error('This method should be overwritten in the child class');
  };
  handleSubmit = () => {
    throw new Error('This method should be overwritten in the child class');
  };
  onClickDelete = () => {
    this.props.onDelete();
  };
  onClickCancel = () => {
    const { isFromModal, history, hideModalForm } = this.props;
    if (isFromModal) {
      hideModalForm();
    } else {
      history.push(this.ROUTE_LIST_DIRECTION);
    }
  };

  // Common sections RENDERS
  renderEditButton() {
    const { t } = this.props;
    const desktopClass = isBrowser ? 'with-vertical-separator with-vertical-separator--right' : '';
    return (
      <div className={`title-section__right-block__buttons ${desktopClass} mr-3`}>
        <button
          type="button"
          onClick={() => {
            this.setState({ editMode: !this.state.editMode });
          }}
          className="btn outline btn-edit"
        >
          <i className="icon-pencil"></i>
          <span>{t('actions.edit')}</span>
        </button>
      </div>
    );
  }
  renderSaveCancelButtons() {
    const { t, isFromModal } = this.props;
    const textToButtons = this.IS_UPDATED_FORM ? t('actions.delete') : t('actions.cancel');
    const functionToCancel = this.IS_UPDATED_FORM ? this.onClickDelete : this.onClickCancel;
    const formId = `${this.FORM_ID}${isFromModal ? 'InModal' : ''}`;
    return <SaveCancelCTAs formId={formId} cancelText={textToButtons} onCancel={functionToCancel} />;
  }
  renderHeader(editMode = true, showBackButton = true) {
    return (
      <Form.Row>
        <Col className={`d-inline-flex align-items-center ${isMobile ? 'mb-3' : ''}`}>
          {this.renderHeaderName(editMode, showBackButton)}
        </Col>
        {this.IS_UPDATED_FORM && <Col>{this.renderHeaderRight()}</Col>}
      </Form.Row>
    );
  }
  renderHeaderName(editMode = true, showBackButton = true) {
    const editionModeClass = editMode ? 'title-section__name-inputs--edition-mode' : '';
    const { isFromModal } = this.props;
    return (
      <div className="title-section">
        {showBackButton && <BackCTA onClick={() => this.props.history.goBack()} />}
        {!isFromModal && this.IS_UPDATED_FORM && isMobile && this.renderEditButton()}
        <div className="vertical-separator"></div>
        <div className={`title-section__name-inputs ${editionModeClass}`}>{this.renderInputName('name', editMode)}</div>
      </div>
    );
  }
  renderHeaderRight() {
    const { isFromModal } = this.props;
    return (
      <div className="title-section__right-block">
        {!isFromModal && isBrowser && this.renderEditButton()}
        <InfoCreatorModifier model={this.props[this.MODEL_NAME]} />
      </div>
    );
  }
  renderInputName(kindOfName, editMode = true) {
    // INFO: kindOfName = 'first_name' || 'last_name' || 'name'
    const { t, formSyncErrors, fields, form, dispatch } = this.props;
    let placeHolderString = t('contact-details.name');
    if (kindOfName === 'last_name') {
      placeHolderString = t('contact-details.lastName');
    }
    return (
      <EditField
        error={formSyncErrors[kindOfName]}
        meta={fields[kindOfName]}
        form={form}
        dispatch={dispatch}
        editable={editMode}
        placeholder={placeHolderString}
        name={kindOfName}
      >
        <h1>{this.props[kindOfName]}</h1>
      </EditField>
    );
  }
  renderWorkLog() {
    const { t } = this.props;
    return (
      <section className="model-section">
        {this.IS_UPDATED_FORM ? (
          <Worklog model={this.props[this.MODEL_NAME]} refetch={this.refetch} />
        ) : (
          <ToggleSection defaultEditable={false}>
            <ToggleHeading>
              <h2>{t('contact-details.worklog')}</h2>
            </ToggleHeading>
            <TogglePanel>
              <Field
                name="comment"
                component={FieldInput}
                as="textarea"
                rows="3"
                placeholder={t('worklog.add-comment')}
                onBlur={(e) => {
                  this.setState({ comment: e.target.value });
                }}
              />
            </TogglePanel>
          </ToggleSection>
        )}
      </section>
    );
  }

  // Specific toggle sections RENDERS
  renderDescriptionToggleSection(editMode = true) {
    const { t, description } = this.props;
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('organization-details.description')}</h2>
        </ToggleHeading>
        <TogglePanel>
          {editMode ? (
            <Field
              name="description"
              component={FieldInput}
              as="textarea"
              rows="3"
              placeholder={t(`group-details.add-description`)}
            ></Field>
          ) : (
            <span className="pre-text">{description}</span>
          )}
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, url } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('organization-details.website'),
        presentContent: (
          <a href={generateURL(url)} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        ),
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="url"
              component={FieldInput}
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
  renderModelMainSection(editMode = true) {
    return (
      <section className="model-section">
        <Form.Row>
          <Col>
            <Col>{this.renderDescriptionToggleSection(editMode)}</Col>
            <hr />
            <Col>{this.renderGeneralInfoToggleSection(editMode)}</Col>
          </Col>
        </Form.Row>
      </section>
    );
  }

  renderRelatedEntities(relatedEntities) {
    const { t } = this.props;
    return (
      <section className="model-section">
        {relatedEntities.map((entity, index) => {
          let formattedEntityData;
          if (entity['__typename'] === 'Organization') {
            formattedEntityData = formatAffiliationOrganizationData(entity);
          } else {
            formattedEntityData = entity;
          }
          return (
            <Col key={entity.id}>
              <ToggleSection>
                <ToggleHeading>
                  <h2>{t(`${INFO_BY_ENTITIES[formattedEntityData['__typename']].headerNameI18nText}`)}</h2>
                </ToggleHeading>
                <TogglePanel>
                  <FieldRelatedEntity
                    fields={INFO_BY_ENTITIES[formattedEntityData['__typename']].fields}
                    data={formattedEntityData}
                    t={t}
                  />
                </TogglePanel>
              </ToggleSection>
              <hr />
            </Col>
          );
        })}
      </section>
    );
  }

  // Main RENDER
  render() {
    return <div>This method should be overwritten in the child class</div>;
  }
}
export default _BasicFormParentClass;
