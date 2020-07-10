/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EndUserQueryVariables = {|
  endUserId: string
|};
export type EndUserQueryResponse = {|
  +getEndUserById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
  |}
|};
export type EndUserQuery = {|
  variables: EndUserQueryVariables,
  response: EndUserQueryResponse,
|};
*/


/*
query EndUserQuery(
  $endUserId: ID!
) {
  getEndUserById(id: $endUserId) {
    __typename
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "endUserId",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "endUserId"
      }
    ],
    "concreteType": "EndUser",
    "kind": "LinkedField",
    "name": "getEndUserById",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EndUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EndUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "EndUserQuery",
    "operationKind": "query",
    "text": "query EndUserQuery(\n  $endUserId: ID!\n) {\n  getEndUserById(id: $endUserId) {\n    __typename\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'be3ba3491ea995e7fa104cd38d55bd15';

module.exports = node;
