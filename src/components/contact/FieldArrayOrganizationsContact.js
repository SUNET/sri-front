import React from 'react';
import { Form } from 'react-bootstrap';
import { Field, change, arrayPush } from 'redux-form';
import Dropdown from '../Dropdown';
import { UNLINK, SAVED, CHANGED } from '../../utils/constants';
import FieldInput from '../FieldInput';
import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
import { isBrowser, isMobile } from 'react-device-detect';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactSVG from 'react-svg';
// Common imports
import { withTranslation } from 'react-i18next';

import { getOrganization } from '../organization/Organization';

class FieldArrayOrganizationsContact extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'organizations';
    this.HEADER_TEXTS = {
      summary: [
        {
          text: 'general-forms/role',
          fieldKey: '',
        },
      ],
      all: [
        {
          text: 'general-forms/role',
          fieldKey: '',
        },
        {
          text: 'general-forms/organization-id',
          fieldKey: 'organization_id',
        },
        {
          text: 'entity-name/organization',
          fieldKey: 'name',
        },
      ],
      // modal: ['general-forms/parent-element-detail'],
      modal: null,
    };
    this.PRE_FILTER_SELECT = {};
    this.MODEL_TO_SEARCH = null;
  }

  getIndexRow(id) {
    const values = this.props.fields.getAll();
    const indexRow = values.findIndex((value) => value.id === id);
    return indexRow;
  }

  saveLabel = (event, index) => {
    const indexForThisFieldKey = index;
    const input_label = event.options[event.selectedIndex].text;
    const input_name = event.name.split('.')[1];
    function updateOrganizationIdField(props, orgId, organization_id) {
      props.dispatch(
        change(props.meta.form, `organizations[${indexForThisFieldKey}].organization_id`, organization_id),
      );
      props.dispatch(change(props.meta.form, `organizations[${indexForThisFieldKey}].organization`, orgId));
    }
    this.props.dispatch(
      change(this.props.meta.form, `organizations[${indexForThisFieldKey}].${input_name}_label`, input_label),
    );
    if (input_name === 'organization') {
      getOrganization(event.value)
        .then((organization) => {
          if (organization) {
            updateOrganizationIdField(this.props, organization.id, organization.organization_id);
          }
        })
        .catch((err) => {
          updateOrganizationIdField(this.props, null);
        });
    }
  };

  isDisabledFilters() {
    return false;
  }

  showCreateForm() {
    const emptyOrganization = {
      id: '',
      name: '',
      organization_id: '',
      organization_number: null,
      roles: [
        {
          id: '',
          status: 'editing',
          origin: 'store',
          created: false,
          relation_id: null,
        },
      ],
    };
    this.props.dispatch(arrayPush(this.props.meta.form, 'organizations', emptyOrganization));
  }

  renderButtonsBox(id) {
    const { t } = this.props;
    const rowDetails = this.getValueById(id);
    return (
      <div className={`contact-in-organization__body__buttons-in-the-final-row`}>
        <OverlayTrigger overlay={<Tooltip id="tooltip-unlink">{t('actions/unlink')}</Tooltip>}>
          <div
            className={`row-cta unlink ${rowDetails.data.status === UNLINK ? 'active' : ''}`}
            onClick={() => this.unlinkRow(id)}
          >
            <ReactSVG src={require(`../../static/img/unlink.svg`)} wrapper="span" />
          </div>
        </OverlayTrigger>
      </div>
    );
  }

  unlinkRow(id) {
    const currentValue = this.getValueById(id);
    const newStatus = currentValue.data.status === UNLINK ? SAVED : UNLINK;
    this.hideDataModal();
    if (currentValue.data.origin === 'store') {
      this.props.dispatch(
        change(this.props.meta.form, `${this.FIELD_NAME_IN_FORM}[${currentValue.index}].status`, newStatus),
      );
    } else {
      this.props.fields.remove(currentValue.index);
    }
  }

  renderBody() {
    const { editable, fields } = this.props;
    const values = fields.getAll();
    return (
      <div className="contact-in-organization__body">
        {values &&
          values.map((row, index) => {
            return (
              <div
                key={index}
                className={`contact-in-organization__body__row ${
                  row.status !== SAVED ? 'contact-in-organization__body__row--disabled' : ''
                }`}
              >
                {isBrowser && this.renderRolesCell(row)}
                {isBrowser && this.renderOrganizationID(row)}
                {isBrowser && this.renderOrganizationName(row)}
                {isMobile && this.HEADER_TEXTS.summary.map(({ fieldKey }) => this.renderFieldRow(row, fieldKey))}
                {editable && this.renderButtonsBox(row.id)}
              </div>
            );
          })}
      </div>
    );
  }

  renderRolesCell(organization) {
    const { editable, t } = this.props;
    const { roles } = organization;
    const indexRow = this.getIndexRow(organization.id);
    const content = editable ? (
      <Dropdown
        t={t}
        className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
        type="combo_list"
        name="roles"
        model="roles"
        placeholder={t('general-forms/write-role')}
        currentValue={roles.filter((role) => role.status === SAVED)}
        objectCurrentValue={roles.filter((role) => role.status === SAVED)}
        nameDataInsideRequest="roles"
        valueField="id"
        labelElementsArray={['name']}
        onChange={(newRoles) => {
          const newRolesWithStatus = [
            ...newRoles
              .filter((newRole) => !roles.find((role) => role.id === newRole.id))
              .map((newRole) => ({ ...newRole, status: SAVED })),
            ...roles
              .filter((role) => !newRoles.find((newRole) => newRole.id === role.id))
              .map((role) => ({ ...role, status: UNLINK })),
            ...roles
              .filter((role) => newRoles.find((newRole) => newRole.id === role.id))
              .map((role) => ({ ...role, status: SAVED })),
          ];
          this.props.dispatch(change(this.props.meta.form, `organizations[${indexRow}].roles`, newRolesWithStatus));
        }}
      />
    ) : (
      organization.roles && organization.roles.map((role) => <p key={Math.random()}>{role.name}</p>)
    );

    return (
      <div key={Math.random()} className="contact-in-organization__body__row__element">
        {content}
      </div>
    );
  }

  renderOrganizationID(row) {
    const { editable } = this.props;
    const indexRow = this.getIndexRow(row.id);
    const content = editable ? (
      <Form.Group>
        <Field
          type="text"
          disabled
          component={FieldInput}
          placeholder="Type ID"
          name={`organizations[${indexRow}].organization_id`}
        />
      </Form.Group>
    ) : (
      row.organization_id
    );
    return (
      <div key={Math.random()} className="contact-in-organization__body__row__element">
        {content}
      </div>
    );
  }

  renderOrganizationName(row) {
    const { editable, t } = this.props;
    const indexRow = this.getIndexRow(row.id);
    const content = editable ? (
      <Form.Group style={isBrowser ? { width: '170px' } : {}}>
        <Dropdown
          t={t}
          className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
          emptyLabel=""
          type="combo_list"
          name={`organizations[${indexRow}].id`}
          model="organization"
          placeholder={t('general-forms/write-id')}
          currentValue={row.name}
          objectCurrentValue={{
            id: row.id,
            name: row.name,
            organization_id: row.organization_id,
          }}
          nameDataInsideRequest="all_organizations"
          valueField="organization_id"
          labelElementsArray={['name']}
          onChange={(newOrganization) => {
            const newOrgID = newOrganization ? newOrganization.organization_id : null;
            const newID = newOrganization ? newOrganization.id : null;
            const newName = newOrganization ? newOrganization.name : null;
            this.props.dispatch(change(this.props.meta.form, `organizations[${indexRow}].organization_id`, newOrgID));
            this.props.dispatch(change(this.props.meta.form, `organizations[${indexRow}].id`, newID));
            this.props.dispatch(change(this.props.meta.form, `organizations[${indexRow}].name`, newName));
            this.props.dispatch(change(this.props.meta.form, `organizations[${indexRow}].status`, CHANGED));
          }}
        />
      </Form.Group>
    ) : (
      row.name
    );
    return (
      <div key={Math.random()} className="contact-in-organization__body__row__element">
        {content}
      </div>
    );
  }
}

export default withTranslation()(FieldArrayOrganizationsContact);
