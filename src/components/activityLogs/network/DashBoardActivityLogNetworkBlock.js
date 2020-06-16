import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardActivityLogBlock from '../DashBoardActivityLogBlock';
import DashBoardActivityLogNetworkList from './DashBoardActivityLogNetworkList';
import { ACTIVITY_LOG_NETWORK } from '../../../utils/constants';

const DashBoardActivityLogNetworkBlockQuery = graphql`
  query DashBoardActivityLogNetworkBlockQuery($filter: ActionFilter!, $orderBy: ActionOrderBy, $first: Int) {
    ...DashBoardActivityLogNetworkList_getContextActivity @arguments(filter: $filter, orderBy: $orderBy, first: $first)
  }
`;

class DashBoardActivityLogNetworkBlock extends DashBoardActivityLogBlock {
  constructor(props) {
    super(props);
    this.typeActivityLog = ACTIVITY_LOG_NETWORK;
    this.QUERY = DashBoardActivityLogNetworkBlockQuery;
    this.DASH_BOARD_LIST_COMPONENT = DashBoardActivityLogNetworkList;
  }
}

export default withTranslation()(DashBoardActivityLogNetworkBlock);
