import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import PeeringPartnerList from '../../containers/peeringPartner/PeeringPartnerList';
import PeeringPartnerDetailsContainer from '../../containers/peeringPartner/PeeringPartnerDetails';
// Constants

class SearchPeeringPartner extends _SearchEntityParentClass {
  LIST_CONTAINER = PeeringPartnerList;
  CREATE_COMPONENT = undefined;
  DETAIL_CONTAINER = PeeringPartnerDetailsContainer;

  MODEL_NAME = 'peeringPartner';
  MODEL_LIST_NAME = 'peeringPartners';

  PATH_ENTITY = `/network/peering-partners`;
  PATH_ENTITY_ID = 'peeringPartnerId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'As Number', value: 'as_number', filter: 'order', textFilter: true },
    { name: 'Peering Groups', value: 'peering_groups', filter: 'order', textFilter: true },
  ];
  LIST_QUERY = graphql`
    query SearchPeeringPartnerAllQuery($count: Int!, $filter: PeeringPartnerFilter, $orderBy: PeeringPartnerOrderBy) {
      ...PeeringPartnerList_peeringPartners @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchPeeringPartner));
