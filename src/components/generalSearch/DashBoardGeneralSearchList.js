import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import { Table } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import DashBoardGeneralSearchRow from './DashBoardGeneralSearchRow';

import _DashBoardListParentClass from '../common/_DashBoardListParentClass';

class DashBoardGeneralSearchList extends _DashBoardListParentClass {
  constructor(props) {
    super(props);
    this.MAIN_PROP_NAME = 'search_generalsearch';
    this.SINGLE_ELEMENT_NAME = 'ninode';
    this.RowComponent = DashBoardGeneralSearchRow;
    this.HEADER_DATA = {
      title: 'search-filter.results',
      sortKey: null,
    };
    this.FOOTER_DATA = null;
    this.DETAILS_LINK = '';
  }

  renderList() {
    const { t, filterText } = this.props;
    const dataEntity = this.props[this.MAIN_PROP_NAME];
    return (
      <Table responsive={isMobile} className="model-list" borderless>
        <thead>
          <tr>
            <th>{t('general-forms/type')}</th>
            <th>{t('general-forms/name')}</th>
            <th>{t('search-filter.match')}</th>
          </tr>
        </thead>
        <tbody>
          {dataEntity &&
            dataEntity[this.MAIN_PROP_NAME].edges &&
            dataEntity[this.MAIN_PROP_NAME].edges.map(({ node }) => {
              const props = {
                [this.SINGLE_ELEMENT_NAME]: node,
                key: node.__id,
                filterText,
                onClick: (urlTemplate, id) => this.props.onClickDetails(urlTemplate.replace('__dataId__', id)),
              };
              return <this.RowComponent {...props} />;
            })}
        </tbody>
      </Table>
    );
  }
}

export default createFragmentContainer(withTranslation()(DashBoardGeneralSearchList), {
  search_generalsearch: graphql`
    fragment DashBoardGeneralSearchList_search_generalsearch on Query {
      search_generalsearch(filter: $filter) {
        edges {
          node {
            ...DashBoardGeneralSearchRow_ninode
          }
        }
      }
    }
  `,
});
