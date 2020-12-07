import React, { useState } from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../createRelayEnvironment';

import '../style/Pills.scss';

const PillsFilterRouterDependentsTypesQuery = graphql`
  query PillsFilterRouterDependentsTypesQuery {
    getRouterDependentsTypes {
      type_name
      connection_name
      byid_name
      all_name
      can_create
    }
  }
`;

const QUERIES_BY_TYPE = {
  routerDependentsTypes: { query: PillsFilterRouterDependentsTypesQuery, bodyName: 'getRouterDependentsTypes' },
  default: { query: PillsFilterRouterDependentsTypesQuery, bodyName: 'getRouterDependentsTypes' },
};

function getQueryByModel(type) {
  return QUERIES_BY_TYPE[type] ? QUERIES_BY_TYPE[type] : QUERIES_BY_TYPE['default'];
}

export const Pills = ({ optionsList, onChange }) => {
  const [selectedPill, setSelectedPill] = useState(optionsList[0]);
  return (
    <div className="pills">
      {optionsList.map((opt, index) => {
        return (
          <div
            className={`pills__option ${selectedPill.type_name === opt.type_name ? '--selected' : ''}`}
            key={`pill-${index}`}
            onClick={() => {
              setSelectedPill(opt);
              onChange(opt);
            }}
          >
            {opt.type_name}
          </div>
        );
      })}
    </div>
  );
};

class PillsFilter extends React.PureComponent {
  render() {
    const { t, type, onChange } = this.props;
    let dataQuery = getQueryByModel(type);
    return (
      <QueryRenderer
        environment={environment}
        query={dataQuery.query}
        render={({ error, props }) => {
          if (error) {
            return <div>{t('general/error')}</div>;
          } else if (props) {
            const optionsListWithAllOption = [
              ...[
                {
                  all_name: 'all',
                  byid_name: null,
                  can_create: false,
                  connection_name: null,
                  type_name: 'All',
                },
              ],
              ...props[dataQuery.bodyName],
            ];
            return <Pills optionsList={optionsListWithAllOption} onChange={onChange} />;
          }
        }}
      />
    );
  }
}
export default PillsFilter;
