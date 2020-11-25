import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import HostList from '../../containers/host/HostList';
import HostDetailsContainer from '../../containers/host/HostDetails';
import CreateHost from './CreateHostRoute/CreateHostRoute';
// Constants

class SearchHost extends _SearchEntityParentClass {
  LIST_CONTAINER = HostList;
  CREATE_COMPONENT = CreateHost;
  DETAIL_CONTAINER = HostDetailsContainer;

  MODEL_NAME = 'host';
  MODEL_LIST_NAME = 'hosts';

  PATH_ENTITY = `/network/hosts`;
  PATH_ENTITY_ID = 'hostId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Description', value: 'description', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchHostAllQuery($count: Int!, $filter: HostFilter, $orderBy: HostOrderBy) {
      ...HostList_hosts @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchHost));
