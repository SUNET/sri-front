import React from 'react';
import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';
import PillsFilter from '../PillsFilter';

import DropdownSearch from '../DropdownSearch';
import { UNLINK, SAVED, REMOVE, CREATE } from '../../utils/constants';

class FieldArrayRouterIsUsed extends _BasicFieldArrayParentClass {
  ENTITIES_WITHOUT_MODAL = ['Service', 'OpticalPath', 'OpticalMultiplexSection', 'OpticalLink'];
  constructor(props) {
    super(props);
    this.state = {
      currentPreFilterModel: 'All',
    };
    this.FIELD_NAME_IN_FORM = 'dependents';
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
          showAllText: true,
        },
      ],
      modal: null,
    };
    this.PRE_FILTER_SELECT = {
      // label: null,
      type: 'routerDependentsTypes',
      // name: null,
      // entityMandatory: null,

      label: 'general-forms/select-physical-type',
      model: 'routerDependentsTypes',
      name: 'physical_types_preFilter',
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
        onChange={(optionSelected) => {
          console.log(optionSelected);
          this.setState({
            currentPreFilterModel: optionSelected ? optionSelected.type_name : null,
            filter: { __typename: optionSelected.type_name },
          });
        }}
      />
    );
  }

  renderDropDownSearch() {
    const { t } = this.props;
    let existingElements = [];
    if (this.getAllValues()) {
      existingElements = this.getAllValues()
        .filter((el) => el.status === SAVED)
        .map((row) => row.id);
    }
    return (
      <DropdownSearch
        disabled={this.isDisabledFilters()}
        model={'logicals'}
        entityTypeFilter={this.state.currentPreFilterModel}
        selection={(selectedElement) => {
          this.props.handleSearchResult(selectedElement, this.state.preFilterMethod);
        }}
        placeholder={`${t(`search-filter.search`)} ${this.state.currentPreFilterModel}`}
        skipElements={existingElements}
      />
    );
  }

  isDisabledFilters() {
    return this.state.currentPreFilterModel === 'All';
  }

  getFilterTable() {
    const { currentPreFilterModel } = this.state;
    if (currentPreFilterModel === 'All') {
      return null;
    }
    return { __typename: currentPreFilterModel };
  }

  renderAddNewCTA() {}

  renderFooter() {
    const { t, editable } = this.props;
    return (
      <div className="contact-in-organization__footer">
        {
          <>
            {this.PRE_FILTER_SELECT.type && this.renderPreFilterDropDown()}
            {editable &&
              (this.PRE_FILTER_SELECT.entityMandatory || this.PRE_FILTER_SELECT.model) &&
              this.renderDropDownSearch()}
          </>
        }
      </div>
    );
  }
}

export default withTranslation()(FieldArrayRouterIsUsed);
