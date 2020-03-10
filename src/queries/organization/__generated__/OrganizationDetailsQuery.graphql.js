/**
 * @flow
 * @relayHash f32ed7f4a1996885c09c029d1e8d5b19
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizationUpdateForm_organization$ref = any;
export type OrganizationDetailsQueryVariables = {|
  organizationId: string
|};
export type OrganizationDetailsQueryResponse = {|
  +getOrganizationById: ?{|
    +id: string,
    +name: string,
    +type: ?any,
    +website: ?string,
    +organization_id: ?string,
    +organization_number: ?string,
    +description: ?string,
    +incident_management_info: ?string,
    +affiliation_customer: ?boolean,
    +affiliation_end_customer: ?boolean,
    +affiliation_host_user: ?boolean,
    +affiliation_partner: ?boolean,
    +affiliation_provider: ?boolean,
    +affiliation_site_owner: ?boolean,
    +parent_organization: ?$ReadOnlyArray<?{|
      +organization_id: ?string
    |}>,
    +addresses: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +street: ?string,
      +postal_code: ?string,
      +postal_area: ?string,
      +phone: ?string,
    |}>,
    +incoming: ?$ReadOnlyArray<?{|
      +name: string,
      +relation: {|
        +relation_id: number,
        +type: string,
        +end: {|
          +id: string,
          +node_name: string,
        |},
        +start: {|
          +id: string,
          +node_name: string,
        |},
      |},
    |}>,
    +contacts: ?$ReadOnlyArray<?{|
      +id: string,
      +first_name: string,
      +last_name: string,
      +contact_type: ?any,
      +emails: ?$ReadOnlyArray<?{|
        +id: string,
        +name: string,
        +type: any,
      |}>,
      +phones: ?$ReadOnlyArray<?{|
        +id: string,
        +name: string,
        +type: any,
      |}>,
      +roles: ?$ReadOnlyArray<?{|
        +relation_id: number,
        +role_data: ?{|
          +id: string,
          +name: string,
        |},
        +end: ?{|
          +id: string,
          +name: string,
        |},
      |}>,
    |}>,
    +comments: ?$ReadOnlyArray<?{|
      +id: string,
      +user: ?{|
        +first_name: string,
        +last_name: string,
      |},
      +comment: string,
      +submit_date: any,
    |}>,
    +created: any,
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: OrganizationUpdateForm_organization$ref,
  |}
|};
export type OrganizationDetailsQuery = {|
  variables: OrganizationDetailsQueryVariables,
  response: OrganizationDetailsQueryResponse,
|};
*/


