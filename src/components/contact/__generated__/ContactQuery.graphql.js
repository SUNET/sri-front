/**
 * @flow
 * @relayHash f2a440ab90e408faae070501b4c2a01e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContactQueryVariables = {|
  contactId: number
|};
export type ContactQueryResponse = {|
  +getContactById: ?{|
    +handle_id: string,
    +name: string,
    +first_name: string,
    +last_name: string,
    +contact_type: ?string,
    +emails: ?$ReadOnlyArray<?{|
      +handle_id: string,
      +name: string,
      +type: any,
    |}>,
    +phones: ?$ReadOnlyArray<?{|
      +handle_id: string,
      +name: string,
      +type: any,
    |}>,
    +roles: ?$ReadOnlyArray<?{|
      +role_data: ?{|
        +handle_id: string,
        +name: string,
      |},
      +end: ?{|
        +handle_id: string,
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
  $contactId: Int!
) {
  getContactById(handle_id: $contactId) {
    handle_id
    name
    first_name
    last_name
    contact_type
    emails {
      handle_id
      name
      type
      id
    }
    phones {
      handle_id
      name
      type
      id
    }
    roles {
      role_data {
        handle_id
        name
      }
      end {
        handle_id
        name
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "contactId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "contactId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
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
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v7/*: any*/)
],
v9 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "role_data",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": (v9/*: any*/)
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v12 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v7/*: any*/),
  (v11/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContactQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getContactById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "emails",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": true,
            "selections": (v8/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones",
            "storageKey": null,
            "args": null,
            "concreteType": "Phone",
            "plural": true,
            "selections": (v8/*: any*/)
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
              (v10/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": (v9/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getContactById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "emails",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": true,
            "selections": (v12/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones",
            "storageKey": null,
            "args": null,
            "concreteType": "Phone",
            "plural": true,
            "selections": (v12/*: any*/)
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
              (v10/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v11/*: any*/)
                ]
              }
            ]
          },
          (v11/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ContactQuery",
    "id": null,
    "text": "query ContactQuery(\n  $contactId: Int!\n) {\n  getContactById(handle_id: $contactId) {\n    handle_id\n    name\n    first_name\n    last_name\n    contact_type\n    emails {\n      handle_id\n      name\n      type\n      id\n    }\n    phones {\n      handle_id\n      name\n      type\n      id\n    }\n    roles {\n      role_data {\n        handle_id\n        name\n      }\n      end {\n        handle_id\n        name\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0fcc9767225a6048df5e0c88130ef3f8';
module.exports = node;
