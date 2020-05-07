/**
 * @flow
 * @relayHash ad9aefc9c8400fe2241b9db3aef8a62c
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
        "name": "name",
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
    "text": "query DropdownOrganizationsAllQuery {\n  all_organizations {\n    id\n    name\n    organization_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c86e20ef5c885c735a7350384b0b3780';

module.exports = node;
