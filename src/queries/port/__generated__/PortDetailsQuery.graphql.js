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
      +type?: ?{|
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
        type: port_type {
          name
          value
          id
        }
      }
      ... on Cable {
        description
        type: cable_type {
          name
          value
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
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/),
    {
      "alias": "type",
      "args": null,
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "cable_type",
      "plural": false,
      "selections": (v6/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Cable"
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v16 = [
  (v15/*: any*/)
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v18 = [
  (v15/*: any*/),
  (v2/*: any*/)
],
v19 = [
  (v3/*: any*/),
  (v5/*: any*/),
  (v2/*: any*/)
],
v20 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/),
    {
      "alias": "type",
      "args": null,
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "cable_type",
      "plural": false,
      "selections": (v19/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Cable"
};
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
              (v9/*: any*/)
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
              (v9/*: any*/)
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
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v16/*: any*/),
            "storageKey": null
          },
          (v17/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v16/*: any*/),
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
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v18/*: any*/),
            "storageKey": null
          },
          (v17/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v18/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "port_type",
            "plural": false,
            "selections": (v19/*: any*/),
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
                  {
                    "alias": "type",
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "port_type",
                    "plural": false,
                    "selections": (v19/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "Port"
              },
              (v20/*: any*/)
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
              (v20/*: any*/)
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
    "text": "query PortDetailsQuery(\n  $portId: ID!\n) {\n  getPortById(id: $portId) {\n    ...PortUpdateForm_port\n    id\n    name\n    description\n    port_type {\n      name\n      value\n      id\n    }\n    parent {\n      __typename\n      id\n      name\n      relation_id\n      ... on Port {\n        description\n        type: port_type {\n          name\n          value\n          id\n        }\n      }\n      ... on Cable {\n        description\n        type: cable_type {\n          name\n          value\n          id\n        }\n      }\n    }\n    connected_to {\n      __typename\n      id\n      name\n      relation_id\n      ... on Cable {\n        description\n        type: cable_type {\n          name\n          value\n          id\n        }\n      }\n    }\n    __typename\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment PortUpdateForm_port on Port {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8d95766ef7c12935fb1c55826983e4c5';

module.exports = node;
