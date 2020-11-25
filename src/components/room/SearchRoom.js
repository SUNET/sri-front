import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import RoomList from '../../containers/room/RoomList';
import RoomDetailsContainer from '../../containers/room/RoomDetails';
import CreateRoom from './CreateRoom';
// Constants

class SearchRoom extends _SearchEntityParentClass {
  LIST_CONTAINER = RoomList;
  CREATE_COMPONENT = CreateRoom;
  DETAIL_CONTAINER = RoomDetailsContainer;

  MODEL_NAME = 'room';
  MODEL_LIST_NAME = 'rooms';

  PATH_ENTITY = `/network/location-rooms`;
  PATH_ENTITY_ID = 'roomId';
  DEFAULT_COLUMNS = [{ name: 'Name', value: 'name', filter: 'order', textFilter: true }];
  LIST_QUERY = graphql`
    query SearchRoomAllQuery($count: Int!, $filter: RoomFilter, $orderBy: RoomOrderBy) {
      ...RoomList_rooms @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchRoom));
