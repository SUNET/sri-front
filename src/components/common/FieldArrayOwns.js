import React from 'react';
import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
import { withTranslation } from 'react-i18next';

class FieldArrayOwns extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, // DEFAULT: false
      selectedRowKey: null, // DEFAULT: null
      currentPreFilterModel: '',
      preFilterMethod: '',
      fieldModalOpened: '',
      rowWithAllTextVisible: null,
      internalTextFilter: {
        value: '',
        field: 'name',
      },
    };
    this.styleModifier = '';
    this.FIELD_NAME_IN_FORM = 'owns';
    this.HEADER_TEXTS = props.headerConfig || {
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
      ],
      // modal: [''],
    };
    this.PRE_FILTER_SELECT = {
      label: 'general-forms/select-physical-type',
      type: 'physical_types',
      model: 'physical_types',
      name: 'physical_types_preFilter',
    };
    this.MODEL_TO_SEARCH = 'Owns';
    this.INTERNAL_FILTER = {
      text: {
        fieldsAffected: ['name'],
      },
    };
  }

  getAllValues(filterObj) {
    const allValues = this.props.fields.getAll() || [];
    if (!!filterObj) {
      const [textFilterKey, textFilterValue] = Object.entries(filterObj)[0];
      return allValues.filter((v) => v[textFilterKey].includes(textFilterValue));
    }
    return allValues;
  }

  getFilterTable() {
    const { internalTextFilter } = this.state;
    return { name: internalTextFilter?.value };
  }
}

export default withTranslation()(FieldArrayOwns);
