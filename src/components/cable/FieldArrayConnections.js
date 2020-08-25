import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayConnections extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'connections';
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
      label: null,
      type: null,
      name: null,
      entityMandatory: 'Port',
    };
    this.MODEL_TO_SEARCH = 'ports-type-head';
  }
}

export default withTranslation()(FieldArrayConnections);
