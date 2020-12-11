import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayParentPort extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'parent';
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
          text: 'general-forms/entity-type',
          fieldKey: '__typename',
        },
        {
          text: 'general-forms/type',
          fieldKey: 'type.name',
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
      type: 'physical_types',
      model: 'physical_types',
      name: 'physical_types_preFilter',
    };
  }
}

export default withTranslation()(FieldArrayParentPort);
