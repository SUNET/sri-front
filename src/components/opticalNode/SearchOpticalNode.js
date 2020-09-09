import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import OpticalNodeList from '../../containers/opticalNode/OpticalNodeList';
import OpticalNodeDetailsContainer from '../../containers/opticalNode/OpticalNodeDetails';
import CreateOpticalNodeRoute from "./CreateOpticalNodeRoute/CreateOpticalNodeRoute";
// Constants

class SearchOpticalNode extends _SearchEntityParentClass {
  LIST_CONTAINER = OpticalNodeList;
  CREATE_COMPONENT = CreateOpticalNodeRoute;
  DETAIL_CONTAINER = OpticalNodeDetailsContainer;

  MODEL_NAME = 'opticalNode';
  MODEL_LIST_NAME = 'opticalNodes';

  PATH_ENTITY = `/network/optical-nodes`;
  PATH_ENTITY_ID = 'opticalNodeId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchOpticalNodeAllQuery(
      $count: Int!
      $filter: OpticalNodeFilter
      $orderBy: OpticalNodeOrderBy
    ) {
      ...OpticalNodeList_opticalNodes @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchOpticalNode));
