import React from 'react';
import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';
import { Pills } from '../PillsFilter';

import DropdownSearch from '../DropdownSearch';
import { SAVED } from '../../utils/constants';

class FieldArrayLocationRack extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.state = {
      currentPreFilterModel: 'All',
    };
    this.FIELD_NAME_IN_FORM = 'parent';
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
      type: 'routerDependentsTypes',
      label: 'general-forms/select-physical-type',
      model: 'routerDependentsTypes',
      name: 'physical_types_preFilter',
    };
    this.MODEL_TO_SEARCH = null;
  }

  renderPreFilterDropDown() {
    return (
      <Pills
        optionsList={[
          {
            all_name: 'all',
            byid_name: null,
            can_create: false,
            connection_name: null,
            type_name: 'All',
          },
          {
            all_name: 'all_rooms',
            byid_name: 'getRoomById',
            can_create: true,
            connection_name: 'rooms',
            type_name: 'Room',
          },
          {
            all_name: 'all_sites',
            byid_name: 'getSiteById',
            can_create: true,
            connection_name: 'sites',
            type_name: 'Site',
          },
        ]}
        onChange={(optionSelected) => {
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
        model={'locations'}
        entityTypeFilter={this.state.currentPreFilterModel}
        selection={(selectedElement) => {
          this.props.handleSearchResult(selectedElement, this.state.currentPreFilterModel);
        }}
        placeholder={`${t(`search-filter.search`)} ${this.state.currentPreFilterModel}`}
        skipElements={existingElements}
      />
    );
  }

  isDisabledFilters() {
    return this.props.disabledFilters || this.state.currentPreFilterModel === 'All';
  }

  getFilterTable() {
    const { currentPreFilterModel } = this.state;
    if (currentPreFilterModel === 'All') {
      return null;
    }
    return { __typename: currentPreFilterModel };
  }

  renderFooter() {
    const { editable } = this.props;
    return (
      <div className="contact-in-organization__footer">
        {
          <>
            {this.PRE_FILTER_SELECT.type && this.renderPreFilterDropDown()}
            {editable &&
              (this.PRE_FILTER_SELECT.entityMandatory || this.PRE_FILTER_SELECT.model) &&
              this.renderDropDownSearch()}
            {editable && this.renderAddNewCTA()}
          </>
        }
      </div>
    );
  }
}

export default withTranslation()(FieldArrayLocationRack);
