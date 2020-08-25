import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayConnectedToPort extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'connectedTo';
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
        {
          text: 'general-forms/description',
          fieldKey: 'description',
        },
      ],
      modal: ['general-forms/connected-to-element-detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: 'general-forms/select-cable-type',
      type: 'cable_types',
      name: 'cable_types_preFilter',
      entityMandatory: 'Cable',
    };
  }
}

export default withTranslation()(FieldArrayConnectedToPort);
