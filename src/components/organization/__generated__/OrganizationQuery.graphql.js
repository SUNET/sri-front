/**
 * @flow
 * @relayHash ee72c0f44a70107ebf9665bd45051904
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrganizationQueryVariables = {|
  organizationId: number
|};
export type OrganizationQueryResponse = {|
  +getOrganizationById: ?{|
    +handle_id: string,
    +name: string,
    +type: ?any,
    +website: ?string,
    +customer_id: ?string,
    +description: ?string,
    +incident_management_info: ?string,
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
  |}
|};
export type OrganizationQuery = {|
  variables: OrganizationQueryVariables,
  response: OrganizationQueryResponse,
|};
*/


/*
query OrganizationQuery(
  $organizationId: Int!
) {
  getOrganizationById(handle_id: $organizationId) {
    handle_id
    name
    type
    website
    customer_id
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
  "name": "customer_id",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "incident_management_info",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "street",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_code",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_area",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "node_name",
  "args": null,
  "storageKey": null
},
v15 = [
  (v2/*: any*/),
  (v14/*: any*/)
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v23 = [
  (v22/*: any*/)
],
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v25 = [
  (v2/*: any*/),
  (v14/*: any*/),
  (v16/*: any*/)
],
v26 = [
  (v22/*: any*/),
  (v16/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationQuery",
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
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
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
                  (v13/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "end",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v15/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "start",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v15/*: any*/)
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
              (v16/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v17/*: any*/),
                  (v18/*: any*/)
                ]
              },
              (v19/*: any*/),
              (v20/*: any*/)
            ]
          },
          (v21/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v23/*: any*/)
          },
          (v24/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v23/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizationQuery",
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
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v16/*: any*/)
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
                  (v13/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "end",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v25/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "start",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NINodeHandlerType",
                    "plural": false,
                    "selections": (v25/*: any*/)
                  },
                  (v16/*: any*/)
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
              (v16/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v16/*: any*/)
                ]
              },
              (v19/*: any*/),
              (v20/*: any*/)
            ]
          },
          (v21/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v26/*: any*/)
          },
          (v24/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v26/*: any*/)
          },
          (v16/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OrganizationQuery",
    "id": null,
    "text": "query OrganizationQuery(\n  $organizationId: Int!\n) {\n  getOrganizationById(handle_id: $organizationId) {\n    handle_id\n    name\n    type\n    website\n    customer_id\n    description\n    incident_management_info\n    addresses {\n      handle_id\n      name\n      street\n      postal_code\n      postal_area\n      phone\n      id\n    }\n    incoming {\n      name\n      relation {\n        relation_id\n        type\n        end {\n          handle_id\n          node_name\n          id\n        }\n        start {\n          handle_id\n          node_name\n          id\n        }\n        id\n      }\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c2835ca84b764b0ff794299ce0d9ab7';
module.exports = node;
