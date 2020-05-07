/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrganizationCheckExistQueryVariables = {|
  organization_id: string,
  id?: ?string,
|};
export type OrganizationCheckExistQueryResponse = {|
  +checkExistentOrganizationId: ?boolean
|};
export type OrganizationCheckExistQuery = {|
  variables: OrganizationCheckExistQueryVariables,
  response: OrganizationCheckExistQueryResponse,
|};
*/


/*
query OrganizationCheckExistQuery(
  $organization_id: String!
  $id: ID
) {
  checkExistentOrganizationId(organization_id: $organization_id, id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organization_id",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "organization_id",
        "variableName": "organization_id"
      }
    ],
    "kind": "ScalarField",
    "name": "checkExistentOrganizationId",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrganizationCheckExistQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrganizationCheckExistQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrganizationCheckExistQuery",
    "operationKind": "query",
    "text": "query OrganizationCheckExistQuery(\n  $organization_id: String!\n  $id: ID\n) {\n  checkExistentOrganizationId(organization_id: $organization_id, id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ff6b7afed5a6db7b309093611fb404ce';

module.exports = node;
