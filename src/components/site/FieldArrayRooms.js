import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
import { withTranslation } from 'react-i18next';

class FieldArrayRooms extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.styleModifier = '';
    this.FIELD_NAME_IN_FORM = 'rooms';
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
          text: '+++fllor',
          fieldKey: 'floor',
        },
      ],
      modal: ['general-forms/parent-element-detail'],
    };
    this.PRE_FILTER_SELECT = {
      label: null,
      type: null,
      name: null,
      entityMandatory: 'Room',
    };
    this.MODEL_TO_SEARCH = null;
  }
}

export default withTranslation()(FieldArrayRooms);
