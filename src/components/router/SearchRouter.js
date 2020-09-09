import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import RouterList from '../../containers/router/RouterList';
import RouterDetailsContainer from '../../containers/router/RouterDetails';
// Constants

class SearchRouter extends _SearchEntityParentClass {
  LIST_CONTAINER = RouterList;
  CREATE_COMPONENT = null;
  DETAIL_CONTAINER = RouterDetailsContainer;

  MODEL_NAME = 'router';
  MODEL_LIST_NAME = 'routers';

  PATH_ENTITY = `/network/routers`;
  PATH_ENTITY_ID = 'routerId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchRouterAllQuery(
      $count: Int!
      $filter: RouterFilter
      $orderBy: RouterOrderBy
    ) {
      ...RouterList_routers @arguments(count: $count, filter: $filter, orderBy: $orderBy)
    }
  `;
  constructor(props) {
    super(props);
    if (isMobile) {
      const visible = true;
      props.showHideColumn('name', visible, this.MODEL_NAME);
    }
  }
}

export default withTranslation()(withRouter(SearchRouter));
