/**
 * @flow
 * @relayHash cc4db3dcd5cc02fea76bdd57df772ce6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CustomerUpdateForm_customer$ref = any;
export type CustomerDetailsQueryVariables = {|
  customerId: string
|};
export type CustomerDetailsQueryResponse = {|
  +getCustomerById: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +created: any,
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: CustomerUpdateForm_customer$ref,
  |}
|};
export type CustomerDetailsQuery = {|
  variables: CustomerDetailsQueryVariables,
  response: CustomerDetailsQueryResponse,
|};
*/


/*
query CustomerDetailsQuery(
  $customerId: ID!
) {
  getCustomerById(id: $customerId) {
    ...CustomerUpdateForm_customer
    id
    name
    description
    created
    creator {
      email
      id
    }
    modified
    modifier {
      email
      id
    }
  }
}

fragment CustomerUpdateForm_customer on Customer {
  id
  name
  description
  url
  created
  creator {
    email
    id
  }
  modified
  modifier {
    email
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "customerId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "customerId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v7 = [
  (v6/*: any*/)
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v9 = [
  (v6/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CustomerDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getCustomerById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Customer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v7/*: any*/)
          },
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v7/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "CustomerUpdateForm_customer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CustomerDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getCustomerById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Customer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v9/*: any*/)
          },
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v9/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CustomerDetailsQuery",
    "id": null,
    "text": "query CustomerDetailsQuery(\n  $customerId: ID!\n) {\n  getCustomerById(id: $customerId) {\n    ...CustomerUpdateForm_customer\n    id\n    name\n    description\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment CustomerUpdateForm_customer on Customer {\n  id\n  name\n  description\n  url\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f70515eed7452298a988cf17212b7557';
module.exports = node;
