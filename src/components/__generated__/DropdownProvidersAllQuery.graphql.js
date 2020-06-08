/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownProvidersAllQueryVariables = {||};
export type DropdownProvidersAllQueryResponse = {|
  +all_providers: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
  |}>
|};
export type DropdownProvidersAllQuery = {|
  variables: DropdownProvidersAllQueryVariables,
  response: DropdownProvidersAllQueryResponse,
|};
*/


/*
query DropdownProvidersAllQuery {
  all_providers {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Provider",
    "kind": "LinkedField",
    "name": "all_providers",
    "plural": true,
    "selections": [
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DropdownProvidersAllQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownProvidersAllQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownProvidersAllQuery",
    "operationKind": "query",
    "text": "query DropdownProvidersAllQuery {\n  all_providers {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dafb6ebb3f8e0d9891f5fa105a847c90';

module.exports = node;
