import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayParentPort extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'parents';
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
      modal: ['network.details.parent_element_detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: 'physical.select_type',
      type: 'physical_types',
      model: 'physical_types',
      name: 'physical_types_preFilter',
    };
  }
}

export default withTranslation()(FieldArrayParentPort);
