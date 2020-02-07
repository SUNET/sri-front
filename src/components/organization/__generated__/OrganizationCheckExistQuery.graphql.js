/**
 * @flow
 * @relayHash 4d44e018af3d938b36ddcae7380059cb
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
    "kind": "LocalArgument",
    "name": "organization_id",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "checkExistentOrganizationId",
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
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationCheckExistQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizationCheckExistQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "OrganizationCheckExistQuery",
    "id": null,
    "text": "query OrganizationCheckExistQuery(\n  $organization_id: String!\n  $id: ID\n) {\n  checkExistentOrganizationId(organization_id: $organization_id, id: $id)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ff6b7afed5a6db7b309093611fb404ce';
module.exports = node;
