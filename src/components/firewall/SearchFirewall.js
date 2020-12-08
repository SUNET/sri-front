import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import FirewallList from '../../containers/firewall/FirewallList';
import FirewallDetailsContainer from '../../containers/firewall/FirewallDetails';
// Constants

class SearchFirewall extends _SearchEntityParentClass {
  LIST_CONTAINER = FirewallList;
  CREATE_COMPONENT = null;
  DETAIL_CONTAINER = FirewallDetailsContainer;

  MODEL_NAME = 'firewall';
  MODEL_LIST_NAME = 'firewalls';

  PATH_ENTITY = `/network/firewalls`;
  PATH_ENTITY_ID = 'firewallId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Model', value: 'model', filter: 'order', textFilter: true },
    { name: 'OS Version', value: 'os_version', filter: 'order', textFilter: true },
    { name: 'Operational State', value: 'operational_state', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchFirewallAllQuery($count: Int!, $filter: FirewallFilter, $orderBy: FirewallOrderBy) {
      ...FirewallList_firewalls @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchFirewall));
