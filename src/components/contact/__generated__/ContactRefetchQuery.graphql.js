/**
 * @flow
 * @relayHash dd4e96945d487c3d9a64db6a64e2bf38
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Contact_contact$ref = any;
export type ContactRefetchQueryVariables = {|
  contactId: number
|};
export type ContactRefetchQueryResponse = {|
  +getContactById: ?{|
    +$fragmentRefs: Contact_contact$ref
  |}
|};
export type ContactRefetchQuery = {|
  variables: ContactRefetchQueryVariables,
  response: ContactRefetchQueryResponse,
|};
*/


/*
query ContactRefetchQuery(
  $contactId: Int!
) {
  getContactById(handle_id: $contactId) {
    ...Contact_contact
    id
  }
}

fragment Contact_contact on Contact {
  handle_id
  title
  contact_type
  first_name
  last_name
  email
  phone
  pgp_fingerprint
  roles {
    name
    end {
      handle_id
      name
      id
    }
  }
  comments {
    id
    user {
      first_name
      last_name
      id
    }
    comment
    submit_date
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
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContactRefetchQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "Contact_contact",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactRefetchQuery",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
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
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "phone",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pgp_fingerprint",
            "args": null,
            "storageKey": null
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
              (v5/*: any*/),
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
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "comment",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "submit_date",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ContactRefetchQuery",
    "id": null,
    "text": "query ContactRefetchQuery(\n  $contactId: Int!\n) {\n  getContactById(handle_id: $contactId) {\n    ...Contact_contact\n    id\n  }\n}\n\nfragment Contact_contact on Contact {\n  handle_id\n  title\n  contact_type\n  first_name\n  last_name\n  email\n  phone\n  pgp_fingerprint\n  roles {\n    name\n    end {\n      handle_id\n      name\n      id\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfdc090bdcd717e2be568459fb5c2af8';
module.exports = node;
