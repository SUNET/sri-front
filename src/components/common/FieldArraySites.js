import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
import { withTranslation } from 'react-i18next';

class FieldArraySites extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.styleModifier = '';
    this.FIELD_NAME_IN_FORM = props.fieldNameInForm || 'sites';
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
      entityMandatory: 'Site',
    };
    this.MODEL_TO_SEARCH = 'sites';
    this.INTERNAL_FILTER = props.internalFilter || null;
  }
  getAllValues(filterObj) {
    const allValues = this.props.fields.getAll() || [];

    if (!!filterObj) {
      const [, textFilterValue] = Object.entries(filterObj)[0];
      return allValues.filter((v) =>
        this.getAllFieldsInString(v)
          .toLowerCase()
          .includes(textFilterValue.toLowerCase()),
      );
    }
    return allValues;
  }

  getFilterTable() {
    const { internalTextFilter } = this.state;
    return { name: internalTextFilter?.value };
  }
}

export default withTranslation()(FieldArraySites);
