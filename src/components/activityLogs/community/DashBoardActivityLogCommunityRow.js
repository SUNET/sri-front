import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { DashBoardActivityLogRow } from '../DashBoardActivityLogRow';

export class DashBoardActivityLogCommunityRow extends DashBoardActivityLogRow {}

const ActivityNetworkRowFragment = createFragmentContainer(DashBoardActivityLogCommunityRow, {
  log: graphql`
    fragment DashBoardActivityLogCommunityRow_log on Action {
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
