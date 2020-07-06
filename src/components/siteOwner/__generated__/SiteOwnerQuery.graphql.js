/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SiteOwnerQueryVariables = {|
  siteOwnerId: string
|};
export type SiteOwnerQueryResponse = {|
  +getSiteOwnerById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
  |}
|};
export type SiteOwnerQuery = {|
  variables: SiteOwnerQueryVariables,
  response: SiteOwnerQueryResponse,
|};
*/


/*
query SiteOwnerQuery(
  $siteOwnerId: ID!
) {
  getSiteOwnerById(id: $siteOwnerId) {
    __typename
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "siteOwnerId",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "siteOwnerId"
      }
    ],
    "concreteType": "SiteOwner",
    "kind": "LinkedField",
    "name": "getSiteOwnerById",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SiteOwnerQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SiteOwnerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SiteOwnerQuery",
    "operationKind": "query",
    "text": "query SiteOwnerQuery(\n  $siteOwnerId: ID!\n) {\n  getSiteOwnerById(id: $siteOwnerId) {\n    __typename\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fd97e2ff3a811037bdf1884d0a6c3f81';

module.exports = node;
