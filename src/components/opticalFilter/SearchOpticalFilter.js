import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import OpticalFilterList from '../../containers/opticalFilter/OpticalFilterList';
import OpticalFilterDetailsContainer from '../../containers/opticalFilter/OpticalFilterDetails';
import CreateOpticalFilterRoute from "./CreateOpticalFilterRoute/CreateOpticalFilterRoute";
// Constants

class SearchOpticalFilter extends _SearchEntityParentClass {
  LIST_CONTAINER = OpticalFilterList;
  CREATE_COMPONENT = CreateOpticalFilterRoute;
  DETAIL_CONTAINER = OpticalFilterDetailsContainer;

  MODEL_NAME = 'opticalFilter';
  MODEL_LIST_NAME = 'opticalFilters';

  PATH_ENTITY = `/network/optical-filters`;
  PATH_ENTITY_ID = 'opticalFilterId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchOpticalFilterAllQuery(
      $count: Int!
      $filter: OpticalFilterFilter
      $orderBy: OpticalFilterOrderBy
    ) {
      ...OpticalFilterList_opticalFilters @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchOpticalFilter));
