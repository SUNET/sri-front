/**
 * @flow
 * @relayHash 83bf61e9bf6c1db12fad5f9208368f59
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Organization_organization$ref = any;
export type OrganizationRefetchQueryVariables = {|
  organizationId: number
|};
export type OrganizationRefetchQueryResponse = {|
  +getOrganizationById: ?{|
    +$fragmentRefs: Organization_organization$ref
  |}
|};
export type OrganizationRefetchQuery = {|
  variables: OrganizationRefetchQueryVariables,
  response: OrganizationRefetchQueryResponse,
|};
*/


/*
query OrganizationRefetchQuery(
  $organizationId: Int!
) {
  getOrganizationById(handle_id: $organizationId) {
    ...Organization_organization
    id
  }
}

fragment Organization_organization on Organization {
  handle_id
  name
  type
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "organizationId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "organizationId"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Organization_organization",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizationRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "handle_id",
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
            "name": "type",
            "args": null,
            "storageKey": null
          },
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
    "name": "OrganizationRefetchQuery",
    "id": null,
    "text": "query OrganizationRefetchQuery(\n  $organizationId: Int!\n) {\n  getOrganizationById(handle_id: $organizationId) {\n    ...Organization_organization\n    id\n  }\n}\n\nfragment Organization_organization on Organization {\n  handle_id\n  name\n  type\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3a81b47e4c3c28616c7e1c5bedfe17cc';
module.exports = node;
