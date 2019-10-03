/**
 * @flow
 * @relayHash 3a8b207daaa32158b2e66e6b518b0998
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
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
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "first_name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "last_name",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "comment",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "submit_date",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupRefetchQuery",
    "id": null,
    "text": "query GroupRefetchQuery(\n  $groupId: Int!\n) {\n  getGroupById(handle_id: $groupId) {\n    ...Group_group\n    id\n  }\n}\n\nfragment Group_group on Group {\n  handle_id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '784cd03e3b35f4d89e9ea315326594a0';
module.exports = node;
