import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import OpticalPathList from '../../containers/opticalPath/OpticalPathList';
import OpticalPathDetailsContainer from '../../containers/opticalPath/OpticalPathDetails';
import CreateOpticalPath from './CreateOpticalPathRoute/CreateOpticalPathRoute';
// Constants

class SearchOpticalPath extends _SearchEntityParentClass {
  LIST_CONTAINER = OpticalPathList;
  CREATE_COMPONENT = CreateOpticalPath;
  DETAIL_CONTAINER = OpticalPathDetailsContainer;

  MODEL_NAME = 'opticalPath';
  MODEL_LIST_NAME = 'opticalPaths';

  PATH_ENTITY = `/network/optical-paths`;
  PATH_ENTITY_ID = 'opticalPathId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Description', value: 'description', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchOpticalPathAllQuery($count: Int!, $filter: OpticalPathFilter, $orderBy: OpticalPathOrderBy) {
      ...OpticalPathList_opticalPaths @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchOpticalPath));
