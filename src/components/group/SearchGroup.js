import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import GroupListContainer from '../../containers/group/GroupList';
import GroupDetailsContainer from '../../containers/group/GroupDetails';
import CreateGroup from './CreateGroup';
// Constants

class SearchCustomer extends _SearchEntityParentClass {
  LIST_CONTAINER = GroupListContainer;
  CREATE_COMPONENT = CreateGroup;
  DETAIL_CONTAINER = GroupDetailsContainer;

  MODEL_NAME = 'group';
  MODEL_LIST_NAME = 'groups';

  PATH_ENTITY = '/community/groups';
  PATH_ENTITY_ID = 'groupId';

  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchGroupAllQuery($count: Int!, $filter: GroupFilter, $orderBy: GroupOrderBy) {
      ...GroupList_groups @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchCustomer));
