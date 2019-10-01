/**
 * @flow
 * @relayHash 91c2a9b2636e50b75deebcee7b27fe1f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Group_group$ref = any;
export type GroupRefetchQueryVariables = {|
  groupId: number
|};
export type GroupRefetchQueryResponse = {|
  +getGroupById: ?{|
    +$fragmentRefs: Group_group$ref
  |}
|};
export type GroupRefetchQuery = {|
  variables: GroupRefetchQueryVariables,
  response: GroupRefetchQueryResponse,
|};
*/


/*
query GroupRefetchQuery(
  $groupId: Int!
) {
  getGroupById(handle_id: $groupId) {
    ...Group_group
    id
  }
}

fragment Group_group on Group {
  handle_id
  name
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "groupId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "groupId"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GroupRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Group_group",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "GroupRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "handle_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupRefetchQuery",
    "id": null,
    "text": "query GroupRefetchQuery(\n  $groupId: Int!\n) {\n  getGroupById(handle_id: $groupId) {\n    ...Group_group\n    id\n  }\n}\n\nfragment Group_group on Group {\n  handle_id\n  name\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '784cd03e3b35f4d89e9ea315326594a0';
module.exports = node;
