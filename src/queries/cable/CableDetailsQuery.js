import graphql from 'babel-plugin-relay/macro';

const CableDetailsQuery = graphql`
  query CableDetailsQuery($cableId: ID!) {
    getCableById(id: $cableId) {
      ...CableUpdateForm_cable
      ___CABLE_FIELDS___
  }
`;

export default CableDetailsQuery;
