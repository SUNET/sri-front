import graphql from 'babel-plugin-relay/macro';

const PortDetailsQuery = graphql`
  query PortDetailsQuery($portId: ID!) {
    getPortById(id: $portId) {
      ...PortUpdateForm_port
      id
      name
      description
      port_type {
        name
        value
      }
      parent {
        __typename
        id
        name
        relation_id
        ... on Port {
          description
          type: port_type {
            name
            value
          }
        }
        ... on Cable {
          description
          type: cable_type {
            name
            value
          }
        }
      }
      connected_to {
        __typename
        id
        name
        relation_id
        ... on Cable {
          description
          type: cable_type {
            name
            value
          }
        }
      }
      __typename
      comments {
        id
        user {
          first_name
          last_name
        }
        comment
        submit_date
      }
      created
      creator {
        email
      }
      modified
      modifier {
        email
      }
    }
  }
`;

export default PortDetailsQuery;

/**
// QUERY
query PortDetailsQuery($portId: ID!) {
  getPortById(id: $portId) {
    ...PortUpdateForm_port
    id
    name
    description
    port_type {
      name
      value
    }
    parent {
      ... on Port {
        id
        name
        port_type {
          value
        }
        description
      }
    }
    __typename
    comments {
      id
      user {
        first_name
        last_name
        id
      }
      comment
      submit_date
    }
    created
    creator {
      email
      id
    }
    modified
    modifier {
      email
      id
    }
  }
}

fragment PortUpdateForm_port on Port {
  id
  name
  description
  comments {
    id
    user {
      first_name
      last_name
      id
    }
    comment
    submit_date
  }
  created
  creator {
    email
    id
  }
  modified
  modifier {
    email
    id
  }
}

// VARIABLES
{
  "portId": "UG9ydDoyODgx"
}
*/
