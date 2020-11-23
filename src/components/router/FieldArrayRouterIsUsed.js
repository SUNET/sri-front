import React from 'react';
import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';
import PillsFilter from '../PillsFilter';

class FieldArrayRouterIsUsed extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.FIELD_NAME_IN_FORM = 'resourcedUsed';
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
          fieldKey: '__typename',
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
        },
      ],
      modal: null,
    };
    this.PRE_FILTER_SELECT = {
      label: null,
      type: 'routerDependentsTypes',
      name: null,
      entityMandatory: null,
    };
    this.MODEL_TO_SEARCH = null;
  }

  renderPreFilterDropDown() {
    const { t } = this.props;
    return (
      <PillsFilter
        // t={t}
        // emptyLabel={t(this.PRE_FILTER_SELECT.label)}
        // className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
        // type={this.PRE_FILTER_SELECT.type}
        // name={this.PRE_FILTER_SELECT.name}
        // model={this.PRE_FILTER_SELECT.model}
        // onChange={(optionSelected) => {
        //   console.log('optionSelected: ', optionSelected);
        //   this.setState({
        //     currentPreFilterModel: optionSelected ? optionSelected.value : null,
        //     preFilterMethod: optionSelected ? optionSelected.getDetailsMethodName : null,
        //   });
        // }}
        onChange={(currentFilter) => {
          console.log(currentFilter.type_name);
          this.setState({
            test: { __typename: currentFilter.type_name },
          });
        }}
      />
    );
  }

  getFilterTable() {
    console.log(this.state.test);
    if (this.state.test) {
    }
    return this.state.test;
  }
}

export default withTranslation()(FieldArrayRouterIsUsed);
