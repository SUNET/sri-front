import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import PortList from '../../containers/port/PortList';
import PortDetailsContainer from '../../containers/port/PortDetails';
import CreatePortRoute from './CreatePortRoute/CreatePortRoute';
// Constants

class SearchPort extends _SearchEntityParentClass {
  LIST_CONTAINER = PortList;
  CREATE_COMPONENT = CreatePortRoute;
  DETAIL_CONTAINER = PortDetailsContainer;

  MODEL_NAME = 'port';
  MODEL_LIST_NAME = 'ports';

  PATH_ENTITY = `/network/ports`;
  PATH_ENTITY_ID = 'portId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Port Type', value: 'port_type', textFilter: true },
    { name: 'Description', value: 'description', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchPortAllQuery($count: Int!, $filter: PortFilter, $orderBy: PortOrderBy) {
      ...PortList_ports @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchPort));
