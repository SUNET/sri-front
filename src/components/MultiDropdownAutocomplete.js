import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

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

const SearchInput = ({ onFocus, onChange }) => {
  const onChangeDebounce = debounce((text) => {
    onChange(text);
  }, MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE);
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onFocus={onFocus}
        onChange={(event) => {
          onChangeDebounce(event.target.value);
        }}
      />
      <span className="input-icon"></span>
    </>
  );
};

const ClassFilters = ({ parentClassName, filtersObject, onChangeSelectedFilter }) => {
  const [isSubTypesVisible, setIsSubTypesVisible] = useState(false);
  return (
    <div className={`${parentClassName}__options`} onChange={onChangeSelectedFilter}>
      <div
        className={`${parentClassName}__options__radio-option ${parentClassName}__options__radio-option--main`}
      >
        <input
          type="radio"
          id={filtersObject.main.fieldId}
          name="filter-by-entity"
          value={filtersObject.main.fieldId}
          defaultChecked={true}
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
      {isSubTypesVisible &&
        filtersObject.subTypes.map((filter, index) => {
          return (
            <div key={`filter-${index}`} className={`${parentClassName}__options__radio-option`}>
              <input type="radio" id={filter.fieldId} name="filter-by-entity" value={filter.fieldId} />
              <label htmlFor={filter.fieldId}>{filter.name}</label>
            </div>
          );
        })}
    </div>
  );
};

const AutocompleteResults = ({ parentClassName, data }) => {
  const haveResults = Boolean(data && data.length);
  return (
    <>
      {haveResults &&
        data.map((element, index) => {
          return (
            <div key={`result-${index}`} className={`${parentClassName}__result-element`}>
              {element.name}
            </div>
          );
        })}
      {!haveResults && <div>ZERO RESULTS</div>}
    </>
  );
};

const MultiDropdownAutocomplete = ({ locationsData, entityFilters, isActive, changePreFilter, changeText }) => {
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
        />
      </div>
      {isComponentVisible && (
        <div className={`${MAIN_CN}${PANEL_POPUP}`}>
          {
            <div className={`${MAIN_CN}${PANEL_POPUP}${CLASS_FILTERS_CN}`}>
              <ClassFilters
                parentClassName={`${MAIN_CN}${PANEL_POPUP}${CLASS_FILTERS_CN}`}
                filtersObject={entityFilters}
                onChangeSelectedFilter={(event) => {
                  changePreFilter(event.target.value);
                }}
              />
            </div>
          }
          {
            <div className={`${MAIN_CN}${PANEL_POPUP}${RESULTS_CN}`}>
              <AutocompleteResults parentClassName={`${MAIN_CN}${PANEL_POPUP}${RESULTS_CN}`} data={formattedData} />
            </div>
          }
        </div>
      )}
    </div>
  );
};

MultiDropdownAutocomplete.propsTypes = {};

export default React.memo(MultiDropdownAutocomplete);
