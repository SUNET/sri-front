/**
 * @flow
 * @relayHash 413ef23a2906af0bc636072a2c857782
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateGroupInput = {|
  name: string,
  description?: ?string,
  relationship_member_of?: ?any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdateGroupMutationVariables = {|
  input: UpdateGroupInput
|};
export type UpdateGroupMutationResponse = {|
  +update_group: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +group: ?{|
      +handle_id: string,
      +name: string,
      +description: ?string,
      +contacts: ?$ReadOnlyArray<?{|
        +handle_id: string,
        +first_name: string,
        +last_name: string,
        +contact_type: ?any,
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
      |}>,
      +comments: ?$ReadOnlyArray<?{|
        +user: ?{|
          +first_name: string,
          +last_name: string,
        |},
        +comment: string,
        +submit_date: any,
      |}>,
    |},
  |}
|};
export type UpdateGroupMutation = {|
  variables: UpdateGroupMutationVariables,
  response: UpdateGroupMutationResponse,
|};
*/


/*
mutation UpdateGroupMutation(
  $input: UpdateGroupInput!
) {
  update_group(input: $input) {
    errors {
      field
      messages
    }
    group {
      handle_id
      name
      description
      contacts {
        handle_id
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
    "type": "UpdateGroupInput!",
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
  "kind": "LinkedField",
  "alias": null,
  "name": "errors",
  "storageKey": null,
  "args": null,
  "concreteType": "ErrorType",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "field",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "messages",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v10 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v9/*: any*/)
],
v11 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "role_data",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": (v11/*: any*/)
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v16 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v9/*: any*/),
  (v15/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateGroupPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contacts",
                "storageKey": null,
                "args": null,
                "concreteType": "Contact",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "emails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Email",
                    "plural": true,
                    "selections": (v10/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "phones",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Phone",
                    "plural": true,
                    "selections": (v10/*: any*/)
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
                      (v12/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organization",
                        "plural": false,
                        "selections": (v11/*: any*/)
                      }
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
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ]
                  },
                  (v13/*: any*/),
                  (v14/*: any*/)
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
    "name": "UpdateGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateGroupPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contacts",
                "storageKey": null,
                "args": null,
                "concreteType": "Contact",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "emails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Email",
                    "plural": true,
                    "selections": (v16/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "phones",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Phone",
                    "plural": true,
                    "selections": (v16/*: any*/)
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
                      (v12/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organization",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v15/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v15/*: any*/)
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
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v15/*: any*/)
                    ]
                  },
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
                ]
              },
              (v15/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateGroupMutation",
    "id": null,
    "text": "mutation UpdateGroupMutation(\n  $input: UpdateGroupInput!\n) {\n  update_group(input: $input) {\n    errors {\n      field\n      messages\n    }\n    group {\n      handle_id\n      name\n      description\n      contacts {\n        handle_id\n        first_name\n        last_name\n        contact_type\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        roles {\n          role_data {\n            handle_id\n            name\n          }\n          end {\n            handle_id\n            name\n            id\n          }\n        }\n        id\n      }\n      comments {\n        user {\n          first_name\n          last_name\n          id\n        }\n        comment\n        submit_date\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2d0080ad3e7a2b0bbb5291e44f59c821';
module.exports = node;
