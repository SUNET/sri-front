import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import PeeringGroupList from '../../containers/peeringGroup/PeeringGroupList';
import PeeringGroupDetailsContainer from '../../containers/peeringGroup/PeeringGroupDetails';
// Constants

class SearchPeeringGroup extends _SearchEntityParentClass {
  LIST_CONTAINER = PeeringGroupList;
  CREATE_COMPONENT = undefined;
  DETAIL_CONTAINER = PeeringGroupDetailsContainer;

  MODEL_NAME = 'peeringGroup';
  MODEL_LIST_NAME = 'peeringGroups';

  PATH_ENTITY = `/network/peering-groups`;
  PATH_ENTITY_ID = 'peeringGroupId';
  DEFAULT_COLUMNS = [{ name: 'Name', value: 'name', filter: 'order', textFilter: true }];
  LIST_QUERY = graphql`
    query SearchPeeringGroupAllQuery($count: Int!, $filter: PeeringGroupFilter, $orderBy: PeeringGroupOrderBy) {
      ...PeeringGroupList_peeringGroups @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchPeeringGroup));
