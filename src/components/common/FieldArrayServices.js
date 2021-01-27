import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
import { withTranslation } from 'react-i18next';

class FieldArrayServices extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, // DEFAULT: false
      selectedRowKey: null, // DEFAULT: null
      currentPreFilterModel: '',
      preFilterMethod: '',
      fieldModalOpened: '',
      rowWithAllTextVisible: null,
      currentInternalFilter: {
        type_name: 'All',
      },
      internalTextFilter: {
        value: '',
        field: 'name',
      },
    };
    this.styleModifier = '';
    this.FIELD_NAME_IN_FORM = 'uses';
    this.HEADER_TEXTS = props.headerConfig || {
      summary: [
        {
          text: 'ID',
          fieldKey: 'name',
        },
      ],
      all: [
        {
          text: 'ID',
          fieldKey: 'name',
        },
        {
          text: 'general-forms/operational-state',
          fieldKey: 'operational_state.name',
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
          showAllText: true,
        },
      ],
      // modal: [''],
    };
    this.PRE_FILTER_SELECT = {
      label: null,
      type: null,
      name: null,
      entityMandatory: 'Service',
    };
    this.MODEL_TO_SEARCH = 'services';
    this.INTERNAL_FILTER = {
      pills: {
        modelToQuery: null || 'operational_state',
        manualList: [
          {
            presentName: 'Filter1',
            value: 'test-value',
            fieldsAffected: ['operational_state'],
          },
        ],
      },
      text: {
        fieldsAffected: ['name', 'description'],
      },
    };
  }

  getAllValues(filterObj) {
    const allValues = this.props.fields.getAll() || [];
    if (!!filterObj) {
      const [mainFilterKey, mainFilterValue] = Object.entries(filterObj)[0];
      const [textFilterKey, textFilterValue] = Object.entries(filterObj)[1];
      const [descriptionFilterKey, descriptionFilterValue] = Object.entries(filterObj)[2];
      return allValues
        .filter((v) => {
          const value = v[mainFilterKey]?.value || v[mainFilterKey];
          return !!!mainFilterValue || value === mainFilterValue;
        })
        .filter(
          (v) => v[textFilterKey].toLowerCase().includes(textFilterValue.toLowerCase()) ||
            v[descriptionFilterKey].toLowerCase().includes(descriptionFilterValue.toLowerCase()),
        );
    }
    return allValues;
  }

  getFilterTable() {
    const { currentInternalFilter, internalTextFilter } = this.state;
    let operationalValue = currentInternalFilter?.type_name;
    if (currentInternalFilter?.type_name === 'All') {
      operationalValue = null;
    }
    return {
      operational_state: operationalValue,
      name: internalTextFilter?.value,
      description: internalTextFilter?.value,
    };
  }
}

export default withTranslation()(FieldArrayServices);
