import { createPaginationContainer } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardActivityLogNetworkRowComponent from './DashBoardActivityLogNetworkRow';
import { DashBoardActivityLogList } from '../DashBoardActivityLogList';

class DashBoardActivityLogNetworkList extends DashBoardActivityLogList {
  constructor(props) {
    super(props);
    this.RowComponent = DashBoardActivityLogNetworkRowComponent;
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(DashBoardActivityLogNetworkList)),
  {
    getContextActivity: graphql`
      fragment DashBoardActivityLogNetworkList_getContextActivity on Query
        @argumentDefinitions(
          filter: { type: "ActionFilter!" }
          orderBy: { type: ActionOrderBy }
          first: { type: "Int" }
        ) {
        getContextActivity(filter: $filter, orderBy: $orderBy, first: $first)
          @connection(key: "DashBoardActivityLogNetworkList_getContextActivity", filters: []) {
          edges {
            node {
              ...DashBoardActivityLogNetworkRow_log
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
