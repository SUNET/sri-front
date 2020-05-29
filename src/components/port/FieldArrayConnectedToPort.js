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
        {
          text: 'group-details.description',
          fieldKey: 'description',
        },
      ],
      modal: ['network.details.connectedTo_element_detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: 'cable.select_type',
      type: 'cable_types',
      name: 'cable_types_preFilter',
      entityMandatory: 'Cable',
    };
  }
}

export default withTranslation()(FieldArrayConnectedToPort);
