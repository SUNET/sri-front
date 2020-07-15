/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FirewallQueryVariables = {|
  firewallId: string
|};
export type FirewallQueryResponse = {|
  +getFirewallById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +description: ?string,
    +operational_state: string,
    +type: string,
  |}
|};
export type FirewallQuery = {|
  variables: FirewallQueryVariables,
  response: FirewallQueryResponse,
|};
*/


/*
query FirewallQuery(
  $firewallId: ID!
) {
  getFirewallById(id: $firewallId) {
    __typename
    id
    name
    description
    operational_state
    type: __typename
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "firewallId",
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
        "variableName": "firewallId"
      }
    ],
    "concreteType": "Firewall",
    "kind": "LinkedField",
    "name": "getFirewallById",
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
        "kind": "ScalarField",
        "name": "operational_state",
        "storageKey": null
      },
      {
        "alias": "type",
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
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
    "name": "FirewallQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FirewallQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FirewallQuery",
    "operationKind": "query",
    "text": "query FirewallQuery(\n  $firewallId: ID!\n) {\n  getFirewallById(id: $firewallId) {\n    __typename\n    id\n    name\n    description\n    operational_state\n    type: __typename\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '741505a509022de6ced36512d77cc9e2';

module.exports = node;
