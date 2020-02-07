/**
 * @flow
 * @relayHash dd0fea97139ae921e536803357332c3b
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
    "text": "query DropdownOrganizationsAllQuery {\n  all_organizations {\n    id\n    node_name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bca0427cc4807c448ae4fe6abe6090f7';
module.exports = node;
