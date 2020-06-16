import { createPaginationContainer } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardActivityLogCommunityRowComponent from './DashBoardActivityLogCommunityRow';
import { DashBoardActivityLogList } from '../DashBoardActivityLogList';

class DashBoardActivityLogCommunityList extends DashBoardActivityLogList {
  constructor(props) {
    super(props);
    this.RowComponent = DashBoardActivityLogCommunityRowComponent;
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(DashBoardActivityLogCommunityList)),
  {
    getContextActivity: graphql`
      fragment DashBoardActivityLogCommunityList_getContextActivity on Query
        @argumentDefinitions(
          filter: { type: "ActionFilter!" }
          orderBy: { type: ActionOrderBy }
          first: { type: "Int" }
        ) {
        getContextActivity(filter: $filter, orderBy: $orderBy, first: $first)
          @connection(key: "DashBoardActivityLogCommunityList_getContextActivity", filters: []) {
          edges {
            node {
              ...DashBoardActivityLogCommunityRow_log
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
