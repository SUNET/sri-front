import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';

class FieldArrayConnectedToPort extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'connected_to';
    this.styleModifier = 'xl-table';
    this.state = {
      internalTextFilter: {
        value: '',
        field: 'name',
      },
    };
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
        {
          text: 'general-forms/end-site',
          fieldKey: 'endSite.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/end-room',
          fieldKey: 'endRoom.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/end-rack',
          fieldKey: 'endRack.name',
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
          fieldKey: 'endPort.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
          showAllText: true,
        },
      ],
      modal: ['general-forms/connected-to-element-detail'],
    };
    this.INTERNAL_FILTER = {
      text: {
        fieldsAffected: ['name'],
      },
    };
    this.PRE_FILTER_SELECT = {
      label: 'general-forms/select-cable-type',
      type: 'cable_types',
      name: 'cable_types_preFilter',
      entityMandatory: 'Cable',
    };
  }

  getFilterTable() {
    const { internalTextFilter } = this.state;
    return { __typename: null, operational_state: null, name: internalTextFilter?.value };
  }

  getAllValues(filterObj) {
    const allValues = this.props.fields.getAll() || [];
    if (!!filterObj) {
      const [mainFilterKey, mainFilterValue] = Object.entries(filterObj)[0];
      const [opStateFilter, opStateValue] = Object.entries(filterObj)[1];
      const [textFilterKey, textFilterValue] = Object.entries(filterObj)[2];

      const valuesFilteredByType = allValues.filter((v) => {
        const value = v[mainFilterKey];
        return !!!mainFilterValue || value === mainFilterValue;
      });
      const valuesFilteredByOpState = valuesFilteredByType.filter((v) => {
        const value = v[opStateFilter]?.value || v[opStateFilter];
        return !!!opStateValue || value === opStateValue;
      });
      const valuesFilteredByText = valuesFilteredByOpState.filter((v) => {
        return v[textFilterKey].toLowerCase().includes(textFilterValue.toLowerCase());
      });
      return valuesFilteredByText;
    }
    return allValues;
  }
}

export default withTranslation()(FieldArrayConnectedToPort);
