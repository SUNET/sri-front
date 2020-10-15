import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import environment from '../createRelayEnvironment';
import { fetchQuery } from 'relay-runtime';

import MultiDropdownAutocomplete from './MultiDropdownAutocomplete';

const PRE_FILTERS = {
  // main: {
  //   name: 'Show All',
  //   fieldId: 'showall',
  //   filterProperty: {},
  // },
  subTypes: [
    {
      name: 'Customers',
      fieldId: 'customer',
      filterProperty: {},
    },
    {
      name: 'Providers',
      fieldId: 'provider',
      checked: true,
      filterProperty: {},
    },
    {
      name: 'End Users',
      fieldId: 'endUser',
      filterProperty: {},
    },
    {
      name: 'Host Users',
      fieldId: 'hostUser',
      filterProperty: {},
    },
  ],
};

const MultiDropdownAutocompleteOwnersCustomerQuery = graphql`
  query MultiDropdownAutocompleteOwnersCustomerQuery($count: Int!, $filter: CustomerFilter) {
    customers(first: $count, filter: $filter) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const MultiDropdownAutocompleteOwnersProviderQuery = graphql`
  query MultiDropdownAutocompleteOwnersProviderQuery($count: Int!, $filter: ProviderFilter) {
    providers(first: $count, filter: $filter) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const MultiDropdownAutocompleteOwnersEndUserQuery = graphql`
  query MultiDropdownAutocompleteOwnersEndUserQuery($count: Int!, $filter: EndUserFilter) {
    endUsers(first: $count, filter: $filter) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const MultiDropdownAutocompleteOwnersHostUserQuery = graphql`
  query MultiDropdownAutocompleteOwnersHostUserQuery($count: Int!, $filter: HostUserFilter) {
    hostUsers(first: $count, filter: $filter) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

async function getOwners(preFilterEntity, textFilter = '') {
  const queries = {
    customer: MultiDropdownAutocompleteOwnersCustomerQuery,
    provider: MultiDropdownAutocompleteOwnersProviderQuery,
    endUser: MultiDropdownAutocompleteOwnersEndUserQuery,
    hostUser: MultiDropdownAutocompleteOwnersHostUserQuery,
  };
  const data = await fetchQuery(environment, queries[preFilterEntity], {
    count: 3,
    filter: { OR: [{ name_contains: textFilter }] },
  });
  return data;
}

const MultiDropdownAutocompleteOwners = ({ onSelectOption, optionsPreSelected }) => {
  const [preFilter, changePreFilter] = useState('customer');
  const [textFilter, changeTextFilter] = useState('');
  const [filteredData, changeFilteredData] = useState({ data: {} });
  return (
    <div>
      <MultiDropdownAutocomplete
        entityFilters={PRE_FILTERS}
        locationsData={filteredData}
        optionsPreSelected={optionsPreSelected}
        isActive={async () => {
          if (!filteredData.data[preFilter]) {
            const data = await getOwners(preFilter, textFilter);
            changeFilteredData({ data });
          }
        }}
        changePreFilter={async (newPreFilter) => {
          const data = await getOwners(newPreFilter, textFilter);
          changePreFilter(newPreFilter);
          changeFilteredData({ data });
        }}
        changeText={async (text) => {
          const data = await getOwners(preFilter, text);
          changeTextFilter(text);
          changeFilteredData({ data });
        }}
        onSelectOption={onSelectOption}
      />
    </div>
  );
};

export default MultiDropdownAutocompleteOwners;
