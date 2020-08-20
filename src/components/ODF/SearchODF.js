import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import ODFList from '../../containers/ODF/ODFList';
import ODFDetailsContainer from '../../containers/ODF/ODFDetails';
import CreateODF from './CreateODF';
// Constants

class SearchODF extends _SearchEntityParentClass {
  LIST_CONTAINER = ODFList;
  CREATE_COMPONENT = CreateODF;
  DETAIL_CONTAINER = ODFDetailsContainer;

  MODEL_NAME = 'odf';
  MODEL_LIST_NAME = 'odfs';

  PATH_ENTITY = `/network/odfs`;
  PATH_ENTITY_ID = 'ODFId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchODFAllQuery(
      $count: Int!
      $filter: ODFFilter
      $orderBy: ODFOrderBy
    ) {
      ...ODFList_odfs @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchODF));
