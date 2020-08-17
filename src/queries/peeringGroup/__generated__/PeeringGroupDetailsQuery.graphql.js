/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeeringGroupUpdateForm_peeringGroup$ref = any;
export type PeeringGroupDetailsQueryVariables = {|
  peeringGroupId: string
|};
export type PeeringGroupDetailsQueryResponse = {|
  +getPeeringGroupById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +dependencies: ?$ReadOnlyArray<?{|
      +__typename: string,
      +type: string,
      +relation_id: ?number,
      +id: string,
      +name: string,
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
    +creator: ?{|
      +email: string
    |},
    +modified: any,
    +modifier: ?{|
      +email: string
    |},
    +$fragmentRefs: PeeringGroupUpdateForm_peeringGroup$ref,
  |}
|};
export type PeeringGroupDetailsQuery = {|
  variables: PeeringGroupDetailsQueryVariables,
  response: PeeringGroupDetailsQueryResponse,
|};
*/


/*
query PeeringGroupDetailsQuery(
  $peeringGroupId: ID!
) {
  getPeeringGroupById(id: $peeringGroupId) {
    ...PeeringGroupUpdateForm_peeringGroup
    __typename
    id
    name
    dependencies {
      __typename
      type: __typename
      relation_id
      id
      name
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

fragment PeeringGroupUpdateForm_peeringGroup on PeeringGroup {
  id
  name
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
    "name": "peeringGroupId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "peeringGroupId"
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
  "concreteType": null,
  "kind": "LinkedField",
  "name": "dependencies",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "alias": "type",
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "relation_id",
      "storageKey": null
    },
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v12 = [
  (v11/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v14 = [
  (v11/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PeeringGroupDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PeeringGroup",
        "kind": "LinkedField",
        "name": "getPeeringGroupById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v12/*: any*/),
            "storageKey": null
          },
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v12/*: any*/),
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PeeringGroupUpdateForm_peeringGroup"
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
    "name": "PeeringGroupDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PeeringGroup",
        "kind": "LinkedField",
        "name": "getPeeringGroupById",
        "plural": false,
        "selections": [
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
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          (v2/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PeeringGroupDetailsQuery",
    "operationKind": "query",
    "text": "query PeeringGroupDetailsQuery(\n  $peeringGroupId: ID!\n) {\n  getPeeringGroupById(id: $peeringGroupId) {\n    ...PeeringGroupUpdateForm_peeringGroup\n    __typename\n    id\n    name\n    dependencies {\n      __typename\n      type: __typename\n      relation_id\n      id\n      name\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment PeeringGroupUpdateForm_peeringGroup on PeeringGroup {\n  id\n  name\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '694e78a2c05cf11e5e044d0c9b54f347';

module.exports = node;
