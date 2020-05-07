/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizationUpdateForm_organization$ref = any;
export type OrganizationUpdateFormRefetchQueryVariables = {|
  organizationId: string
|};
export type OrganizationUpdateFormRefetchQueryResponse = {|
  +getOrganizationById: ?{|
    +$fragmentRefs: OrganizationUpdateForm_organization$ref
  |}
|};
export type OrganizationUpdateFormRefetchQuery = {|
  variables: OrganizationUpdateFormRefetchQueryVariables,
  response: OrganizationUpdateFormRefetchQueryResponse,
|};
*/


/*
query OrganizationUpdateFormRefetchQuery(
  $organizationId: ID!
) {
  getOrganizationById(id: $organizationId) {
    ...OrganizationUpdateForm_organization
    id
  }
}

fragment OrganizationUpdateForm_organization on Organization {
  id
  name
  type {
    name
    value
    id
  }
  website
  organization_id
  organization_number
  description
  incident_management_info
  parent_organization {
    organization_id
    id
    relation_id
    name
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
    contact_type {
      name
      value
      id
    }
    emails {
      id
      name
      type {
        name
        value
        id
      }
    }
    phones {
      id
      name
      type {
        name
        value
        id
      }
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId",
    "type": "ID!"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  },
  (v2/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "type",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization_id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relation_id",
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "node_name",
    "storageKey": null
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v11 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v5/*: any*/)
],
v12 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v13 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrganizationUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "getOrganizationById",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrganizationUpdateForm_organization"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrganizationUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "getOrganizationById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "website",
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "organization_number",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "incident_management_info",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Organization",
            "kind": "LinkedField",
            "name": "parent_organization",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v2/*: any*/),
              (v7/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "addresses",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "street",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "postal_code",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "postal_area",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "phone",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DictRelationType",
            "kind": "LinkedField",
            "name": "incoming",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NIRelationType",
                "kind": "LinkedField",
                "name": "relation",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "kind": "LinkedField",
                    "name": "end",
                    "plural": false,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "kind": "LinkedField",
                    "name": "start",
                    "plural": false,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Contact",
            "kind": "LinkedField",
            "name": "contacts",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "contact_type",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Email",
                "kind": "LinkedField",
                "name": "emails",
                "plural": true,
                "selections": (v11/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Phone",
                "kind": "LinkedField",
                "name": "phones",
                "plural": true,
                "selections": (v11/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "RoleRelation",
                "kind": "LinkedField",
                "name": "roles",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Role",
                    "kind": "LinkedField",
                    "name": "role_data",
                    "plural": false,
                    "selections": (v12/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "end",
                    "plural": false,
                    "selections": (v12/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CommentType",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "comment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "submit_date",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v13/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "modified",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v13/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrganizationUpdateFormRefetchQuery",
    "operationKind": "query",
    "text": "query OrganizationUpdateFormRefetchQuery(\n  $organizationId: ID!\n) {\n  getOrganizationById(id: $organizationId) {\n    ...OrganizationUpdateForm_organization\n    id\n  }\n}\n\nfragment OrganizationUpdateForm_organization on Organization {\n  id\n  name\n  type {\n    name\n    value\n    id\n  }\n  website\n  organization_id\n  organization_number\n  description\n  incident_management_info\n  parent_organization {\n    organization_id\n    id\n    relation_id\n    name\n  }\n  addresses {\n    id\n    name\n    street\n    postal_code\n    postal_area\n    phone\n  }\n  incoming {\n    name\n    relation {\n      relation_id\n      type\n      end {\n        id\n        node_name\n      }\n      start {\n        id\n        node_name\n      }\n      id\n    }\n  }\n  contacts {\n    id\n    first_name\n    last_name\n    contact_type {\n      name\n      value\n      id\n    }\n    emails {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    phones {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    roles {\n      relation_id\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n      }\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba5fadfb01c6b265009b31e5b92edbf7';

module.exports = node;
