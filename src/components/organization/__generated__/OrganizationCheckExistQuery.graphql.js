/**
 * @flow
 * @relayHash caba9efc394a4984f6676d143f39f4dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrganizationCheckExistQueryVariables = {|
  organization_id: string,
  handle_id?: ?number,
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
  $handle_id: Int
) {
  checkExistentOrganizationId(organization_id: $organization_id, handle_id: $handle_id)
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
    "name": "handle_id",
    "type": "Int",
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
        "name": "handle_id",
        "variableName": "handle_id"
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
    "text": "query OrganizationCheckExistQuery(\n  $organization_id: String!\n  $handle_id: Int\n) {\n  checkExistentOrganizationId(organization_id: $organization_id, handle_id: $handle_id)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0136d42555016aba28100657699943ef';
module.exports = node;
