/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeCableMutationInput = {|
  create_input?: ?CreateCableInput,
  update_input?: ?UpdateCableInput,
  create_subinputs?: ?$ReadOnlyArray<?CreatePortInput>,
  update_subinputs?: ?$ReadOnlyArray<?UpdatePortInput>,
  delete_subinputs?: ?$ReadOnlyArray<?DeletePortInput>,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_has_port?: ?CreatePortInput,
  update_has_port?: ?UpdatePortInput,
  deleted_has_port?: ?DeletePortInput,
  create_has_cable?: ?CreateCableInput,
  update_has_cable?: ?UpdateCableInput,
  deleted_has_cable?: ?DeleteCableInput,
  create_part_of_group?: ?CreateGroupInput,
  update_part_of_group?: ?UpdateGroupInput,
  deleted_part_of_group?: ?DeleteGroupInput,
  create_part_of_procedure?: ?CreateProcedureInput,
  update_part_of_procedure?: ?UpdateProcedureInput,
  deleted_part_of_procedure?: ?DeleteProcedureInput,
  create_part_of_address?: ?CreateAddressInput,
  update_part_of_address?: ?UpdateAddressInput,
  deleted_part_of_address?: ?DeleteAddressInput,
  create_part_of_phone?: ?CreatePhoneInput,
  update_part_of_phone?: ?UpdatePhoneInput,
  deleted_part_of_phone?: ?DeletePhoneInput,
  create_part_of_email?: ?CreateEmailInput,
  update_part_of_email?: ?UpdateEmailInput,
  deleted_part_of_email?: ?DeleteEmailInput,
  create_parent_port?: ?$ReadOnlyArray<?CreatePortInput>,
  update_parent_port?: ?$ReadOnlyArray<?UpdatePortInput>,
  deleted_parent_port?: ?$ReadOnlyArray<?DeletePortInput>,
  create_parent_cable?: ?$ReadOnlyArray<?CreateCableInput>,
  update_parent_cable?: ?$ReadOnlyArray<?UpdateCableInput>,
  deleted_parent_cable?: ?$ReadOnlyArray<?DeleteCableInput>,
  clientMutationId?: ?string,
|};
export type CreateCableInput = {|
  name: string,
  cable_type: any,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateCableInput = {|
  name: string,
  cable_type: any,
  description?: ?string,
  relationship_end_a?: ?number,
  relationship_end_b?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type CreatePortInput = {|
  name: string,
  port_type?: ?any,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdatePortInput = {|
  name: string,
  port_type?: ?any,
  description?: ?string,
  relationship_connected_to?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type DeletePortInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipInput = {|
  relation_id: number,
  clientMutationId?: ?string,
|};
export type DeleteCableInput = {|
  id: string,
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
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteGroupInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateProcedureInput = {|
  name: string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateProcedureInput = {|
  name: string,
  description?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteProcedureInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateAddressInput = {|
  organization?: ?any,
  name: string,
  phone?: ?string,
  street?: ?string,
  postal_code?: ?string,
  postal_area?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateAddressInput = {|
  organization?: ?any,
  name: string,
  phone?: ?string,
  street?: ?string,
  postal_code?: ?string,
  postal_area?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteAddressInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreatePhoneInput = {|
  contact?: ?any,
  name: string,
  type: any,
  clientMutationId?: ?string,
|};
export type UpdatePhoneInput = {|
  contact?: ?any,
  name: string,
  type: any,
  id: string,
  clientMutationId?: ?string,
|};
export type DeletePhoneInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateEmailInput = {|
  contact?: ?any,
  name: string,
  type: any,
  clientMutationId?: ?string,
|};
export type UpdateEmailInput = {|
  contact?: ?any,
  name: string,
  type: any,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteEmailInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateCableMutationVariables = {|
  input: CompositeCableMutationInput
|};
export type CreateCableMutationResponse = {|
  +composite_cable: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +cable: ?{|
        +id: string,
        +name: string,
        +cable_type: ?{|
          +value: string
        |},
        +description: ?string,
        +ports: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +port_type: ?{|
            +value: string
          |},
          +description: ?string,
          +connected_to: ?$ReadOnlyArray<?{|
            +id: string,
            +name: string,
          |}>,
        |}>,
      |},
    |}
  |}
|};
export type CreateCableMutation = {|
  variables: CreateCableMutationVariables,
  response: CreateCableMutationResponse,
|};
*/


/*
mutation CreateCableMutation(
  $input: CompositeCableMutationInput!
) {
  composite_cable(input: $input) {
    created {
      errors {
        field
        messages
      }
      cable {
        id
        name
        cable_type {
          value
          id
        }
        description
        ports {
          id
          name
          port_type {
            value
            id
          }
          description
          connected_to {
            __typename
            id
            name
          }
        }
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
    "name": "input",
    "type": "CompositeCableMutationInput!"
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
  "alias": null,
  "args": null,
  "concreteType": "ErrorType",
  "kind": "LinkedField",
  "name": "errors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "messages",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = [
  (v5/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCableMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeCableMutationPayload",
        "kind": "LinkedField",
        "name": "composite_cable",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateCablePayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Cable",
                "kind": "LinkedField",
                "name": "cable",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "cable_type",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Port",
                    "kind": "LinkedField",
                    "name": "ports",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Choice",
                        "kind": "LinkedField",
                        "name": "port_type",
                        "plural": false,
                        "selections": (v6/*: any*/),
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "connected_to",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCableMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeCableMutationPayload",
        "kind": "LinkedField",
        "name": "composite_cable",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateCablePayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Cable",
                "kind": "LinkedField",
                "name": "cable",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "cable_type",
                    "plural": false,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Port",
                    "kind": "LinkedField",
                    "name": "ports",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Choice",
                        "kind": "LinkedField",
                        "name": "port_type",
                        "plural": false,
                        "selections": (v8/*: any*/),
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "connected_to",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateCableMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCableMutation(\n  $input: CompositeCableMutationInput!\n) {\n  composite_cable(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      cable {\n        id\n        name\n        cable_type {\n          value\n          id\n        }\n        description\n        ports {\n          id\n          name\n          port_type {\n            value\n            id\n          }\n          description\n          connected_to {\n            __typename\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b0292dda45b92f13427ffee2134574f9';

module.exports = node;
