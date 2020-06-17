import React from 'react';
import { createPaginationContainer } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';

import DashBoardActivityLogRowComponent from './DashBoardActivityLogRow';

import _DashBoardListParentClass from '../common/_DashBoardListParentClass';

import { ACTIVITY_LOGS_PARAMS } from '../../utils/constants';

export class DashBoardActivityLogList extends _DashBoardListParentClass {
  constructor(props) {
    super(props);
    this.MAIN_PROP_NAME = 'getContextActivity';
    this.SINGLE_ELEMENT_NAME = 'log';
    this.RowComponent = DashBoardActivityLogRowComponent;
    const paramsByLogType = ACTIVITY_LOGS_PARAMS[props.typeActivityLog];
    this.HEADER_DATA = {
      title: paramsByLogType.header.title,
      sortKey: {
        defaultUp: 'dashboard.order.recent_last',
        down: 'dashboard.order.recent_first',
      },
    };
    this.FOOTER_DATA = { label: paramsByLogType.footer.label, link: paramsByLogType.footer.link };
    this.DETAILS_LINK = null;
  }

  renderList() {
    const dataEntity = this.props[this.MAIN_PROP_NAME];
    return (
      <div>
        {dataEntity &&
          dataEntity[this.MAIN_PROP_NAME].edges &&
          dataEntity[this.MAIN_PROP_NAME].edges.map(({ node }) => {
            const props = {
              [this.SINGLE_ELEMENT_NAME]: node,
              key: node.__id,
            };
            return <this.RowComponent {...props} />;
          })}
      </div>
    );
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(DashBoardActivityLogList)),
  {
    getContextActivity: graphql`
      fragment DashBoardActivityLogList_getContextActivity on Query
        @argumentDefinitions(
          filter: { type: "ActionFilter!" }
          orderBy: { type: ActionOrderBy }
          first: { type: "Int" }
        ) {
        getContextActivity(filter: $filter, orderBy: $orderBy, first: $first)
          @connection(key: "DashBoardActivityLogList_getContextActivity", filters: []) {
          edges {
            node {
              ...DashBoardActivityLogRow_log
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    `,
  },
  {},
);
