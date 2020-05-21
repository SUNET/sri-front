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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v13 = [
  (v12/*: any*/)
],
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v15 = [
  (v12/*: any*/),
  (v2/*: any*/)
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
            "selections": [
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
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
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
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
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v13/*: any*/),
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
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": null
          },
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "port_type",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v5/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
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
    "text": "query PortDetailsQuery(\n  $portId: ID!\n) {\n  getPortById(id: $portId) {\n    ...PortUpdateForm_port\n    id\n    name\n    description\n    port_type {\n      name\n      value\n      id\n    }\n    __typename\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment PortUpdateForm_port on Port {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aae2cdb0f5ccf29bd42712b2f4c674af';

module.exports = node;
