// Common imports
import React from 'react';
import { arrayPush, FieldArray, Field } from 'redux-form';
import uuidv4 from 'uuid/v4';
import { Form, Col } from 'react-bootstrap';
// components
import BackCTA from '../common/BackCTA';
import EditField from '../EditField';
import FieldArrayMembersGroup from './FieldArrayMembersGroup';
import FieldInput from '../FieldInput';
import InfoCreatorModifier from '../InfoCreatorModifier';
import SaveCancelCTAs from '../common/SaveCancelCTAs';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import Worklog from '../Worklog';
// const
import { isBrowser, isMobile } from 'react-device-detect';
// scss
import '../../style/ModelDetails.scss';

class _GroupFormParentClass extends React.Component {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'group';
  ROUTE_LIST_DIRECTION = '/community/groups';

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
      this.handleSelectedMember(selectionData);
      return false;
    }
    return true;
  }

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
    this.props.history.push(this.ROUTE_LIST_DIRECTION);
  };
  _hasBeenAdded = (newMember) => {
    if (this.props.memberValues) {
      return this.props.memberValues.some((member) => member.id === newMember.id);
    }
    return false;
  };
  handleSelectedMember = (selection) => {
    if (selection !== null) {
      this.props.getContact(selection.id).then((member) => {
        const newMember = {
          name: member.name,
          first_name: member.first_name,
          last_name: member.last_name,
          id: member.id,
          contact_type: member.contact_type,
          organization: member.roles,
          organization_obj: member.roles.length ? member.roles.map((elem) => elem.end) : [],
          organization_label: member.roles.length ? member.roles.map((elem) => elem.end) : [],
          email: member.emails && member.emails.length ? member.emails : [],
          email_obj: member.emails,
          phone: member.phones && member.phones.length ? member.phones : [],
          phone_obj: member.phones,
          created: true,
          origin: 'new',
          status: 'saved',
          key: uuidv4(),
        };
        if (!this._hasBeenAdded(newMember)) {
          this.props.dispatch(arrayPush(this.props.form, 'members', newMember));
        }
      });
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
    const { t } = this.props;
    const textToButtons = this.IS_UPDATED_FORM ? t('actions.delete') : t('actions.cancel');
    const functionToCancel = this.IS_UPDATED_FORM ? this.onClickDelete : this.onClickCancel;
    return <SaveCancelCTAs formId={this.FORM_ID} cancelText={textToButtons} onCancel={functionToCancel} />;
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
        {showBackButton && <BackCTA onClick={() => this.props.history.goBack()} />}
        {this.IS_UPDATED_FORM && isMobile && this.renderEditButton()}
        <div className="vertical-separator"></div>
        <div data-name="name" className={`title-section__name-inputs ${editionModeClass}`}>
          {this.renderInputName('name', editMode)}
        </div>
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
    const { t, group } = this.props;
    return (
      <section className="model-section">
        {this.IS_UPDATED_FORM ? (
          <Worklog model={group} refetch={this.refetch} />
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
              placeholder={t('group-details.add-description')}
            ></Field>
          ) : (
            <span className="pre-text">{description}</span>
          )}
        </TogglePanel>
      </ToggleSection>
    );
  }
  renderContactsToggleSection(editMode = true) {
    const { t, entityRemovedId } = this.props;
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('organization-details.contacts')}</h2>
        </ToggleHeading>

        <TogglePanel>
          <FieldArray
            name="members"
            component={FieldArrayMembersGroup}
            editable={editMode}
            dispatch={this.props.dispatch}
            errors={this.props.formSyncErrors.members}
            metaFields={this.props.fields}
            handleContactSearch={this.handleSelectedMember}
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
    );
  }
  renderModelMainSection(editMode = true) {
    return (
      <section className="model-section">
        <Form.Row>
          <Col>
            <Col>{this.renderDescriptionToggleSection(editMode)}</Col>
            <hr />
            <Col>{this.renderContactsToggleSection(editMode)}</Col>
          </Col>
        </Form.Row>
      </section>
    );
  }

  // Main RENDER
  render() {
    return <div>This method should be overwritten in the child class</div>;
  }
}
export default _GroupFormParentClass;
