import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import ProviderList from '../../containers/provider/ProviderList';
import ProviderDetailsContainer from '../../containers/provider/ProviderDetails';
import CreateProviderRoute from './CreateProviderRoute/CreateProviderRoute';
// Constants

class SearchProvider extends _SearchEntityParentClass {
  LIST_CONTAINER = ProviderList;
  CREATE_COMPONENT = CreateProviderRoute;
  DETAIL_CONTAINER = ProviderDetailsContainer;

  MODEL_NAME = 'provider';
  MODEL_LIST_NAME = 'providers';

  PATH_ENTITY = '/network/providers';
  PATH_ENTITY_ID = 'providerId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'URL', value: 'url' },
    { name: 'Description', value: 'description', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchProviderAllQuery($count: Int!, $filter: ProviderFilter, $orderBy: ProviderOrderBy) {
      ...ProviderList_providers @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchProvider));
