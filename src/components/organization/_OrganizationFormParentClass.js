// Common imports
import React from 'react';
import { arrayPush, FieldArray, Field, change } from 'redux-form';
import { Form } from 'react-bootstrap';
// components
import BackCTA from '../common/BackCTA';
import Dropdown from '../Dropdown';
import EditField from '../EditField';
import FieldArrayAddressOrganization from './FieldArrayAddressOrganization';
import FieldArrayContactOrganization from './FieldArrayContactOrganization';
import FiledArrayCheckbox, { INPUTS } from '../FieldArrayCheckbox';
import FieldInput from '../FieldInput';
import InfoCreatorModifier from '../InfoCreatorModifier';
import SaveCancelCTAs from '../common/SaveCancelCTAs';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import Worklog from '../Worklog';
// const
import { isBrowser, isMobile } from 'react-device-detect';
// scss
import '../../style/ModelDetails.scss';
import '../../style/ComboSelect.scss';

import renderFormBlockSection from '../common/BlockSection';

class _OrganizationFormParentClass extends React.Component {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'organization';
  ROUTE_LIST_DIRECTION = '/community/organizations';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    if (nextProps.entitySavedId) {
      const selectionData = {
        id: nextProps.entitySavedId,
      };
      this.handleSelectedContact(selectionData);
      return false;
    }
    return true;
  }

  componentDidMount() {
    if (this.IS_UPDATED_FORM) {
      // register vitual field for affiliation for checked if it has errors (improve in backend)
      this.props.registerFieldAffiliation();
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
    this.props.history.push(this.ROUTE_LIST_DIRECTION);
  };
  _hasBeenAdded = (newContact) => {
    if (this.props.contactsValues) {
      return this.props.contactsValues.some((contact) => contact.id === newContact.id);
    }
    return false;
  };
  handleSelectedContact = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getContact(selection.id).then((contact) => {
        const newContact = {
          name: contact.name,
          first_name: contact.first_name,
          last_name: contact.last_name,
          id: contact.id,
          contact_type: contact.contact_type,
          roles: [],
          role: contact.roles[0] ? contact.roles[0].role_data.id : '',
          role_obj: contact.roles[0],
          role_label: contact.roles[0] ? contact.roles[0].role_data.name : '',
          email: contact.emails,
          email_obj: contact.emails,
          phone: contact.phones,
          phone_obj: contact.phones,
          created: true,
          origin: 'new',
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'contacts', newContact));
      });
    }
  };
  generateURL = (url) => {
    if (!/^(?:f|ht)tps?:\/\//.test(url)) {
      url = 'http://' + url;
    }
    return url;
  };
  // Common sections RENDERS
  renderSections(editMode) {
    return (
      <>
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderAddressToggleSection(editMode)}
        {this.renderContactsToggleSection(editMode)}
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
    const { t } = this.props;
    const textToButtons = this.IS_UPDATED_FORM ? t('actions/delete') : t('actions/cancel');
    const functionToCancel = this.IS_UPDATED_FORM ? this.onClickDelete : this.onClickCancel;
    return (
      <SaveCancelCTAs
        formId={this.FORM_ID}
        cancelText={textToButtons}
        onCancel={functionToCancel}
        saveButtonDisabled={this.state.disabledSubmitButton}
      />
    );
  }
  renderHeader(editMode = true, showBackButton = true) {
    return (
      <Form.Row className="justify-content-between">
        <div className={`d-inline-flex align-items-center ${isMobile ? 'mb-3' : ''}`}>
          {this.renderHeaderName(editMode, showBackButton)}
        </div>
        {this.IS_UPDATED_FORM && <div>{this.renderHeaderRight()}</div>}
      </Form.Row>
    );
  }
  renderHeaderName(editMode = true, showBackButton = true) {
    const editionModeClass = editMode ? 'title-section__name-inputs--edition-mode' : '';
    return (
      <div className="title-section">
        {showBackButton && <BackCTA onClick={() => this.props.history.push(this.ROUTE_LIST_DIRECTION)} />}
        {this.IS_UPDATED_FORM && isMobile && this.renderEditButton()}
        <div className="vertical-separator"></div>
        <div className={`title-section__name-inputs ${editionModeClass}`}>{this.renderInputName('name', editMode)}</div>
      </div>
    );
  }
  renderHeaderRight() {
    return (
      <div className="title-section__right-block">
        {isBrowser && this.renderEditButton()}
        <InfoCreatorModifier model={this.props[this.MODEL_NAME]} />
      </div>
    );
  }
  renderInputName(kindOfName, editMode = true) {
    // INFO: kindOfName = 'first_name' || 'last_name' || 'name'
    const { t, formSyncErrors, fields, form, dispatch } = this.props;
    let placeHolderString = t('general-forms/name');
    if (kindOfName === 'last_name') {
      placeHolderString = t('general-forms/last-name');
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
    const { t, organization } = this.props;
    const componentClassName = 'workLog-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        {this.IS_UPDATED_FORM ? (
          <Worklog model={organization} refetch={this.refetch} />
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
  renderDescriptionToggleSection(editMode = true) {
    const { t, description } = this.props;
    const componentClassName = 'description-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/description')}</h2>
          </ToggleHeading>
          <TogglePanel>
            {editMode ? (
              <Field
                name="description"
                component={FieldInput}
                as="textarea"
                rows="3"
                placeholder={t('general-forms/add-description')}
              ></Field>
            ) : (
              <span className="pre-text">{description}</span>
            )}
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { typeObj, organization_id, organization_number, website, organization_parent_id, t } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('general-forms/type'),
        presentContent: typeObj ? typeObj.name : undefined,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="organization_types"
            name="type"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/affiliation'),
        presentContent: (
          <FiledArrayCheckbox
            data={INPUTS}
            form={this.props.form}
            dispatch={this.props.dispatch}
            editable={false}
            initialValues={this.props.initialValues.affiliation}
            error={this.props.formSyncErrors.affiliation}
            touched={this.props.fields}
          />
        ),
        editContent: (
          <FiledArrayCheckbox
            data={INPUTS}
            form={this.props.form}
            dispatch={this.props.dispatch}
            editable={true}
            initialValues={this.props.initialValues.affiliation}
            error={this.props.formSyncErrors.affiliation}
            touched={this.props.fields}
          />
        ),
      },
      {
        title: t('general-forms/organization-id'),
        presentContent: organization_id,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="organization_id"
              component={FieldInput}
              placeholder={t('general-forms/write-id')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/parent-organization'),
        presentContent: this.props.organization_parent
          ? `${this.props.organization_parent.name} - ${this.props.organization_parent.organization_id}`
          : '',

        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select parent"
            type="combo_list"
            name="organization_parent_id"
            model="organization"
            placeholder={t('general-forms/write-id')}
            currentValue={organization_parent_id}
            objectCurrentValue={this.props.organization_parent}
            nameDataInsideRequest="all_organizations"
            valueField="organization_id"
            labelElementsArray={['name', 'organization_id']}
            onChange={(newOrganizationParent) => {
              if (newOrganizationParent) {
                this.props.dispatch(
                  change(this.props.form, 'organization_parent_id', newOrganizationParent.organization_id),
                );
                this.props.dispatch(change(this.props.form, 'relationship_parent_of', newOrganizationParent.id));
                this.props.dispatch(change(this.props.form, 'organization_parent', newOrganizationParent));
                this.props.dispatch(change(this.props.form, 'isDirty_relationship_parent_of', false));
              } else if (this.props.initialValues.organization_parent) {
                this.props.dispatch(change(this.props.form, 'organization_parent_id', null));
                this.props.dispatch(change(this.props.form, 'relationship_parent_of', null));
                this.props.dispatch(change(this.props.form, 'organization_parent', null));
                this.props.dispatch(
                  change(
                    this.props.form,
                    'isDirty_relationship_parent_of',
                    this.props.initialValues.organization_parent.relation_id,
                  ),
                );
              }
            }}
          />
        ),
      },
    ];

    const generalInfoSecondRow = [
      {
        title: t('general-forms/website'),
        presentContent: (
          <a href={this.generateURL(website)} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        ),
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="website"
              component={FieldInput}
              placeholder={t('general-forms/write-website')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/organization-number'),
        presentContent: organization_number,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="organization_number"
              component={FieldInput}
              placeholder={t('general-forms/write-number')}
            />
          </Form.Group>
        ),
      },
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
                {generalInfoFirstRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
              <div className="form-internal-block mt-4">
                {generalInfoSecondRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
  renderAddressToggleSection(editMode = true) {
    const { t } = this.props;
    const componentClassName = 'address-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection defaultEditable={false}>
          <ToggleHeading>
            <h2>{t('general-forms/address')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="addresses"
              component={FieldArrayAddressOrganization}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.addresses}
              metaFields={this.props.fields}
              rerenderOnEveryChange
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
  renderContactsToggleSection(editMode = true) {
    const { t, entityRemovedId } = this.props;
    const componentClassName = 'contacts-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('main-entity-name/contacts')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="contacts"
              component={FieldArrayContactOrganization}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.contacts}
              metaFields={this.props.fields}
              rerenderOnEveryChange
              handleContactSearch={this.handleSelectedContact}
              handleAddContactRow={() => {
                this.props.showNewContactForm();
              }}
              handleShowContactDetail={(contactId) => {
                this.props.showContactDetailForm(contactId);
              }}
              handleShowContactEdition={(contactId) => {
                this.props.showContactEditForm(contactId);
              }}
              removedContactId={entityRemovedId}
              removedContactDeletedFromTheList={() => {
                this.props.hideContactForm();
              }}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
  renderAdditionalInfoToggleSection(editMode = true) {
    const { t, incident_management_info } = this.props;
    const componentClassName = 'additional-info-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/additional-info-incident')}</h2>
          </ToggleHeading>
          <TogglePanel>
            {editMode ? (
              <Field
                name="incident_management_info"
                component={FieldInput}
                as="textarea"
                rows="3"
                placeholder={t('general-forms/add-description')}
              />
            ) : (
              <span className="pre-text">{incident_management_info}</span>
            )}
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  // Main RENDER
  render() {
    return <div>This method should be overwritten in the child class</div>;
  }
}
export default _OrganizationFormParentClass;
