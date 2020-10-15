import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { debounce } from '../utils';

import '../style/MultiDropdownAutocomplete.scss';
import { MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE } from '../utils/constants';

const MAIN_CN = 'multi-dropdown-autocomplete';
const SEARCH_CN = '__search-input';
const PANEL_POPUP = '__panel-popup';
const CLASS_FILTERS_CN = '__class-filters';
const RESULTS_CN = '__results';

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

function formatData(resultData) {
  let formattedData = [];
  Object.keys(resultData.data).forEach((propName) => {
    formattedData = [...formattedData, ...resultData.data[propName].edges.map((edg) => edg.node)];
  });
  return formattedData;
}

const SearchInput = ({ optionsPreSelected, onFocus, onChange }) => {
  const [textValue, setTextValue] = useState('');
  useEffect(() => {
    const selectedName = optionsPreSelected && optionsPreSelected.map((el) => el.name).join(', ');
    setTextValue(selectedName);
  }, [optionsPreSelected]);

  const onChangeDebounce = debounce((text) => {
    onChange(text);
  }, MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE);
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onFocus={onFocus}
        value={textValue}
        onChange={(event) => {
          onChangeDebounce(event.target.value);
          setTextValue(event.target.value);
        }}
      />
      <span className="input-icon"></span>
    </>
  );
};

const ClassFiltersOptions = ({ parentClassName, filtersObject, preFilterChecked, onChangeSelectedFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState(preFilterChecked);
  return (
    <div className={`${parentClassName}__options-list`}>
      {filtersObject.main && (
        <div
          className={`${parentClassName}__options-list__filter-cta ${
            selectedFilter === filtersObject.main.fieldId ? '--selected' : ''
          }`}
          onClick={() => {
            setSelectedFilter(filtersObject.main.fieldId);
            onChangeSelectedFilter(filtersObject.main.fieldId);
          }}
        >
          {filtersObject.main.name}
        </div>
      )}
      {filtersObject.subTypes.map((filter, index) => (
        <div
          key={index}
          className={`${parentClassName}__options-list__filter-cta ${
            selectedFilter === filter.fieldId ? '--selected' : ''
          }`}
          onClick={() => {
            setSelectedFilter(filter.fieldId);
            onChangeSelectedFilter(filter.fieldId);
          }}
        >
          {filter.name}
        </div>
      ))}
    </div>
  );
};

const ClassFiltersRadioButtons = ({ parentClassName, filtersObject, onChangeSelectedFilter }) => {
  const visibleSubTypes = !filtersObject.main || filtersObject.subTypes.some((st) => st.checked);
  const [isSubTypesVisible, setIsSubTypesVisible] = useState(visibleSubTypes);
  return (
    <div className={`${parentClassName}__options`} onChange={onChangeSelectedFilter}>
      {filtersObject.main && (
        <div className={`${parentClassName}__options__radio-option ${parentClassName}__options__radio-option--main`}>
          <input
            type="radio"
            id={filtersObject.main.fieldId}
            name="filter-by-entity"
            value={filtersObject.main.fieldId}
            defaultChecked={filtersObject.main.checked}
          />
          <label htmlFor={filtersObject.main.fieldId}>{filtersObject.main.name}</label>
          <span
            className="arrow-cta"
            onClick={() => {
              setIsSubTypesVisible(!isSubTypesVisible);
            }}
          >
            {isSubTypesVisible ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
          </span>
        </div>
      )}
      {isSubTypesVisible &&
        filtersObject.subTypes.map((filter, index) => {
          return (
            <div key={`filter-${index}`} className={`${parentClassName}__options__radio-option`}>
              <input
                type="radio"
                id={filter.fieldId}
                name="filter-by-entity"
                value={filter.fieldId}
                defaultChecked={filter.checked}
              />
              <label htmlFor={filter.fieldId}>{filter.name}</label>
            </div>
          );
        })}
    </div>
  );
};

const AutocompleteResults = ({ parentClassName, data, isMultiSelect, onSelectOption, optionsPreSelected }) => {
  const haveResults = Boolean(data && data.length);
  const [selectedResults, setSelectedResults] = useState(optionsPreSelected || []);

  const onClick = (selectedElement) => {
    const wasAlreadySelected = selectedResults.some((el) => el.id === selectedElement.id);
    let newAllSelectedResults = [];
    if (isMultiSelect) {
      newAllSelectedResults = wasAlreadySelected
        ? [...selectedResults.filter((sr) => sr.id !== selectedElement.id)]
        : [...selectedResults, selectedElement];
    } else {
      newAllSelectedResults = wasAlreadySelected ? [] : [selectedElement];
    }

    setSelectedResults(newAllSelectedResults);
    onSelectOption(newAllSelectedResults);
  };

  const dataToShow = [...data, ...selectedResults].reduce((acc, curr) => {
    if (!acc.some((x) => x.id === curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return (
    <>
      {haveResults &&
        dataToShow.map((element, index) => {
          const isSelected = selectedResults.some((res) => res.id === element.id);
          return (
            <div
              key={`result-${index}`}
              className={`${parentClassName}__result-element ${isSelected ? '--selected' : ''}`}
              onClick={() => {
                onClick(element);
              }}
            >
              <span className={`${parentClassName}__result-element__icon`}>
                {isSelected ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
              </span>
              <span className={`${parentClassName}__result-element__name`}>{element.name}</span>
            </div>
          );
        })}
      {!haveResults && <div className={`${parentClassName}__zero-result`}>No Results</div>}
    </>
  );
};

const MultiDropdownAutocomplete = ({
  locationsData,
  entityFilters,
  isActive,
  preFilterChecked,
  changePreFilter,
  changeText,
  isMultiSelect,
  onSelectOption,
  optionsPreSelected,
}) => {
  const formattedData = formatData(locationsData);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <div className={`${MAIN_CN}`} ref={ref}>
      <div className={`${MAIN_CN}${SEARCH_CN}`}>
        <SearchInput
          onFocus={() => {
            setIsComponentVisible(true);
            isActive();
          }}
          onChange={changeText}
          optionsPreSelected={optionsPreSelected}
        />
      </div>
      {isComponentVisible && (
        <div className={`${MAIN_CN}${PANEL_POPUP}`}>
          {entityFilters && (
            <div className={`${MAIN_CN}${PANEL_POPUP}${CLASS_FILTERS_CN}`}>
              <ClassFiltersOptions
                parentClassName={`${MAIN_CN}${PANEL_POPUP}${CLASS_FILTERS_CN}`}
                filtersObject={entityFilters}
                preFilterChecked={preFilterChecked}
                onChangeSelectedFilter={(value) => {
                  changePreFilter(value);
                }}
              />
            </div>
          )}

          <div className={`${MAIN_CN}${PANEL_POPUP}${RESULTS_CN}`}>
            <AutocompleteResults
              parentClassName={`${MAIN_CN}${PANEL_POPUP}${RESULTS_CN}`}
              data={formattedData}
              isMultiSelect={isMultiSelect}
              onSelectOption={(newSelection) => {
                onSelectOption(newSelection);
                if (!isMultiSelect) {
                  setIsComponentVisible(false);
                }
              }}
              optionsPreSelected={optionsPreSelected}
            />
          </div>
        </div>
      )}
    </div>
  );
};

MultiDropdownAutocomplete.propsTypes = {};

export default React.memo(MultiDropdownAutocomplete);
