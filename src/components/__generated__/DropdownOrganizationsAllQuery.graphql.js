/**
 * @flow
 * @relayHash 8cb18ec8f438e9cdfd8b2c401077eaad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownOrganizationsAllQueryVariables = {||};
export type DropdownOrganizationsAllQueryResponse = {|
  +all_organizations: ?$ReadOnlyArray<?{|
    +handle_id: string,
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
    handle_id
    node_name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "node_name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DropdownOrganizationsAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "all_organizations",
        "storageKey": null,
        "args": null,
        "concreteType": "Organization",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DropdownOrganizationsAllQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "all_organizations",
        "storageKey": null,
        "args": null,
        "concreteType": "Organization",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    "name": "DropdownOrganizationsAllQuery",
    "id": null,
    "text": "query DropdownOrganizationsAllQuery {\n  all_organizations {\n    handle_id\n    node_name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c5f5b97a83c6f451a068e9bbcb676aa1';
module.exports = node;
