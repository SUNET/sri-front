import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import OpticalMultiplexSectionList from '../../containers/opticalMultiplexSection/OpticalMultiplexSectionList';
import OpticalMultiplexSectionDetailsContainer from '../../containers/opticalMultiplexSection/OpticalMultiplexSectionDetails';
import CreateOpticalMultiplexSection from './CreateOpticalMultiplexSectionRoute/CreateOpticalMultiplexSectionRoute';
// Constants

class SearchOpticalMultiplexSection extends _SearchEntityParentClass {
  LIST_CONTAINER = OpticalMultiplexSectionList;
  CREATE_COMPONENT = CreateOpticalMultiplexSection;
  DETAIL_CONTAINER = OpticalMultiplexSectionDetailsContainer;

  MODEL_NAME = 'opticalMultiplexSection';
  MODEL_LIST_NAME = 'opticalMultiplexSections';

  PATH_ENTITY = `/network/optical-multiplex-sections`;
  PATH_ENTITY_ID = 'opticalMultiplexSectionId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Depends On', value: 'dependencies', filter: null, textFilter: false },
    { name: 'Description', value: 'description', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchOpticalMultiplexSectionAllQuery(
      $count: Int!
      $filter: OpticalMultiplexSectionFilter
      $orderBy: OpticalMultiplexSectionOrderBy
    ) {
      ...OpticalMultiplexSectionList_opticalMultiplexSections
        @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchOpticalMultiplexSection));
