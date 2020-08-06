/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HostUserQueryVariables = {|
  hostUserId: string
|};
export type HostUserQueryResponse = {|
  +getHostUserById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
  |}
|};
export type HostUserQuery = {|
  variables: HostUserQueryVariables,
  response: HostUserQueryResponse,
|};
*/


/*
query HostUserQuery(
  $hostUserId: ID!
) {
  getHostUserById(id: $hostUserId) {
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
    "name": "hostUserId",
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
        "variableName": "hostUserId"
      }
    ],
    "concreteType": "HostUser",
    "kind": "LinkedField",
    "name": "getHostUserById",
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
    "name": "HostUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HostUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "HostUserQuery",
    "operationKind": "query",
    "text": "query HostUserQuery(\n  $hostUserId: ID!\n) {\n  getHostUserById(id: $hostUserId) {\n    __typename\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e7fd01b211d3b844090fcc7f4107701';

module.exports = node;
