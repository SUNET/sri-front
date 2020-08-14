/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpticalNodeUpdateForm_opticalNode$ref = any;
export type OpticalNodeDetailsQueryVariables = {|
  opticalNodeId: string
|};
export type OpticalNodeDetailsQueryResponse = {|
  +getOpticalNodeById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +description: ?string,
    +type: ?{|
      +id: string,
      +name: string,
      +value: string,
    |},
    +ports: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +__typename: string,
      +relation_id: ?number,
      +type: ?{|
        +name: string
      |},
    |}>,
    +rack_units: ?number,
    +rack_position: ?number,
    +rack_back: ?boolean,
    +operational_state: ?{|
      +id: string,
      +name: string,
      +value: string,
    |},
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
    +$fragmentRefs: OpticalNodeUpdateForm_opticalNode$ref,
  |}
|};
export type OpticalNodeDetailsQuery = {|
  variables: OpticalNodeDetailsQueryVariables,
  response: OpticalNodeDetailsQueryResponse,
|};
*/


/*
query OpticalNodeDetailsQuery(
  $opticalNodeId: ID!
) {
  getOpticalNodeById(id: $opticalNodeId) {
    ...OpticalNodeUpdateForm_opticalNode
    __typename
    id
    name
    description
    type {
      id
      name
      value
    }
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
    rack_units
    rack_position
    rack_back
    operational_state {
      id
      name
      value
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

fragment OpticalNodeUpdateForm_opticalNode on OpticalNode {
  __typename
  id
  name
  description
  type {
    id
    name
    value
  }
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
  rack_units
  rack_position
  rack_back
  operational_state {
    id
    name
    value
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
    "name": "opticalNodeId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "opticalNodeId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = [
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "type",
  "plural": false,
  "selections": (v6/*: any*/),
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_units",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_position",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_back",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "operational_state",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
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
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OpticalNodeDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OpticalNode",
        "kind": "LinkedField",
        "name": "getOpticalNodeById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Port",
            "kind": "LinkedField",
            "name": "ports",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v2/*: any*/),
              (v8/*: any*/),
              {
                "alias": "type",
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "port_type",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CommentType",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              (v3/*: any*/),
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
            "name": "OpticalNodeUpdateForm_opticalNode"
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
    "name": "OpticalNodeDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OpticalNode",
        "kind": "LinkedField",
        "name": "getOpticalNodeById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Port",
            "kind": "LinkedField",
            "name": "ports",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v2/*: any*/),
              (v8/*: any*/),
              {
                "alias": "type",
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "port_type",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CommentType",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              (v3/*: any*/),
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
                  (v3/*: any*/)
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OpticalNodeDetailsQuery",
    "operationKind": "query",
    "text": "query OpticalNodeDetailsQuery(\n  $opticalNodeId: ID!\n) {\n  getOpticalNodeById(id: $opticalNodeId) {\n    ...OpticalNodeUpdateForm_opticalNode\n    __typename\n    id\n    name\n    description\n    type {\n      id\n      name\n      value\n    }\n    ports {\n      id\n      name\n      __typename\n      relation_id\n      type: port_type {\n        name\n        id\n      }\n    }\n    rack_units\n    rack_position\n    rack_back\n    operational_state {\n      id\n      name\n      value\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment OpticalNodeUpdateForm_opticalNode on OpticalNode {\n  __typename\n  id\n  name\n  description\n  type {\n    id\n    name\n    value\n  }\n  ports {\n    id\n    name\n    __typename\n    relation_id\n    type: port_type {\n      name\n      id\n    }\n  }\n  rack_units\n  rack_position\n  rack_back\n  operational_state {\n    id\n    name\n    value\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecf340f429483f53661d31f0a6aeff94';

module.exports = node;
