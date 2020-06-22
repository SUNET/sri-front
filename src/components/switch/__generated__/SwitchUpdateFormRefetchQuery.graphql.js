/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SwitchUpdateForm_switch$ref = any;
export type SwitchUpdateFormRefetchQueryVariables = {|
  switchId: string
|};
export type SwitchUpdateFormRefetchQueryResponse = {|
  +getSwitchById: ?{|
    +$fragmentRefs: SwitchUpdateForm_switch$ref
  |}
|};
export type SwitchUpdateFormRefetchQuery = {|
  variables: SwitchUpdateFormRefetchQueryVariables,
  response: SwitchUpdateFormRefetchQueryResponse,
|};
*/


/*
query SwitchUpdateFormRefetchQuery(
  $switchId: ID!
) {
  getSwitchById(id: $switchId) {
    ...SwitchUpdateForm_switch
    id
  }
}

fragment SwitchUpdateForm_switch on Switch {
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
    "name": "switchId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "switchId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
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
    "name": "SwitchUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Switch",
        "kind": "LinkedField",
        "name": "getSwitchById",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SwitchUpdateForm_switch"
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
    "name": "SwitchUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Switch",
        "kind": "LinkedField",
        "name": "getSwitchById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
            "selections": (v3/*: any*/),
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
            "selections": (v3/*: any*/),
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
    "name": "SwitchUpdateFormRefetchQuery",
    "operationKind": "query",
    "text": "query SwitchUpdateFormRefetchQuery(\n  $switchId: ID!\n) {\n  getSwitchById(id: $switchId) {\n    ...SwitchUpdateForm_switch\n    id\n  }\n}\n\nfragment SwitchUpdateForm_switch on Switch {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dffe50a801a2822dfb39a6d6e41f5f0c';

module.exports = node;
