import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import __EntityClassName__List from '../../containers/__entityName__/__EntityClassName__List';
import __EntityClassName__DetailsContainer from '../../containers/__entityName__/__EntityClassName__Details';
import Create__EntityClassName__ from './Create__EntityClassName__';
// Constants

class Search__EntityClassName__ extends _SearchEntityParentClass {
  LIST_CONTAINER = __EntityClassName__List;
  CREATE_COMPONENT = Create__EntityClassName__;
  DETAIL_CONTAINER = __EntityClassName__DetailsContainer;

  MODEL_NAME = '__entityName__';
  MODEL_LIST_NAME = '__entityName__s';

  PATH_ENTITY = `/__entityBlock__/__entityInternalRoutePath__s`;
  PATH_ENTITY_ID = '__entityName__Id';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'URL', value: 'url' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query Search__EntityClassName__AllQuery(
      $count: Int!
      $filter: __EntityClassName__Filter
      $orderBy: __EntityClassName__OrderBy
    ) {
      ...__EntityClassName__List___entityName__s @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(Search__EntityClassName__));
