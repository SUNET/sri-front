/**
 * @flow
 * @relayHash 5d071f3749a44e5d2cc85d4f653f3f76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContactQueryVariables = {|
  contactId: string
|};
export type ContactQueryResponse = {|
  +getContactById: ?{|
    +id: string,
    +name: string,
    +first_name: string,
    +last_name: string,
    +contact_type: ?any,
    +emails: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: any,
    |}>,
    +phones: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: any,
    |}>,
    +roles: ?$ReadOnlyArray<?{|
      +role_data: ?{|
        +id: string,
        +name: string,
      |},
      +end: ?{|
        +id: string,
        +name: string,
      |},
    |}>,
  |}
|};
export type ContactQuery = {|
  variables: ContactQueryVariables,
  response: ContactQueryResponse,
|};
*/


/*
query ContactQuery(
  $contactId: ID!
) {
  getContactById(id: $contactId) {
    id
    name
    first_name
    last_name
    contact_type
    emails {
      id
      name
      type
    }
    phones {
      id
      name
      type
    }
    roles {
      role_data {
        id
        name
      }
      end {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "contactId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "type",
    "args": null,
    "storageKey": null
  }
],
v4 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "getContactById",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "contactId"
      }
    ],
    "concreteType": "Contact",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "first_name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "last_name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "contact_type",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "emails",
        "storageKey": null,
        "args": null,
        "concreteType": "Email",
        "plural": true,
        "selections": (v3/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "phones",
        "storageKey": null,
        "args": null,
        "concreteType": "Phone",
        "plural": true,
        "selections": (v3/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "roles",
        "storageKey": null,
        "args": null,
        "concreteType": "RoleRelation",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "role_data",
            "storageKey": null,
            "args": null,
            "concreteType": "Role",
            "plural": false,
            "selections": (v4/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "end",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": (v4/*: any*/)
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContactQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ContactQuery",
    "id": null,
    "text": "query ContactQuery(\n  $contactId: ID!\n) {\n  getContactById(id: $contactId) {\n    id\n    name\n    first_name\n    last_name\n    contact_type\n    emails {\n      id\n      name\n      type\n    }\n    phones {\n      id\n      name\n      type\n    }\n    roles {\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6cbef5eea774d496629ee8c1d6614de4';
module.exports = node;
