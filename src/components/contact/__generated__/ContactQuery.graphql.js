/**
 * @flow
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
    +last_name: ?string,
    +contact_type: ?{|
      +name: string,
      +value: string,
    |},
    +emails: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: ?{|
        +name: string,
        +value: string,
      |},
    |}>,
    +phones: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: ?{|
        +name: string,
        +value: string,
      |},
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
    contact_type {
      name
      value
      id
    }
    emails {
      id
      name
      type {
        name
        value
        id
      }
    }
    phones {
      id
      name
      type {
        name
        value
        id
      }
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contactId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "contactId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  (v6/*: any*/)
],
v8 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v7/*: any*/),
    "storageKey": null
  }
],
v9 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "RoleRelation",
  "kind": "LinkedField",
  "name": "roles",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "role_data",
      "plural": false,
      "selections": (v9/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "end",
      "plural": false,
      "selections": (v9/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v11 = [
  (v3/*: any*/),
  (v6/*: any*/),
  (v2/*: any*/)
],
v12 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v11/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "getContactById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "contact_type",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Email",
            "kind": "LinkedField",
            "name": "emails",
            "plural": true,
            "selections": (v8/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Phone",
            "kind": "LinkedField",
            "name": "phones",
            "plural": true,
            "selections": (v8/*: any*/),
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "getContactById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "contact_type",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Email",
            "kind": "LinkedField",
            "name": "emails",
            "plural": true,
            "selections": (v12/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Phone",
            "kind": "LinkedField",
            "name": "phones",
            "plural": true,
            "selections": (v12/*: any*/),
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ContactQuery",
    "operationKind": "query",
    "text": "query ContactQuery(\n  $contactId: ID!\n) {\n  getContactById(id: $contactId) {\n    id\n    name\n    first_name\n    last_name\n    contact_type {\n      name\n      value\n      id\n    }\n    emails {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    phones {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    roles {\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91573d5bc1a1f4dec45243e9fcdf7e73';

module.exports = node;
