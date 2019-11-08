/**
 * @flow
 * @relayHash 75cd02a15fb9cc0421cf2c28e6785b55
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizationUpdateForm_organization$ref = any;
export type OrganizationDetailsQueryVariables = {|
  organizationId: number
|};
export type OrganizationDetailsQueryResponse = {|
  +getOrganizationById: ?{|
    +handle_id: string,
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
    +addresses: ?$ReadOnlyArray<?{|
      +handle_id: string,
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
          +handle_id: string,
          +node_name: string,
        |},
        +start: {|
          +handle_id: string,
          +node_name: string,
        |},
      |},
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
  |},
  +getOrganizationContacts: ?$ReadOnlyArray<?{|
    +relation_id: ?number,
    +contact: ?{|
      +handle_id: string,
      +first_name: string,
      +last_name: string,
      +contact_type: ?string,
      +emails: ?$ReadOnlyArray<?{|
        +handle_id: string,
        +name: string,
        +type: any,
      |}>,
      +phones: ?$ReadOnlyArray<?{|
        +handle_id: string,
        +name: string,
        +type: any,
      |}>,
      +roles: ?$ReadOnlyArray<?{|
        +name: ?string,
        +end: ?{|
          +handle_id: string,
          +name: string,
        |},
      |}>,
    |},
    +role: ?{|
      +handle_id: string,
      +name: string,
    |},
  |}>,
|};
export type OrganizationDetailsQuery = {|
  variables: OrganizationDetailsQueryVariables,
  response: OrganizationDetailsQueryResponse,
|};
*/


/*
query OrganizationDetailsQuery(
  $organizationId: Int!
) {
  getOrganizationById(handle_id: $organizationId) {
    ...OrganizationUpdateForm_organization
    handle_id
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
    addresses {
      handle_id
      name
      street
      postal_code
      postal_area
      phone
      id
    }
    incoming {
      name
      relation {
        relation_id
        type
        end {
          handle_id
          node_name
          id
        }
        start {
          handle_id
          node_name
          id
        }
        id
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
    id
  }
  getOrganizationContacts(handle_id: $organizationId) {
    relation_id
    contact {
      handle_id
      first_name
      last_name
      contact_type
      emails {
        handle_id
        name
        type
        id
      }
      phones {
        handle_id
        name
        type
        id
      }
      roles {
        name
        end {
          handle_id
          name
          id
        }
      }
      id
    }
    role {
      handle_id
      name
    }
  }
}

fragment OrganizationUpdateForm_organization on Organization {
  handle_id
  name
  type
  website
  organization_id
  organization_number
  description
  incident_management_info
  addresses {
    handle_id
    name
    street
    postal_code
    postal_area
    phone
    id
  }
  incoming {
    name
    relation {
      relation_id
      type
      end {
        handle_id
        node_name
        id
      }
      start {
        handle_id
        node_name
        id
      }
      id
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
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "organizationId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "street",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_code",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_area",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "node_name",
  "args": null,
  "storageKey": null
},
v22 = [
  (v2/*: any*/),
  (v21/*: any*/)
],
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
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
v32 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v33 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/)
],
v34 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v35 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "role",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": (v34/*: any*/)
},
v36 = [
  (v2/*: any*/),
  (v21/*: any*/),
  (v23/*: any*/)
],
v37 = [
  (v29/*: any*/),
  (v23/*: any*/)
],
v38 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/),
  (v23/*: any*/)
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
            "name": "addresses",
            "storageKey": null,
            "args": null,
            "concreteType": "Address",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/)
            ]
          },
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
                  (v20/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "end",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v22/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "start",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v22/*: any*/)
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v23/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v24/*: any*/),
                  (v25/*: any*/)
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationContacts",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ContactWithRolename",
        "plural": true,
        "selections": [
          (v20/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v32/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "emails",
                "storageKey": null,
                "args": null,
                "concreteType": "Email",
                "plural": true,
                "selections": (v33/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "phones",
                "storageKey": null,
                "args": null,
                "concreteType": "Phone",
                "plural": true,
                "selections": (v33/*: any*/)
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
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "end",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": false,
                    "selections": (v34/*: any*/)
                  }
                ]
              }
            ]
          },
          (v35/*: any*/)
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
            "name": "addresses",
            "storageKey": null,
            "args": null,
            "concreteType": "Address",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v23/*: any*/)
            ]
          },
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
                  (v20/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "end",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v36/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "start",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v36/*: any*/)
                  },
                  (v23/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v23/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v24/*: any*/),
                  (v25/*: any*/),
                  (v23/*: any*/)
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
            "selections": (v37/*: any*/)
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
            "selections": (v37/*: any*/)
          },
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v23/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationContacts",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ContactWithRolename",
        "plural": true,
        "selections": [
          (v20/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v32/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "emails",
                "storageKey": null,
                "args": null,
                "concreteType": "Email",
                "plural": true,
                "selections": (v38/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "phones",
                "storageKey": null,
                "args": null,
                "concreteType": "Phone",
                "plural": true,
                "selections": (v38/*: any*/)
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
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "end",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v23/*: any*/)
                    ]
                  }
                ]
              },
              (v23/*: any*/)
            ]
          },
          (v35/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OrganizationDetailsQuery",
    "id": null,
    "text": "query OrganizationDetailsQuery(\n  $organizationId: Int!\n) {\n  getOrganizationById(handle_id: $organizationId) {\n    ...OrganizationUpdateForm_organization\n    handle_id\n    name\n    type\n    website\n    organization_id\n    organization_number\n    description\n    incident_management_info\n    affiliation_customer\n    affiliation_end_customer\n    affiliation_host_user\n    affiliation_partner\n    affiliation_provider\n    affiliation_site_owner\n    addresses {\n      handle_id\n      name\n      street\n      postal_code\n      postal_area\n      phone\n      id\n    }\n    incoming {\n      name\n      relation {\n        relation_id\n        type\n        end {\n          handle_id\n          node_name\n          id\n        }\n        start {\n          handle_id\n          node_name\n          id\n        }\n        id\n      }\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    id\n  }\n  getOrganizationContacts(handle_id: $organizationId) {\n    relation_id\n    contact {\n      handle_id\n      first_name\n      last_name\n      contact_type\n      emails {\n        handle_id\n        name\n        type\n        id\n      }\n      phones {\n        handle_id\n        name\n        type\n        id\n      }\n      roles {\n        name\n        end {\n          handle_id\n          name\n          id\n        }\n      }\n      id\n    }\n    role {\n      handle_id\n      name\n    }\n  }\n}\n\nfragment OrganizationUpdateForm_organization on Organization {\n  handle_id\n  name\n  type\n  website\n  organization_id\n  organization_number\n  description\n  incident_management_info\n  addresses {\n    handle_id\n    name\n    street\n    postal_code\n    postal_area\n    phone\n    id\n  }\n  incoming {\n    name\n    relation {\n      relation_id\n      type\n      end {\n        handle_id\n        node_name\n        id\n      }\n      start {\n        handle_id\n        node_name\n        id\n      }\n      id\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'edaaf56cfb5c0fbaf0f26fe19b231b78';
module.exports = node;
