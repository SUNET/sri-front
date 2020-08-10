/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PortUpdateForm_port$ref = any;
export type PortDetailsQueryVariables = {|
  portId: string
|};
export type PortDetailsQueryResponse = {|
  +getPortById: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +port_type: ?{|
      +name: string,
      +value: string,
    |},
    +parent: ?$ReadOnlyArray<?{|
      +__typename: string,
      +id: string,
      +name: string,
      +relation_id: ?number,
      +description?: ?string,
      +entityType?: {|
        +name: string
      |},
      +type?: ?{|
        +name: string,
        +value: string,
      |},
      +operational_state?: ?{|
        +name: string,
        +value: string,
      |},
    |}>,
    +connected_to: ?$ReadOnlyArray<?{|
      +__typename: string,
      +id: string,
      +name: string,
      +relation_id: ?number,
      +description?: ?string,
      +type?: ?{|
        +name: string,
        +value: string,
      |},
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
    +$fragmentRefs: PortUpdateForm_port$ref,
  |}
|};
export type PortDetailsQuery = {|
  variables: PortDetailsQueryVariables,
  response: PortDetailsQueryResponse,
|};
*/


/*
query PortDetailsQuery(
  $portId: ID!
) {
  getPortById(id: $portId) {
    ...PortUpdateForm_port
    id
    name
    description
    port_type {
      name
      value
      id
    }
    parent {
      __typename
      id
      name
      relation_id
      ... on Port {
        description
        entityType: node_type {
          name: type
          id
        }
        type: port_type {
          name
          value
          id
        }
      }
      ... on Cable {
        description
        entityType: node_type {
          name: type
          id
        }
        type: cable_type {
          name
          value
          id
        }
      }
      ... on ExternalEquipment {
        description
        entityType: node_type {
          name: type
          id
        }
      }
      ... on Switch {
        description
        operational_state {
          name
          value
          id
        }
        entityType: node_type {
          name: type
          id
        }
      }
      ... on Firewall {
        description
        operational_state {
          name
          value
          id
        }
        entityType: node_type {
          name: type
          id
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
          id
        }
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "portId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "portId"
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
  "name": "value",
  "storageKey": null
},
v6 = [
  (v3/*: any*/),
  (v5/*: any*/)
],
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
v10 = {
  "alias": "entityType",
  "args": null,
  "concreteType": "NINodeType",
  "kind": "LinkedField",
  "name": "node_type",
  "plural": false,
  "selections": [
    (v9/*: any*/)
  ],
  "storageKey": null
},
v11 = {
  "alias": "type",
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "cable_type",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v12 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "operational_state",
    "plural": false,
    "selections": (v6/*: any*/),
    "storageKey": null
  },
  (v10/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v19 = [
  (v18/*: any*/)
],
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v21 = [
  (v18/*: any*/),
  (v2/*: any*/)
],
v22 = [
  (v3/*: any*/),
  (v5/*: any*/),
  (v2/*: any*/)
],
v23 = {
  "alias": "entityType",
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
},
v24 = {
  "alias": "type",
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "cable_type",
  "plural": false,
  "selections": (v22/*: any*/),
  "storageKey": null
},
v25 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "operational_state",
    "plural": false,
    "selections": (v22/*: any*/),
    "storageKey": null
  },
  (v23/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PortDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Port",
        "kind": "LinkedField",
        "name": "getPortById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "port_type",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": "type",
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "port_type",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "Port"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "type": "Cable"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v10/*: any*/)
                ],
                "type": "ExternalEquipment"
              },
              {
                "kind": "InlineFragment",
                "selections": (v12/*: any*/),
                "type": "Switch"
              },
              {
                "kind": "InlineFragment",
                "selections": (v12/*: any*/),
                "type": "Firewall"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "connected_to",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v11/*: any*/)
                ],
                "type": "Cable"
              }
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
                  (v13/*: any*/),
                  (v14/*: any*/)
                ],
                "storageKey": null
              },
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/),
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
          (v20/*: any*/),
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PortUpdateForm_port"
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
    "name": "PortDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Port",
        "kind": "LinkedField",
        "name": "getPortById",
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
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v21/*: any*/),
            "storageKey": null
          },
          (v20/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v21/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "port_type",
            "plural": false,
            "selections": (v22/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v23/*: any*/),
                  {
                    "alias": "type",
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "port_type",
                    "plural": false,
                    "selections": (v22/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "Port"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v23/*: any*/),
                  (v24/*: any*/)
                ],
                "type": "Cable"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v23/*: any*/)
                ],
                "type": "ExternalEquipment"
              },
              {
                "kind": "InlineFragment",
                "selections": (v25/*: any*/),
                "type": "Switch"
              },
              {
                "kind": "InlineFragment",
                "selections": (v25/*: any*/),
                "type": "Firewall"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "connected_to",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v24/*: any*/)
                ],
                "type": "Cable"
              }
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
    "name": "PortDetailsQuery",
    "operationKind": "query",
    "text": "query PortDetailsQuery(\n  $portId: ID!\n) {\n  getPortById(id: $portId) {\n    ...PortUpdateForm_port\n    id\n    name\n    description\n    port_type {\n      name\n      value\n      id\n    }\n    parent {\n      __typename\n      id\n      name\n      relation_id\n      ... on Port {\n        description\n        entityType: node_type {\n          name: type\n          id\n        }\n        type: port_type {\n          name\n          value\n          id\n        }\n      }\n      ... on Cable {\n        description\n        entityType: node_type {\n          name: type\n          id\n        }\n        type: cable_type {\n          name\n          value\n          id\n        }\n      }\n      ... on ExternalEquipment {\n        description\n        entityType: node_type {\n          name: type\n          id\n        }\n      }\n      ... on Switch {\n        description\n        operational_state {\n          name\n          value\n          id\n        }\n        entityType: node_type {\n          name: type\n          id\n        }\n      }\n      ... on Firewall {\n        description\n        operational_state {\n          name\n          value\n          id\n        }\n        entityType: node_type {\n          name: type\n          id\n        }\n      }\n    }\n    connected_to {\n      __typename\n      id\n      name\n      relation_id\n      ... on Cable {\n        description\n        type: cable_type {\n          name\n          value\n          id\n        }\n      }\n    }\n    __typename\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment PortUpdateForm_port on Port {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd8c66dd04e0f104c29fb3d82e4718fc';

module.exports = node;
