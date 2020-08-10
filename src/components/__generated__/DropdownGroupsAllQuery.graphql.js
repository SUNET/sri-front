/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownGroupsAllQueryVariables = {||};
export type DropdownGroupsAllQueryResponse = {|
  +all_groups: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>
|};
export type DropdownGroupsAllQuery = {|
  variables: DropdownGroupsAllQueryVariables,
  response: DropdownGroupsAllQueryResponse,
|};
*/


/*
query DropdownGroupsAllQuery {
  all_groups: getPlainGroups {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": "all_groups",
    "args": null,
    "concreteType": "PlainGroup",
    "kind": "LinkedField",
    "name": "getPlainGroups",
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
    "name": "DropdownGroupsAllQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownGroupsAllQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownGroupsAllQuery",
    "operationKind": "query",
    "text": "query DropdownGroupsAllQuery {\n  all_groups: getPlainGroups {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a8d9b0f71f2e9879ae1017e5625c0bb';

module.exports = node;
