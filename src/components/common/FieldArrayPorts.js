import _BasicFieldArrayParentClass from './_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayPorts extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.styleModifier = 'xl-table';
    this.FIELD_NAME_IN_FORM = 'ports';
    this.HEADER_TEXTS = props.headerConfig || {
      summary: [
        {
          text: 'general-forms/port-title',
          fieldKey: 'name',
        },
      ],
      all: [
        {
          text: 'general-forms/port-title',
          fieldKey: 'name',
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
          showAllText: true,
        },
        {
          text: 'general-forms/type',
          fieldKey: 'type.name',
        },
        {
          text: 'general-forms/cable-title',
          fieldKey: 'cable.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/end-equipment',
          fieldKey: 'endEquipment.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/end-port',
          fieldKey: 'endPorts.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/units-title',
          fieldKey: 'unit.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/depends-on-port',
          fieldKey: 'dependsOnPort.name',
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
      entityMandatory: 'Port',
    };
    this.MODEL_TO_SEARCH = 'ports-type-head';
  }
}

export default withTranslation()(FieldArrayPorts);
