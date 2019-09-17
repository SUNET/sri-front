/**
 * @flow
 * @relayHash 0b97018461fe181a66d12e38f4b23421
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateContactInput = {|
  first_name: string,
  last_name: string,
  contact_type: any,
  mobile?: ?string,
  phone?: ?string,
  email?: ?string,
  other_email?: ?string,
  name?: ?string,
  title?: ?string,
  pgp_fingerprint?: ?string,
  notes?: ?string,
  relationship_works_for?: ?any,
  relationship_member_of?: ?any,
  role?: ?any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdateContactMutationVariables = {|
  input: UpdateContactInput
|};
export type UpdateContactMutationResponse = {|
  +update_contact: ?{|
    +contact: ?{|
      +handle_id: string,
      +title: ?string,
      +contact_type: ?string,
      +first_name: string,
      +last_name: string,
      +email: ?string,
      +phone: ?string,
      +pgp_fingerprint: ?string,
      +roles: ?$ReadOnlyArray<?{|
        +name: ?string,
        +end: ?{|
          +handle_id: string,
          +name: string,
        |},
      |}>,
      +comments: ?$ReadOnlyArray<?{|
        +user: ?{|
          +first_name: string,
          +last_name: string,
        |},
        +comment: string,
        +submit_date: any,
      |}>,
    |}
  |}
|};
export type UpdateContactMutation = {|
  variables: UpdateContactMutationVariables,
  response: UpdateContactMutationResponse,
|};
*/


/*
mutation UpdateContactMutation(
  $input: UpdateContactInput!
) {
  update_contact(input: $input) {
    contact {
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
        user {
          first_name
          last_name
          id
        }
        comment
        submit_date
        id
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateContactInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pgp_fingerprint",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v13 = {
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
    "name": "UpdateContactMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateContactPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
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
                      (v10/*: any*/)
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ]
                  },
                  (v11/*: any*/),
                  (v12/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateContactMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateContactPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
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
                      (v10/*: any*/),
                      (v13/*: any*/)
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v13/*: any*/)
                    ]
                  },
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/)
                ]
              },
              (v13/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateContactMutation",
    "id": null,
    "text": "mutation UpdateContactMutation(\n  $input: UpdateContactInput!\n) {\n  update_contact(input: $input) {\n    contact {\n      handle_id\n      title\n      contact_type\n      first_name\n      last_name\n      email\n      phone\n      pgp_fingerprint\n      roles {\n        name\n        end {\n          handle_id\n          name\n          id\n        }\n      }\n      comments {\n        user {\n          first_name\n          last_name\n          id\n        }\n        comment\n        submit_date\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a753fbd3e8facbf16aa0efdda332df34';
module.exports = node;
