import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import OpticalLinkList from '../../containers/opticalLink/OpticalLinkList';
import OpticalLinkDetailsContainer from '../../containers/opticalLink/OpticalLinkDetails';
import CreateOpticalLink from './CreateOpticalLink';
// Constants

class SearchOpticalLink extends _SearchEntityParentClass {
  LIST_CONTAINER = OpticalLinkList;
  CREATE_COMPONENT = CreateOpticalLink;
  DETAIL_CONTAINER = OpticalLinkDetailsContainer;

  MODEL_NAME = 'opticalLink';
  MODEL_LIST_NAME = 'opticalLinks';

  PATH_ENTITY = `/network/optical-links`;
  PATH_ENTITY_ID = 'opticalLinkId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchOpticalLinkAllQuery($count: Int!, $filter: OpticalLinkFilter, $orderBy: OpticalLinkOrderBy) {
      ...OpticalLinkList_opticalLinks @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchOpticalLink));
