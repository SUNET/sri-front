/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExternalEquipmentUpdateForm_externalEquipment$ref = any;
export type ExternalEquipmentDetailsQueryVariables = {|
  externalEquipmentId: string
|};
export type ExternalEquipmentDetailsQueryResponse = {|
  +getExternalEquipmentById: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +rack_units: ?number,
    +rack_position: ?number,
    +ports: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +__typename: string,
      +relation_id: ?number,
      +type: ?{|
        +name: string
      |},
    |}>,
    +owner: ?{|
      +__typename: string,
      +id: string,
      +name: string,
      +type?: {|
        +name: string
      |},
    |},
    +has: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
    |}>,
    +__typename: string,
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
    +creator: ?{|
      +email: string
    |},
    +modified: any,
    +modifier: ?{|
      +email: string
    |},
    +$fragmentRefs: ExternalEquipmentUpdateForm_externalEquipment$ref,
  |}
|};
export type ExternalEquipmentDetailsQuery = {|
  variables: ExternalEquipmentDetailsQueryVariables,
  response: ExternalEquipmentDetailsQueryResponse,
|};
*/


/*
query ExternalEquipmentDetailsQuery(
  $externalEquipmentId: ID!
) {
  getExternalEquipmentById(id: $externalEquipmentId) {
    ...ExternalEquipmentUpdateForm_externalEquipment
    id
    name
    description
    rack_units
    rack_position
    ports {
      id
      name
      __typename
      relation_id
      type: port_type {
        name
        id
      }
    }
    owner {
      __typename
      id
      name
      ... on EndUser {
        type: node_type {
          name: type
          id
        }
      }
      ... on Customer {
        type: node_type {
          name: type
          id
        }
      }
      ... on HostUser {
        type: node_type {
          name: type
          id
        }
      }
      ... on Provider {
        type: node_type {
          name: type
          id
        }
      }
    }
    has {
      __typename
      id
      name
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

fragment ExternalEquipmentUpdateForm_externalEquipment on ExternalEquipment {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "externalEquipmentId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "externalEquipmentId"
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_units",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_position",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relation_id",
  "storageKey": null
},
v9 = {
  "alias": "name",
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v10 = [
  {
    "alias": "type",
    "args": null,
    "concreteType": "NINodeType",
    "kind": "LinkedField",
    "name": "node_type",
    "plural": false,
    "selections": [
      (v9/*: any*/)
    ],
    "storageKey": null
  }
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v17 = [
  (v16/*: any*/)
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v19 = [
  (v16/*: any*/),
  (v2/*: any*/)
],
v20 = [
  {
    "alias": "type",
    "args": null,
    "concreteType": "NINodeType",
    "kind": "LinkedField",
    "name": "node_type",
    "plural": false,
    "selections": [
      (v9/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExternalEquipmentDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ExternalEquipment",
        "kind": "LinkedField",
        "name": "getExternalEquipmentById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Port",
            "kind": "LinkedField",
            "name": "ports",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": "type",
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "port_type",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v10/*: any*/),
                "type": "EndUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v10/*: any*/),
                "type": "Customer"
              },
              {
                "kind": "InlineFragment",
                "selections": (v10/*: any*/),
                "type": "HostUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v10/*: any*/),
                "type": "Provider"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "has",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
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
                  (v11/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v17/*: any*/),
            "storageKey": null
          },
          (v18/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v17/*: any*/),
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExternalEquipmentUpdateForm_externalEquipment"
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
    "name": "ExternalEquipmentDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ExternalEquipment",
        "kind": "LinkedField",
        "name": "getExternalEquipmentById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v19/*: any*/),
            "storageKey": null
          },
          (v18/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v19/*: any*/),
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Port",
            "kind": "LinkedField",
            "name": "ports",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": "type",
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "port_type",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v20/*: any*/),
                "type": "EndUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v20/*: any*/),
                "type": "Customer"
              },
              {
                "kind": "InlineFragment",
                "selections": (v20/*: any*/),
                "type": "HostUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v20/*: any*/),
                "type": "Provider"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "has",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExternalEquipmentDetailsQuery",
    "operationKind": "query",
    "text": "query ExternalEquipmentDetailsQuery(\n  $externalEquipmentId: ID!\n) {\n  getExternalEquipmentById(id: $externalEquipmentId) {\n    ...ExternalEquipmentUpdateForm_externalEquipment\n    id\n    name\n    description\n    rack_units\n    rack_position\n    ports {\n      id\n      name\n      __typename\n      relation_id\n      type: port_type {\n        name\n        id\n      }\n    }\n    owner {\n      __typename\n      id\n      name\n      ... on EndUser {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n      ... on Customer {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n      ... on HostUser {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n      ... on Provider {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n    }\n    has {\n      __typename\n      id\n      name\n    }\n    __typename\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment ExternalEquipmentUpdateForm_externalEquipment on ExternalEquipment {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fcfd35fe1cd936ed0d89e203fe1536ac';

module.exports = node;
