import React from 'react';
import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import { withTranslation } from 'react-i18next';
import PillsFilter from '../PillsFilter';

import DropdownSearch from '../DropdownSearch';
import { SAVED } from '../../utils/constants';

class FieldArrayDependenciesMultiFields extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.state = {
      currentPreFilterModel: 'All',
      currentInternalFilter: {
        type_name: 'All',
      },
      internalTextFilter: {
        value: '',
        field: 'name',
      },
    };
    this.FIELD_NAME_IN_FORM = props.fieldNameInForm || 'dependents';
    this.ENTITIES_WITHOUT_NEW_MODAL = ['Service'];
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
    this.PRE_FILTER_SELECT = props.preFilterSelect || {
      pills: true,
      type: 'routerDependentsTypes',
      label: 'general-forms/select-physical-type',
      model: 'routerDependentsTypes',
      name: 'physical_types_preFilter',
    };
    this.MODEL_TO_SEARCH = null;
    this.FIELDS_BY_PREFILTER = props.fieldsByPreFilter || {
      OpticalLink: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
        {
          text: 'main-entity-name/ports',
          fieldKey: 'ports.name',
          withLink: true,
          listElements: true,
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
          showAllText: true,
        },
      ],
      OpticalMultiplexSection: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
          showAllText: true,
        },
      ],
      OpticalPath: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
          showAllText: true,
        },
      ],
      Service: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
        {
          text: 'general-forms/service-type',
          fieldKey: 'service_type.name',
        },
        {
          text: 'general-forms/description',
          fieldKey: 'description',
          showAllText: true,
        },
      ],
    };
    this.INTERNAL_FILTER = {
      pills: {
        modelToQuery: null || 'operational_state',
        manualList: [
          {
            presentName: 'Filter',
            value: 'test-value',
            fieldsAffected: ['operational_state'],
          },
        ],
      },
      text: {
        fieldsAffected: ['name'],
      },
    };
  }

  renderPreFilterPillsDropDown() {
    return (
      <PillsFilter
        type={this.PRE_FILTER_SELECT.model}
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
        model={'physicallogicals'}
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
    return this.state.currentPreFilterModel === 'All';
  }

  getFilterTable() {
    const { currentPreFilterModel, currentInternalFilter, internalTextFilter } = this.state;
    let operationalValue = currentInternalFilter?.type_name;
    let filterByType = currentPreFilterModel;
    if (currentPreFilterModel === 'All') filterByType = null;
    if (operationalValue === 'All') operationalValue = null;

    return { __typename: filterByType, operational_state: operationalValue, name: internalTextFilter?.value, description: internalTextFilter?.value };
  }

  getAllValues(filterObj) {
    const allValues = this.props.fields.getAll() || [];
    if (!!filterObj) {
      const [mainFilterKey, mainFilterValue] = Object.entries(filterObj)[0];
      const [opStateFilter, opStateValue] = Object.entries(filterObj)[1];
      const [textFilterKey, textFilterValue] = Object.entries(filterObj)[2];
      const [descFilterKey, descFilterValue] = Object.entries(filterObj)[3];

      const valuesFilteredByType = allValues.filter((v) => {
        const value = v[mainFilterKey];
        return !!!mainFilterValue || value === mainFilterValue;
      });
      const valuesFilteredByOpState = valuesFilteredByType.filter((v) => {
        const value = v[opStateFilter]?.value || v[opStateFilter];
        return !!!opStateValue || value === opStateValue;
      });
      const valuesFilteredByText = valuesFilteredByOpState.filter((v) => {
        return (
          v[textFilterKey].toLowerCase().includes(textFilterValue.toLowerCase()) ||
          v[descFilterKey].toLowerCase().includes(descFilterValue.toLowerCase())
        );
      });
      return valuesFilteredByText;
    }
    return allValues;
  }

  renderFooter() {
    const { editable } = this.props;
    return (
      <div className="contact-in-organization__footer">
        {
          <>
            {this.PRE_FILTER_SELECT.pills && this.renderPreFilterPillsDropDown()}
            {!this.PRE_FILTER_SELECT.pills && this.PRE_FILTER_SELECT.type && this.renderPreFilterDropDown()}
            {editable &&
              (this.PRE_FILTER_SELECT.entityMandatory || this.PRE_FILTER_SELECT.model) &&
              this.renderDropDownSearch()}
            {this.renderAddNewCTA()}
          </>
        }
      </div>
    );
  }
}

export default withTranslation()(FieldArrayDependenciesMultiFields);