/*
query OrganizationDetailsQuery(
  $organizationId: ID!
) {
  getOrganizationById(id: $organizationId) {
    ...OrganizationUpdateForm_organization
    id
    name
    type
    website
    organization_id
    organization_number
    description
    incident_management_info
    affiliation_customer
    affiliation_end_customer
    affiliation_host_user
    affiliation_partner
    affiliation_provider
    affiliation_site_owner
    parent_organization {
      organization_id
      id
    }
    addresses {
      id
      name
      street
      postal_code
      postal_area
      phone
    }
    incoming {
      name
      relation {
        relation_id
        type
        end {
          id
          node_name
        }
        start {
          id
          node_name
        }
        id
      }
    }
    contacts {
      id
      first_name
      last_name
      contact_type
      emails {
        id
        name
        type
      }
      phones {
        id
        name
        type
      }
      roles {
        relation_id
        role_data {
          id
          name
        }
        end {
          id
          name
        }
      }
    }
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

fragment OrganizationUpdateForm_organization on Organization {
  id
  name
  type
  website
  organization_id
  organization_number
  description
  incident_management_info
  parent_organization {
    organization_id
    id
  }
  addresses {
    id
    name
    street
    postal_code
    postal_area
    phone
  }
  incoming {
    name
    relation {
      relation_id
      type
      end {
        id
        node_name
      }
      start {
        id
        node_name
      }
      id
    }
  }
  contacts {
    id
    first_name
    last_name
    contact_type
    emails {
      id
      name
      type
    }
    phones {
      id
      name
      type
    }
    roles {
      relation_id
      role_data {
        id
        name
      }
      end {
        id
        name
      }
    }
  }
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "organizationId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "website",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_id",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_number",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "incident_management_info",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_customer",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_end_customer",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_host_user",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_partner",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_provider",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_site_owner",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "addresses",
  "storageKey": null,
  "args": null,
  "concreteType": "Address",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "street",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "postal_code",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "postal_area",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "phone",
      "args": null,
      "storageKey": null
    }
  ]
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v18 = [
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "node_name",
    "args": null,
    "storageKey": null
  }
],
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "NINodeHandlerType",
  "plural": false,
  "selections": (v18/*: any*/)
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "start",
  "storageKey": null,
  "args": null,
  "concreteType": "NINodeHandlerType",
  "plural": false,
  "selections": (v18/*: any*/)
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v23 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/)
],
v24 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v25 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "contacts",
  "storageKey": null,
  "args": null,
  "concreteType": "Contact",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v21/*: any*/),
    (v22/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "contact_type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "emails",
      "storageKey": null,
      "args": null,
      "concreteType": "Email",
      "plural": true,
      "selections": (v23/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "phones",
      "storageKey": null,
      "args": null,
      "concreteType": "Phone",
      "plural": true,
      "selections": (v23/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "roles",
      "storageKey": null,
      "args": null,
      "concreteType": "RoleRelation",
      "plural": true,
      "selections": [
        (v17/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "role_data",
          "storageKey": null,
          "args": null,
          "concreteType": "Role",
          "plural": false,
          "selections": (v24/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "end",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": (v24/*: any*/)
        }
      ]
    }
  ]
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v30 = [
  (v29/*: any*/)
],
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v32 = [
  (v29/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "parent_organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": true,
            "selections": [
              (v6/*: any*/)
            ]
          },
          (v16/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "incoming",
            "storageKey": null,
            "args": null,
            "concreteType": "DictRelationType",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "relation",
                "storageKey": null,
                "args": null,
                "concreteType": "NIRelationType",
                "plural": false,
                "selections": [
                  (v17/*: any*/),
                  (v4/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/)
                ]
              }
            ]
          },
          (v25/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v21/*: any*/),
                  (v22/*: any*/)
                ]
              },
              (v26/*: any*/),
              (v27/*: any*/)
            ]
          },
          (v28/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v30/*: any*/)
          },
          (v31/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v30/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "OrganizationUpdateForm_organization",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizationDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "parent_organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v16/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "incoming",
            "storageKey": null,
            "args": null,
            "concreteType": "DictRelationType",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "relation",
                "storageKey": null,
                "args": null,
                "concreteType": "NIRelationType",
                "plural": false,
                "selections": [
                  (v17/*: any*/),
                  (v4/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v2/*: any*/)
                ]
              }
            ]
          },
          (v25/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v26/*: any*/),
              (v27/*: any*/)
            ]
          },
          (v28/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v32/*: any*/)
          },
          (v31/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v32/*: any*/)
          },
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OrganizationDetailsQuery",
    "id": null,
    "text": "query OrganizationDetailsQuery(\n  $organizationId: ID!\n) {\n  getOrganizationById(id: $organizationId) {\n    ...OrganizationUpdateForm_organization\n    id\n    name\n    type\n    website\n    organization_id\n    organization_number\n    description\n    incident_management_info\n    affiliation_customer\n    affiliation_end_customer\n    affiliation_host_user\n    affiliation_partner\n    affiliation_provider\n    affiliation_site_owner\n    parent_organization {\n      organization_id\n      id\n    }\n    addresses {\n      id\n      name\n      street\n      postal_code\n      postal_area\n      phone\n    }\n    incoming {\n      name\n      relation {\n        relation_id\n        type\n        end {\n          id\n          node_name\n        }\n        start {\n          id\n          node_name\n        }\n        id\n      }\n    }\n    contacts {\n      id\n      first_name\n      last_name\n      contact_type\n      emails {\n        id\n        name\n        type\n      }\n      phones {\n        id\n        name\n        type\n      }\n      roles {\n        relation_id\n        role_data {\n          id\n          name\n        }\n        end {\n          id\n          name\n        }\n      }\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment OrganizationUpdateForm_organization on Organization {\n  id\n  name\n  type\n  website\n  organization_id\n  organization_number\n  description\n  incident_management_info\n  parent_organization {\n    organization_id\n    id\n  }\n  addresses {\n    id\n    name\n    street\n    postal_code\n    postal_area\n    phone\n  }\n  incoming {\n    name\n    relation {\n      relation_id\n      type\n      end {\n        id\n        node_name\n      }\n      start {\n        id\n        node_name\n      }\n      id\n    }\n  }\n  contacts {\n    id\n    first_name\n    last_name\n    contact_type\n    emails {\n      id\n      name\n      type\n    }\n    phones {\n      id\n      name\n      type\n    }\n    roles {\n      relation_id\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n      }\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0aa9f2f16c7164237be13f05d173e84';
module.exports = node;