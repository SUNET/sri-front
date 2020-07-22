import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import SwitchList from '../../containers/switch/SwitchList';
import SwitchDetailsContainer from '../../containers/switch/SwitchDetails';
import CreateSwitchRoute from "./CreateSwitchRoute/CreateSwitchRoute";
// Constants

class SearchSwitch extends _SearchEntityParentClass {
  LIST_CONTAINER = SwitchList;
  CREATE_COMPONENT = CreateSwitchRoute;
  DETAIL_CONTAINER = SwitchDetailsContainer;

  MODEL_NAME = 'switch';
  MODEL_LIST_NAME = 'switchs';

  PATH_ENTITY = `/network/switches`;
  PATH_ENTITY_ID = 'switchId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchSwitchAllQuery(
      $count: Int!
      $filter: SwitchFilter
      $orderBy: SwitchOrderBy
    ) {
      ...SwitchList_switchs @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchSwitch));
