import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayPeeringGroupDependencies extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'dependencies';
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
          fieldKey: 'type',
        },
      ],
      modal: null, // ['network.details.parent_element_detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: null,
      type: null,
      name: null,
      entityMandatory: null,
    };
    this.PRE_FILTER_SELECT = null;
    this.MODEL_TO_SEARCH = null;
  }
}

export default withTranslation()(FieldArrayPeeringGroupDependencies);
