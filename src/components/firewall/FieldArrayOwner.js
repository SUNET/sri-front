import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayOwner extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'owner';
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
          fieldKey: 'type.name',
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
}

export default withTranslation()(FieldArrayOwner);
