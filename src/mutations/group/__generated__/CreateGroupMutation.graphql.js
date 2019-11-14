/**
 * @flow
 * @relayHash 7a496ae2e3842b9eff179b2b19f4abe1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeGroupMutationInput = {|
  create_input?: ?CreateGroupInput,
  update_input?: ?UpdateGroupInput,
  create_subinputs?: ?$ReadOnlyArray<?CreateContactInput>,
  update_subinputs?: ?$ReadOnlyArray<?UpdateContactInput>,
  delete_subinputs?: ?$ReadOnlyArray<?DeleteContactInput>,
  clientMutationId?: ?string,
|};
export type CreateGroupInput = {|
  name: string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateGroupInput = {|
  name: string,
  description?: ?string,
  relationship_member_of?: ?any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type CreateContactInput = {|
  first_name: string,
  last_name: string,
  contact_type: any,
  name?: ?string,
  title?: ?string,
  pgp_fingerprint?: ?string,
  notes?: ?string,
  relationship_works_for?: ?any,
  relationship_member_of?: ?any,
  role?: ?any,
  email_handle_id?: ?number,
  email?: ?string,
  email_type?: ?any,
  phone_handle_id?: ?number,
  phone?: ?string,
  phone_type?: ?any,
  clientMutationId?: ?string,
|};
export type UpdateContactInput = {|
  first_name: string,
  last_name: string,
  contact_type: any,
  name?: ?string,
  title?: ?string,
  pgp_fingerprint?: ?string,
  notes?: ?string,
  relationship_works_for?: ?any,
  relationship_member_of?: ?any,
  role?: ?any,
  email_handle_id?: ?number,
  email?: ?string,
  email_type?: ?any,
  phone_handle_id?: ?number,
  phone?: ?string,
  phone_type?: ?any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteContactInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type CreateGroupMutationVariables = {|
  input: CompositeGroupMutationInput
|};
export type CreateGroupMutationResponse = {|
  +composite_group: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +group: ?{|
        +handle_id: string,
        +name: string,
        +description: ?string,
      |},
    |},
    +subcreated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +contact: ?{|
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
        +member_of_groups: ?$ReadOnlyArray<?{|
          +name: string
        |}>,
      |},
    |}>,
    +subupdated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +contact: ?{|
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
        +member_of_groups: ?$ReadOnlyArray<?{|
          +name: string
        |}>,
      |},
    |}>,
  |}
|};
export type CreateGroupMutation = {|
  variables: CreateGroupMutationVariables,
  response: CreateGroupMutationResponse,
|};
*/


/*
mutation CreateGroupMutation(
  $input: CompositeGroupMutationInput!
) {
  composite_group(input: $input) {
    created {
      errors {
        field
        messages
      }
      group {
        handle_id
        name
        description
        id
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      contact {
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
        member_of_groups {
          name
          id
        }
        id
      }
    }
    subupdated {
      errors {
        field
        messages
      }
      contact {
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
        member_of_groups {
          name
          id
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CompositeGroupMutationInput!",
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
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contact",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": false,
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
        "name": "member_of_groups",
        "storageKey": null,
        "args": null,
        "concreteType": "Group",
        "plural": true,
        "selections": [
          (v4/*: any*/)
        ]
      }
    ]
  }
],
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v13 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v9/*: any*/),
  (v12/*: any*/)
],
v14 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contact",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": false,
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
        "selections": (v13/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "phones",
        "storageKey": null,
        "args": null,
        "concreteType": "Phone",
        "plural": true,
        "selections": (v13/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "member_of_groups",
        "storageKey": null,
        "args": null,
        "concreteType": "Group",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v12/*: any*/)
        ]
      },
      (v12/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeGroupMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateGroupPayload",
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
                  (v5/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcreated",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "plural": true,
            "selections": (v11/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": true,
            "selections": (v11/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeGroupMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateGroupPayload",
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
                  (v12/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcreated",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "plural": true,
            "selections": (v14/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": true,
            "selections": (v14/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateGroupMutation",
    "id": null,
    "text": "mutation CreateGroupMutation(\n  $input: CompositeGroupMutationInput!\n) {\n  composite_group(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      group {\n        handle_id\n        name\n        description\n        id\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        handle_id\n        first_name\n        last_name\n        contact_type\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        member_of_groups {\n          name\n          id\n        }\n        id\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        handle_id\n        first_name\n        last_name\n        contact_type\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        member_of_groups {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cf5c4690d32815e911a26dfe64c51204';
module.exports = node;
