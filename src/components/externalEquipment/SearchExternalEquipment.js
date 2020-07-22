import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import ExternalEquipmentList from '../../containers/externalEquipment/ExternalEquipmentList';
import ExternalEquipmentDetailsContainer from '../../containers/externalEquipment/ExternalEquipmentDetails';
import CreateExternalEquipmentRoute from "./CreateExternalEquipmentRoute/CreateExternalEquipmentRoute";
// Constants

class SearchExternalEquipment extends _SearchEntityParentClass {
  LIST_CONTAINER = ExternalEquipmentList;
  CREATE_COMPONENT = CreateExternalEquipmentRoute;
  DETAIL_CONTAINER = ExternalEquipmentDetailsContainer;

  MODEL_NAME = 'externalEquipment';
  MODEL_LIST_NAME = 'externalEquipments';

  PATH_ENTITY = `/network/external-equipments`;
  PATH_ENTITY_ID = 'externalEquipmentId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ];
  LIST_QUERY = graphql`
    query SearchExternalEquipmentAllQuery(
      $count: Int!
      $filter: ExternalEquipmentFilter
      $orderBy: ExternalEquipmentOrderBy
    ) {
      ...ExternalEquipmentList_externalEquipments @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchExternalEquipment));
