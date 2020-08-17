import _BasicFieldArrayParentClass from './_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayPorts extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'ports';
    this.HEADER_TEXTS = {
      summary: [
        {
          text: 'contact-details.name',
          fieldKey: 'name',
        },
      ],
      all: [
        {
          text: 'contact-details.name',
          fieldKey: 'name',
        },
        {
          text: 'organization-details.type',
          fieldKey: 'type.name',
        },
      ],
      modal: ['network.details.parent_element_detail'],
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

export default withTranslation()(FieldArrayPorts);
