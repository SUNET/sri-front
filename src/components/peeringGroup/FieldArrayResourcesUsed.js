import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayResourcesUsed extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'resourcedUsed';
    this.styleModifier = 'xl-table';
    this.HEADER_TEXTS = {
      summary: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
      ],
      all: [
        {
          text: 'general-forms/router',
          fieldKey: 'router.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/pic',
          fieldKey: 'pic',
        },
        {
          text: 'general-forms/unit',
          fieldKey: 'unit',
        },
        {
          text: 'general-forms/interface-address',
          fieldKey: 'ip_address',
        },
        {
          text: 'general-forms/vlan',
          fieldKey: 'vlan',
        },
        {
          text: 'general-forms/user-address',
          fieldKey: 'user_address',
        },
        {
          text: 'general-forms/user',
          fieldKey: 'user.name',
          withLink: true,
          listElements: true,
        },
      ],
      modal: null, // ['general-forms/parent-element-detail'],
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

  // renderMoreInfoButton() {
  //   return null;
  // }
}

export default withTranslation()(FieldArrayResourcesUsed);
