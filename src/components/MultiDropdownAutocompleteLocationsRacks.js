import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import environment from '../createRelayEnvironment';
import { fetchQuery } from 'relay-runtime';

import MultiDropdownAutocomplete from './MultiDropdownAutocomplete';

const MultiDropdownAutocompleteLocationsRacksQuery = graphql`
  query MultiDropdownAutocompleteLocationsRacksQuery($count: Int!, $filter: RackFilter) {
    racks(first: $count, filter: $filter) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

async function getLocationsRacks(preFilterEntity, textFilter = '') {
  const data = await fetchQuery(environment, MultiDropdownAutocompleteLocationsRacksQuery, {
    count: 3,
    filter: { OR: [{ name_contains: textFilter }] },
  });
  return data;
}

const MultiDropdownAutocompleteLocations = ({ onSelectOption, optionsPreSelected }) => {
  const [preFilter, changePreFilter] = useState('racks');
  const [textFilter, changeTextFilter] = useState('');
  const [filteredData, changeFilteredData] = useState({ data: {} });
  return (
    <div>
      <MultiDropdownAutocomplete
        locationsData={filteredData}
        optionsPreSelected={optionsPreSelected}
        isActive={async () => {
          if (!filteredData.data[preFilter]) {
            const data = await getLocationsRacks(preFilter, textFilter);
            changeFilteredData({ data });
          }
        }}
        changePreFilter={async (newPreFilter) => {
          const data = await getLocationsRacks(newPreFilter, textFilter);
          changePreFilter(newPreFilter);
          changeFilteredData({ data });
        }}
        changeText={async (text) => {
          const data = await getLocationsRacks(preFilter, text);
          changeTextFilter(text);
          changeFilteredData({ data });
        }}
        onSelectOption={onSelectOption}
      />
    </div>
  );
};

export default MultiDropdownAutocompleteLocations;
