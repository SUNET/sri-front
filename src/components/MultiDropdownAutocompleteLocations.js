import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import environment from '../createRelayEnvironment';
import { fetchQuery } from 'relay-runtime';

import MultiDropdownAutocomplete from './MultiDropdownAutocomplete';

const PRE_FILTERS = {
  main: {
    checked: true,
    name: 'All',
    fieldId: 'showall',
    filterProperty: {},
  },
  subTypes: [
    {
      name: 'Racks',
      fieldId: 'Rack',
      filterProperty: {},
    },
    {
      name: 'Rooms',
      fieldId: 'Room',
      filterProperty: {},
    },
    {
      name: 'Sites',
      fieldId: 'Site',
      filterProperty: {},
    },
  ],
};

const MultiDropdownAutocompleteLocationsQuery = graphql`
  query MultiDropdownAutocompleteLocationsQuery($filter: MetatypeFilter, $count: Int!) {
    locations(filter: $filter, first: $count) {
      __typename
      edges {
        node {
          __typename
          id
          name
        }
      }
    }
  }
`;

async function getLocations(preFilterEntity, textFilter = '') {
  let count = 3;
  const filter = {
    name_contains: textFilter,
    type_in: [preFilterEntity],
  };

  if (preFilterEntity === PRE_FILTERS.main.fieldId) {
    filter.type_in = PRE_FILTERS.subTypes.map((st) => st.fieldId);
    count = 6;
  }

  const data = await fetchQuery(environment, MultiDropdownAutocompleteLocationsQuery, {
    count,
    filter,
  });

  return data;
}

const MultiDropdownAutocompleteLocations = ({ onSelectOption, optionsPreSelected }) => {
  const preFilterChecked = PRE_FILTERS.main.checked
    ? PRE_FILTERS.main.fieldId
    : PRE_FILTERS.subTypes.find((st) => st.checked).fieldId;
  const [preFilter, changePreFilter] = useState(preFilterChecked);
  const [textFilter, changeTextFilter] = useState('');
  const [filteredData, changeFilteredData] = useState({ data: {} });
  return (
    <div>
      <MultiDropdownAutocomplete
        entityFilters={PRE_FILTERS}
        locationsData={filteredData}
        isMultiSelect={true}
        optionsPreSelected={optionsPreSelected}
        preFilterChecked={preFilter}
        isActive={async () => {
          if (!filteredData.data[preFilter]) {
            const data = await getLocations(preFilter, textFilter);
            changeFilteredData({ data });
          }
        }}
        changePreFilter={async (newPreFilter) => {
          const data = await getLocations(newPreFilter, textFilter);
          changePreFilter(newPreFilter);
          changeFilteredData({ data });
        }}
        changeText={async (text) => {
          const data = await getLocations(preFilter, text);
          changeTextFilter(text);
          changeFilteredData({ data });
        }}
        onSelectOption={onSelectOption}
      />
    </div>
  );
};

export default MultiDropdownAutocompleteLocations;
