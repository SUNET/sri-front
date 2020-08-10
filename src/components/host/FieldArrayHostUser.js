import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayHostUser extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'host_user';
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
      ],
      modal: ['network.details.parent_element_detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: null,
      type: null,
      model: null,
      name: null,
      entityMandatory: 'HostUser',
    };
    this.MODEL_TO_SEARCH = 'hostUsers';
    this.ENTITIES_WITHOUT_MODAL = ['HostUser'];
  }
}

export default withTranslation()(FieldArrayHostUser);
