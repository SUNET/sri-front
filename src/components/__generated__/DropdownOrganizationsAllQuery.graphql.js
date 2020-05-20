/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownOrganizationsAllQueryVariables = {||};
export type DropdownOrganizationsAllQueryResponse = {|
  +all_organizations: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
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
    name
    organization_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Organization",
    "kind": "LinkedField",
    "name": "all_organizations",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "organization_id",
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
    "name": "DropdownOrganizationsAllQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownOrganizationsAllQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownOrganizationsAllQuery",
    "operationKind": "query",
    "text": "query DropdownOrganizationsAllQuery {\n  all_organizations {\n    id\n    name\n    organization_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c86e20ef5c885c735a7350384b0b3780';

module.exports = node;
