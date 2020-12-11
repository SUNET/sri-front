import graphql from 'babel-plugin-relay/macro';

const PortDetailsQuery = graphql`
  query PortDetailsQuery($portId: ID!) {
    getPortById(id: $portId) {
      ...PortUpdateForm_port
      id
name
description
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

    type: port_type {
        __typename
        name
        value
    }
  

    location {
        __typename
        id
        name
        id
name
description
__typename

    parent {
        __typename
        id
        name
        
    parent {
        __typename
        id
        name
        id
name
description
__typename
        
    }
  
        
    }
  
        
    }
  

    connected_to {
      id
name
description
__typename
relation_id
      ...on Cable {
       
    type: cable_type {
        __typename
        name
        value
    }
  
    }
    }

    parent {
      id
name
description
__typename
relation_id

    operational_state {
        __typename
        name
        value
    }
  
      ...on Port {
       
    type: port_type {
        __typename
        name
        value
    }
  
    },...on Cable {
       
    type: cable_type {
        __typename
        name
        value
    }
  
    },...on OpticalNode {
       
    type {
        __typename
        name
        value
    }
  
    }
    }

    dependents {
      id
name
description
__typename
relation_id
      
    }
    }
  }
`;

export default PortDetailsQuery;
