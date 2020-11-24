import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import RackList from '../../containers/rack/RackList';
import RackDetailsContainer from '../../containers/rack/RackDetails';
import CreateRack from './CreateRack';
// Constants

class SearchRack extends _SearchEntityParentClass {
  LIST_CONTAINER = RackList;
  CREATE_COMPONENT = CreateRack;
  DETAIL_CONTAINER = RackDetailsContainer;

  MODEL_NAME = 'rack';
  MODEL_LIST_NAME = 'racks';

  PATH_ENTITY = `/network/location-racks`;
  PATH_ENTITY_ID = 'rackId';
  DEFAULT_COLUMNS = [{ name: 'Name', value: 'name', filter: 'order', textFilter: true }];
  LIST_QUERY = graphql`
    query SearchRackAllQuery($count: Int!, $filter: RackFilter, $orderBy: RackOrderBy) {
      ...RackList_racks @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchRack));
