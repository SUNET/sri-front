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
    +name: string,
  |}>
|};
export type DropdownGroupsAllQuery = {|
  variables: DropdownGroupsAllQueryVariables,
  response: DropdownGroupsAllQueryResponse,
|};
*/


/*
query DropdownGroupsAllQuery {
  all_groups {
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
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "all_groups",
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
    "text": "query DropdownGroupsAllQuery {\n  all_groups {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '92f11ba21e30772aa66684dbd79a7699';

module.exports = node;
