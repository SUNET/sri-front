import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
import { withTranslation } from 'react-i18next';

class FieldArrayRacks extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.styleModifier = '';
    this.FIELD_NAME_IN_FORM = 'racks';
    this.HEADER_TEXTS = props.headerConfig || {
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
          text: 'general-forms/equipments',
          fieldKey: 'located_in.name',
          withLink: true,
          listElements: true,
        },
      ],
      modal: ['general-forms/parent-element-detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: null,
      type: null,
      name: null,
      entityMandatory: 'Rack',
    };
    this.MODEL_TO_SEARCH = 'racks';
  }
}

export default withTranslation()(FieldArrayRacks);
