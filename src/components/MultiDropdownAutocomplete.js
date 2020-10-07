import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import '../style/MultiDropdownAutocomplete.scss';

const MAIN_CN = 'multi-dropdown-autocomplete';
const SEARCH_CN = '__search-input';
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
  // Object.keys(resultData.data).forEach((propName) => {
  //   formattedData[propName] = resultData.data[propName].edges.map((edg) => edg.node);
  // });
  Object.keys(resultData.data).forEach((propName) => {
    formattedData = [...formattedData, ...resultData.data[propName].edges.map((edg) => edg.node)];
  });
  return formattedData;
}

function renderSearchInput(setShowResults) {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onFocus={(event) => {
          setShowResults(true);
        }}
      />
      <span className="input-icon"></span>
    </>
  );
}

const ClassFilters = ({ filtersObject }) => {
  const [isSubTypesVisible, setIsSubTypesVisible] = useState(false);
  return (
    <div
      className={`${MAIN_CN}${CLASS_FILTERS_CN}__options`}
      onChange={(event) => {
        console.log(event.target.value);
      }}
    >
      <div
        className={`${MAIN_CN}${CLASS_FILTERS_CN}__options__radio-option ${MAIN_CN}${CLASS_FILTERS_CN}__options__radio-option--main`}
      >
        <input
          type="radio"
          id={filtersObject.main.fieldId}
          name="filter-by-entity"
          value={filtersObject.main.fieldId}
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
            <div key={`filter-${index}`} className={`${MAIN_CN}${CLASS_FILTERS_CN}__options__radio-option`}>
              <input type="radio" id={filter.fieldId} name="filter-by-entity" value={filter.fieldId} />
              <label htmlFor={filter.fieldId}>{filter.name}</label>
            </div>
          );
        })}
    </div>
  );
};

function renderResults(formattedData) {
  return (
    <>
      {formattedData.map((element, index) => {
        return (
          <div key={`result-${index}`} className={`${MAIN_CN}${RESULTS_CN}__result-element`}>
            {element.name}
          </div>
        );
      })}
    </>
  );
}

const MultiDropdownAutocomplete = ({ locationsData }) => {
  const formattedData = formatData(locationsData);
  console.log('formattedData: ', formattedData);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const FILTERS = {
    main: {
      name: 'Show All',
      fieldId: 'showall',
      filterProperty: {},
    },
    subTypes: [
      {
        name: 'Show Racks',
        fieldId: 'showracks',
        filterProperty: {},
      },
      {
        name: 'Show Rooms',
        fieldId: 'showrooms',
        filterProperty: {},
      },
      {
        name: 'Show Sites',
        fieldId: 'showsites',
        filterProperty: {},
      },
    ],
  };
  return (
    <div className={`${MAIN_CN}`} ref={ref}>
      <div className={`${MAIN_CN}${SEARCH_CN}`}>{renderSearchInput(setIsComponentVisible)}</div>
      {isComponentVisible && (
        <div className={`${MAIN_CN}${CLASS_FILTERS_CN}`}>
          <ClassFilters filtersObject={FILTERS} />
        </div>
      )}
      {isComponentVisible && <div className={`${MAIN_CN}${RESULTS_CN}`}>{renderResults(formattedData)}</div>}
    </div>
  );
};

MultiDropdownAutocomplete.propsTypes = {};

export default MultiDropdownAutocomplete;
