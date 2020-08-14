/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpticalNodeUpdateForm_opticalNode$ref = any;
export type OpticalNodeUpdateFormRefetchQueryVariables = {|
  opticalNodeId: string
|};
export type OpticalNodeUpdateFormRefetchQueryResponse = {|
  +getOpticalNodeById: ?{|
    +$fragmentRefs: OpticalNodeUpdateForm_opticalNode$ref
  |}
|};
export type OpticalNodeUpdateFormRefetchQuery = {|
  variables: OpticalNodeUpdateFormRefetchQueryVariables,
  response: OpticalNodeUpdateFormRefetchQueryResponse,
|};
*/


/*
query OpticalNodeUpdateFormRefetchQuery(
  $opticalNodeId: ID!
) {
  getOpticalNodeById(id: $opticalNodeId) {
    ...OpticalNodeUpdateForm_opticalNode
    id
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
v5 = [
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
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  },
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OpticalNodeUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OpticalNode",
        "kind": "LinkedField",
        "name": "getOpticalNodeById",
        "plural": false,
        "selections": [
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
    "name": "OpticalNodeUpdateFormRefetchQuery",
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
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "type",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "relation_id",
                "storageKey": null
              },
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rack_units",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rack_position",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rack_back",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "operational_state",
            "plural": false,
            "selections": (v5/*: any*/),
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
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "first_name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "last_name",
                    "storageKey": null
                  },
                  (v3/*: any*/)
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
            "selections": (v6/*: any*/),
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
            "selections": (v6/*: any*/),
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
    "name": "OpticalNodeUpdateFormRefetchQuery",
    "operationKind": "query",
    "text": "query OpticalNodeUpdateFormRefetchQuery(\n  $opticalNodeId: ID!\n) {\n  getOpticalNodeById(id: $opticalNodeId) {\n    ...OpticalNodeUpdateForm_opticalNode\n    id\n  }\n}\n\nfragment OpticalNodeUpdateForm_opticalNode on OpticalNode {\n  __typename\n  id\n  name\n  description\n  type {\n    id\n    name\n    value\n  }\n  ports {\n    id\n    name\n    __typename\n    relation_id\n    type: port_type {\n      name\n      id\n    }\n  }\n  rack_units\n  rack_position\n  rack_back\n  operational_state {\n    id\n    name\n    value\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd6586cfbbed4cc43261edb75a6f01c88';

module.exports = node;
