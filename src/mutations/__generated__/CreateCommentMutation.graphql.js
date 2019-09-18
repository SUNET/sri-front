/**
 * @flow
 * @relayHash bb79cac091226213ffa0dc5701cda76e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCommentInput = {|
  object_pk: number,
  comment: string,
  clientMutationId?: ?string,
|};
export type CreateCommentMutationVariables = {|
  input: CreateCommentInput
|};
export type CreateCommentMutationResponse = {|
  +create_comment: ?{|
    +comment: ?{|
      +object_pk: string,
      +comment: string,
      +user: ?{|
        +first_name: string,
        +last_name: string,
      |},
      +submit_date: any,
    |}
  |}
|};
export type CreateCommentMutation = {|
  variables: CreateCommentMutationVariables,
  response: CreateCommentMutationResponse,
|};
*/


/*
mutation CreateCommentMutation(
  $input: CreateCommentInput!
) {
  create_comment(input: $input) {
    comment {
      object_pk
      comment
      user {
        first_name
        last_name
        id
      }
      submit_date
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "object_pk",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v7 = {
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
    "name": "CreateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_comment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              },
              (v6/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_comment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v7/*: any*/)
                ]
              },
              (v6/*: any*/),
              (v7/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCommentMutation",
    "id": null,
    "text": "mutation CreateCommentMutation(\n  $input: CreateCommentInput!\n) {\n  create_comment(input: $input) {\n    comment {\n      object_pk\n      comment\n      user {\n        first_name\n        last_name\n        id\n      }\n      submit_date\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57dce10d60c1b2141e1b7b9c1e064e50';
module.exports = node;