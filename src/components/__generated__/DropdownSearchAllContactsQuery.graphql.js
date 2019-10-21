/**
 * @flow
 * @relayHash 9b50a315e75828963ad9555056f6610a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownSearchAllContactsQueryVariables = {||};
export type DropdownSearchAllContactsQueryResponse = {|
  +all_contacts: ?$ReadOnlyArray<?{|
    +handle_id: string,
    +name: string,
  |}>
|};
export type DropdownSearchAllContactsQuery = {|
  variables: DropdownSearchAllContactsQueryVariables,
  response: DropdownSearchAllContactsQueryResponse,
|};
*/


/*
query DropdownSearchAllContactsQuery {
  all_contacts {
    handle_id
    name
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
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DropdownSearchAllContactsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "all_contacts",
        "storageKey": null,
        "args": null,
        "concreteType": "Contact",
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
    "name": "DropdownSearchAllContactsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "all_contacts",
        "storageKey": null,
        "args": null,
        "concreteType": "Contact",
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
    "name": "DropdownSearchAllContactsQuery",
    "id": null,
    "text": "query DropdownSearchAllContactsQuery {\n  all_contacts {\n    handle_id\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '623d3e5564d34b1224e6209b9d82c660';
module.exports = node;
