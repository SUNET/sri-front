/**
 * @flow
 * @relayHash 6aca23b1bec9a90ddb5aa8aeb1a372f0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownOrganizationsAllQueryVariables = {||};
export type DropdownOrganizationsAllQueryResponse = {|
  +all_organizations: ?$ReadOnlyArray<?{|
    +id: string,
    +node_name: string,
    +organization_id: ?string,
  |}>
|};
export type DropdownOrganizationsAllQuery = {|
  variables: DropdownOrganizationsAllQueryVariables,
  response: DropdownOrganizationsAllQueryResponse,
|};
*/


/*
query DropdownOrganizationsAllQuery {
  all_organizations {
    id
    node_name
    organization_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "all_organizations",
    "storageKey": null,
    "args": null,
    "concreteType": "Organization",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "node_name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "organization_id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DropdownOrganizationsAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DropdownOrganizationsAllQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "DropdownOrganizationsAllQuery",
    "id": null,
    "text": "query DropdownOrganizationsAllQuery {\n  all_organizations {\n    id\n    node_name\n    organization_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3578568db59b0201d021324ca58841cc';
module.exports = node;
