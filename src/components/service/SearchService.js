import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import ServiceList from '../../containers/service/ServiceList';
import ServiceDetailsContainer from '../../containers/service/ServiceDetails';
import CreateService from './CreateService';

import { isEmpty } from '../../utils';

class SearchService extends _SearchEntityParentClass {
  LIST_CONTAINER = ServiceList;
  CREATE_COMPONENT = CreateService;
  DETAIL_CONTAINER = ServiceDetailsContainer;

  MODEL_NAME = 'service';
  MODEL_LIST_NAME = 'services';

  PATH_ENTITY = ``;
  PATH_ENTITY_ID = 'serviceId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Type', value: 'service_type', filter: 'order', textFilter: true },
    { name: 'Class', value: 'service_class', filter: 'order' },
    { name: 'Customers', value: 'customers' },
    { name: 'End Users', value: 'end_users' },
    { name: 'Description', value: 'description', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchServiceAllQuery($count: Int!, $filter: ServiceFilter, $orderBy: ServiceOrderBy) {
      ...ServiceList_services @arguments(count: $count, filter: $filter, orderBy: $orderBy)
    }
  `;
  constructor(props) {
    super(props);
    if (isMobile) {
      const visible = true;
      props.showHideColumn('name', visible, this.MODEL_NAME);
    }
  }

  getFilters = () => {
    const { currentClass } = this.props;
    const filterArrayAND = [{ service_class: currentClass.originalName }];
    let filterArrayOR = [];
    let filters = {};

    if (!isEmpty(this.state.filterDate)) {
      filterArrayAND.push(this.state.filterDate);
    }

    if (!isEmpty(this.state.filterValue)) {
      filterArrayOR = [...filterArrayOR, ...this.state.filterValue];
    }

    if (filterArrayAND.length > 0) filters.AND = filterArrayAND;
    if (filterArrayOR.length > 0) filters.OR = filterArrayOR;
    return filters;
  };

  getCustomPropsCreateComponent() {
    const { currentClass } = this.props;
    return { currentClass };
  }

  preRender() {
    const { currentClass } = this.props;
    this.PATH_ENTITY = `/network/${currentClass.path}`;
  }
}

export default withTranslation()(withRouter(SearchService));
