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
  

    ports {
      id
name
description
__typename

    type: port_type {
        __typename
        name
        value
    }
  

    parent {
      id
name
description
__typename
      ...on Physical {
       
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
  
    }
    }
      
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

    operational_state {
        __typename
        name
        value
    }
  
      ...on Service {
       
    type: service_type {
        __typename
        id
        name
        
        
    }
  

    service_type {
        __typename
        id
        name
        
        
    }
  
    },...on OpticalPath {
       wavelength

    framing {
        __typename
        name
        value
    }
  

    capacity {
        __typename
        name
        value
    }
  

    operational_state {
        __typename
        name
        value
    }
  
    },...on OpticalMultiplexSection {
       
    operational_state {
        __typename
        name
        value
    }
  
    },...on OpticalLink {
       
    type: link_type {
        __typename
        name
        value
    }
  

    interface_type {
        __typename
        name
        value
    }
  

    operational_state {
        __typename
        name
        value
    }
  

    ports {
      id
name
description
__typename
      
    }
    }
    }
    }
  }
`;

export default PortDetailsQuery;
