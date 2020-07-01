import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardActivityLogBlock from '../DashBoardActivityLogBlock';
import DashBoardActivityLogCommunityList from './DashBoardActivityLogCommunityList';
import { ACTIVITY_LOG_COMMUNITY } from '../../../utils/constants';

const DashBoardActivityLogCommunityBlockQuery = graphql`
  query DashBoardActivityLogCommunityBlockQuery($filter: ActionFilter!, $orderBy: ActionOrderBy, $first: Int) {
    ...DashBoardActivityLogCommunityList_getContextActivity
      @arguments(filter: $filter, orderBy: $orderBy, first: $first)
  }
`;

class DashBoardActivityLogCommunityBlock extends DashBoardActivityLogBlock {
  constructor(props) {
    super(props);
    this.typeActivityLog = ACTIVITY_LOG_COMMUNITY;
    this.QUERY = DashBoardActivityLogCommunityBlockQuery;
    this.DASH_BOARD_LIST_COMPONENT = DashBoardActivityLogCommunityList;
  }
}

export default withTranslation()(DashBoardActivityLogCommunityBlock);
