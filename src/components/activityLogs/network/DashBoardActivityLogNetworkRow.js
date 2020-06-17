import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { DashBoardActivityLogRow } from '../DashBoardActivityLogRow';

export class DashBoardActivityLogNetworkRow extends DashBoardActivityLogRow {}

const ActivityNetworkRowFragment = createFragmentContainer(DashBoardActivityLogNetworkRow, {
  log: graphql`
    fragment DashBoardActivityLogNetworkRow_log on Action {
      id
      text
      actorname
      actor {
        id
        username
        first_name
        last_name
        email
      }
      verb
      action_object {
        id
        name
        __typename
      }
      target_object {
        id
        name
        __typename
      }
      description
      timestamp
    }
  `,
});

export default ActivityNetworkRowFragment;
