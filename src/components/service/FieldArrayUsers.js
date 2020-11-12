import React from 'react';
import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
import { Field } from 'redux-form';
import FieldSelect from '../FieldSelect';
import { Form } from 'react-bootstrap';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayUsers extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'users';
    this.HEADER_TEXTS = {
      summary: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
      ],
      all: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
        {
          text: 'general-forms/type',
          fieldKey: '__typename',
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
        },
      ],
      modal: ['general-forms/parent-element-detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: 'general-forms/select-physical-type',
      type: 'owners_types',
      model: 'owners_types',
      name: 'owners_types_preFilter',
    };
    this.ENTITIES_WITHOUT_MODAL = ['HostUser'];
  }

  renderPreFilterDropDown() {
    const options = [
      {
        all_name: 'all_customers',
        getDetailsMethodName: 'getCustomerById',
        name: 'Customer',
        value: 'customers',
      },
      {
        all_name: 'all_endusers',
        getDetailsMethodName: 'getEndUserById',
        name: 'EndUser',
        value: 'endUsers',
      },
    ];
    const { t } = this.props;
    return (
      <Form.Group className="d-inline">
        <Field
          className={this.props.className}
          component={FieldSelect}
          onChange={(e) => {
            const optionSelected = options.find((o) => o.value === e.target.value);
            this.setState({
              currentPreFilterModel: optionSelected ? optionSelected.value : null,
              preFilterMethod: optionSelected ? optionSelected.getDetailsMethodName : null,
            });
          }}
          name={'services_users_prefilter'}
          value={this.props.defaultValue || ''}
        >
          <option value="" default>
            {t('general-forms/select-user')}
          </option>
          <option key={'Customer'} value={'customers'}>
            {t('main-entity-name/customers')}
          </option>
          <option key={'EndUser'} value={'endUsers'}>
            {t('main-entity-name/end-users')}
          </option>
        </Field>
      </Form.Group>
    );
  }
}

export default withTranslation()(FieldArrayUsers);
