import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import UnitList from '../../containers/unit/UnitList';
import UnitDetailsContainer from '../../containers/unit/UnitDetails';
// Constants

class SearchUnit extends _SearchEntityParentClass {
  LIST_CONTAINER = UnitList;
  CREATE_COMPONENT = null;
  DETAIL_CONTAINER = UnitDetailsContainer;

  MODEL_NAME = 'unit';
  MODEL_LIST_NAME = 'units';

  PATH_ENTITY = `/network/units`;
  PATH_ENTITY_ID = 'unitId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Description', value: 'description', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchUnitAllQuery(
      $count: Int!
      $filter: UnitFilter
      $orderBy: UnitOrderBy
    ) {
      ...UnitList_units @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchUnit));
