import graphql from 'babel-plugin-relay/macro';

const SwitchDetailsQuery = graphql`
  query SwitchDetailsQuery($switchId: ID!) {
    getSwitchById(id: $switchId) {
      ...SwitchUpdateForm_switch
      ___SWITCH_FIELDS___
    }
  }
`;

export default SwitchDetailsQuery;
