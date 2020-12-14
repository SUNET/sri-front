import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayDependencies extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'dependencies';
    this.ENTITIES_WITHOUT_MODAL = this.ENTITIES_WITHOUT_NEW_MODAL = [
      'Email',
      'emails',
      'Group',
      'groups',
      'Procedure',
      'procedures',
      'Address',
      'addresss',
      'Phone',
      'phones',
    ];
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
      ],
      modal: null, // ['general-forms/parent-element-detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: 'general-forms/select-provide-type',
      type: 'logical_and_physical',
      model: 'logical_and_physical',
      name: 'logical_and_physical_preFilter',
    };
    this.INTERNAL_FILTER = {
      text: {
        fieldsAffected: ['name'],
      },
    };
    // this.MODEL_TO_SEARCH = null;
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

export default withTranslation()(FieldArrayDependencies);
