import graphql from 'babel-plugin-relay/macro';

const CustomerDetailsQuery = graphql`
  query CustomerDetailsQuery($customerId: ID!) {
    getCustomerById(id: $customerId) {
      ...CustomerUpdateForm_customer
      id
name
description
__typename
url

    owns {
      id
name
description
__typename
relation_id
      
    }

    uses {
      id
name
description
__typename
relation_id
      ...on Service {
       
    service_type {
        __typename
        id
        name
        
        
    }
  

    operational_state {
        __typename
        name
        value
    }
  
    }
    }

    with_same_name {
      id
name
description
__typename
      ...on EndUser {
       url
    },...on Customer {
       url
    },...on SiteOwner {
       url
    },...on Provider {
       url
    },...on Customer {
       url
    },...on Organization {
       website
organization_id
affiliation_partner
affiliation_customer
affiliation_provider
affiliation_host_user
affiliation_site_owner
affiliation_end_customer

    parent_organization {
        __typename
        id
        name
        organization_id
        
    }
  

    type {
        __typename
        name
        value
    }
  
    }
    }

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

export default CustomerDetailsQuery;
