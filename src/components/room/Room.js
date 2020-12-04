import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const RoomQuery = graphql`
  query RoomQuery($roomId: ID!) {
    getRoomById(id: $roomId) {
      __typename
      id
      name
      description
      floor
      type: __typename
    }
  }
`;
const getRoom = (id) => {
  return fetchQuery(environment, RoomQuery, {
    roomId: id,
  }).then((data) => data.getRoomById);
};

export default getRoom;
