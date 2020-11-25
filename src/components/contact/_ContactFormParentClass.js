// Common imports
import React from 'react';
import { FieldArray, Field } from 'redux-form';
import { Form } from 'react-bootstrap';
// components
import BackCTA from '../common/BackCTA';
import ContactEmails from '../contact/ContactEmails';
import ContactPhones from '../contact/ContactPhones';
import Dropdown from '../Dropdown';
import EditField from '../EditField';
import FieldArrayOrganizationsContact from '../contact/FieldArrayOrganizationsContact';
import FieldInput from '../FieldInput';
import InfoCreatorModifier from '../InfoCreatorModifier';
import SaveCancelCTAs from '../common/SaveCancelCTAs';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import Worklog from '../Worklog';
// const
import { isBrowser, isMobile } from 'react-device-detect';
// scss
import '../../style/ModelDetails.scss';

import renderFormBlockSection from '../common/BlockSection';

class _ContactFormParentClass extends React.Component {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'contact';
  ROUTE_LIST_DIRECTION = '/community/contacts';

  state = {
    editMode: false,
    disabledSubmitButton: false,
  };

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
      name: `${this.props.initialValues.first_name} ${this.props.initialValues.last_name} `,
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
    const { isFromModal, history, hideContactModal } = this.props;
    if (isFromModal) {
      hideContactModal();
    } else {
      history.goBack();
    }
  };

  // Common sections RENDERS
  renderSections(editMode) {
    return (
      <>
        {this.renderNotesToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderProfessionalDetails(editMode)}
        {this.renderWorkLog(editMode)}
      </>
    );
  }

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
          <span>{t('actions/edit')}</span>
        </button>
      </div>
    );
  }
  renderSaveCancelButtons() {
    const { t, isFromModal } = this.props;
    const textToButtons = this.IS_UPDATED_FORM ? t('actions/delete') : t('actions/cancel');
    const functionToCancel = this.IS_UPDATED_FORM ? this.onClickDelete : this.onClickCancel;
    const formId = `${this.FORM_ID}${isFromModal ? 'InModal' : ''}`;
    const { disabledSubmitButton } = this.state;
    return (
      <SaveCancelCTAs
        formId={formId}
        cancelText={textToButtons}
        onCancel={functionToCancel}
        saveButtonDisabled={disabledSubmitButton}
      />
    );
  }
  renderHeader(editMode = true, showBackButton = true, isFromModal = false) {
    return (
      <Form.Row className="justify-content-between">
        <div className={`d-inline-flex align-items-center ${isMobile ? 'mb-3' : ''}`}>
          {this.renderHeaderName(editMode, showBackButton)}
        </div>
        {this.IS_UPDATED_FORM && <div>{this.renderHeaderRight(isFromModal)}</div>}
      </Form.Row>
    );
  }
  renderHeaderName(editMode = true, showBackButton = true, isFromModal = false) {
    const editionModeClass = editMode ? 'title-section__name-inputs--edition-mode' : '';
    return (
      <div className="title-section">
        {showBackButton && <BackCTA onClick={() => this.props.history.push(this.ROUTE_LIST_DIRECTION)} />}
        {this.IS_UPDATED_FORM && isMobile && !isFromModal && this.renderEditButton()}
        <div className="vertical-separator"></div>
        <div className={`title-section__name-inputs ${editionModeClass}`}>
          {this.renderInputName('first_name', editMode)}
          {this.renderInputName('last_name', editMode)}
        </div>
      </div>
    );
  }
  renderHeaderRight(isFromModal = false) {
    return (
      <div className="title-section__right-block">
        {isBrowser && !isFromModal && this.renderEditButton()}
        <InfoCreatorModifier model={this.props[this.MODEL_NAME]} />
      </div>
    );
  }
  renderInputName(kindOfName, editMode = true) {
    // INFO: kindOfName = 'first_name' || 'last_name'
    const { t, formSyncErrors, fields, form, dispatch } = this.props;
    const placeHolderString = kindOfName === 'first_name' ? t('general-forms/name') : t('general-forms/last-name');
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
    const { t, contact } = this.props;
    const componentClassName = 'workLog-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        {this.IS_UPDATED_FORM ? (
          <Worklog model={contact} refetch={this.refetch} />
        ) : (
          <ToggleSection defaultEditable={false}>
            <ToggleHeading>
              <h2>{t('general-forms/worklog')}</h2>
            </ToggleHeading>
            <TogglePanel>
              <Field
                name="comment"
                component={FieldInput}
                as="textarea"
                rows="3"
                placeholder={t('general-forms/worklog-add-comment')}
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
  renderNotesToggleSection(editMode = true) {
    const { t, notes } = this.props;
    const componentClassName = 'notes-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/notes')}</h2>
          </ToggleHeading>
          <TogglePanel>
            {editMode ? (
              <Field
                name="notes"
                component={FieldInput}
                as="textarea"
                rows="3"
                placeholder={t('general-forms/add-notes')}
              ></Field>
            ) : (
              <span className="pre-text">{notes}</span>
            )}
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, title, contactTypeObj, pgp_fingerprint } = this.props;
    const generalInfoFirstRow = [
      {
        title: 'Title',
        presentContent: title,
        editContent: (
          <Form.Group>
            <Field type="text" component={FieldInput} placeholder="Type title" name="title" />
          </Form.Group>
        ),
      },
      {
        title: 'Type',
        presentContent: contactTypeObj ? contactTypeObj.name : undefined,
        editContent: (
          <Dropdown
            t={t}
            className="auto"
            emptyLabel="Select type"
            name="contact_type"
            type="contact_type"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: 'E-mails',
        presentContent: (
          <FieldArray
            name="emails"
            t={t}
            component={ContactEmails}
            editable={editMode}
            dispatch={this.props.dispatch}
          />
        ),
        editContent: (
          <FieldArray
            name="emails"
            t={t}
            component={ContactEmails}
            editable={editMode}
            dispatch={this.props.dispatch}
          />
        ),
      },
      {
        title: 'Phone',
        presentContent: (
          <FieldArray
            name="phones"
            t={t}
            component={ContactPhones}
            editable={editMode}
            dispatch={this.props.dispatch}
          />
        ),
        editContent: (
          <FieldArray
            name="phones"
            t={t}
            component={ContactPhones}
            editable={editMode}
            dispatch={this.props.dispatch}
          />
        ),
      },
    ];
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection defaultEditable={false}>
          <ToggleHeading>
            <h2>{t('general-forms/general-information')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <>
              <div className="form-internal-block">
                {generalInfoFirstRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
              <div className="table-details mt-4">
                <div>
                  <div>PGP Fingerprint</div>
                </div>
                <div>
                  <div>
                    {!editMode ? (
                      pgp_fingerprint
                    ) : (
                      <Form.Group>
                        <Field
                          type="text"
                          component={FieldInput}
                          className={`${isBrowser ? 'xlg' : 'auto'}`}
                          placeholder={t('general-forms/pgp-fingerprint')}
                          name="pgp_fingerprint"
                        />
                      </Form.Group>
                    )}
                  </div>
                </div>
              </div>
            </>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
  renderProfessionalDetails(editMode = true) {
    const componentClassName = 'professional-details-block';
    const { t } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/professional-details')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="organizations"
              component={FieldArrayOrganizationsContact}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.organizations}
              metaFields={this.props.fields}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  // Main RENDER
  render() {
    console.error('This method should be overwritten in the child class');
    return <div>This method should be overwritten in the child class</div>;
  }
}

export default _ContactFormParentClass;
