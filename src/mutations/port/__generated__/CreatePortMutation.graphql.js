/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositePortMutationInput = {|
  create_input?: ?CreatePortInput,
  update_input?: ?UpdatePortInput,
  create_subinputs?: ?$ReadOnlyArray<?CreateCableInput>,
  update_subinputs?: ?$ReadOnlyArray<?UpdateCableInput>,
  delete_subinputs?: ?$ReadOnlyArray<?DeleteCableInput>,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_parent_port?: ?$ReadOnlyArray<?CreatePortInput>,
  update_parent_port?: ?$ReadOnlyArray<?UpdatePortInput>,
  deleted_parent_port?: ?$ReadOnlyArray<?DeletePortInput>,
  create_parent_cable?: ?$ReadOnlyArray<?CreateCableInput>,
  update_parent_cable?: ?$ReadOnlyArray<?UpdateCableInput>,
  deleted_parent_cable?: ?$ReadOnlyArray<?DeleteCableInput>,
  create_parent_router?: ?$ReadOnlyArray<?CreateRouterInput>,
  update_parent_router?: ?$ReadOnlyArray<?UpdateRouterInput>,
  deleted_parent_router?: ?$ReadOnlyArray<?DeleteRouterInput>,
  create_parent_switch?: ?$ReadOnlyArray<?CreateSwitchInput>,
  update_parent_switch?: ?$ReadOnlyArray<?UpdateSwitchInput>,
  deleted_parent_switch?: ?$ReadOnlyArray<?DeleteSwitchInput>,
  create_parent_firewall?: ?$ReadOnlyArray<?CreateFirewallInput>,
  update_parent_firewall?: ?$ReadOnlyArray<?UpdateFirewallInput>,
  deleted_parent_firewall?: ?$ReadOnlyArray<?DeleteFirewallInput>,
  create_parent_externalequipment?: ?$ReadOnlyArray<?CreateExternalEquipmentInput>,
  update_parent_externalequipment?: ?$ReadOnlyArray<?UpdateExternalEquipmentInput>,
  deleted_parent_externalequipment?: ?$ReadOnlyArray<?DeleteExternalEquipmentInput>,
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
export type CreateCableInput = {|
  name: string,
  cable_type: any,
  description?: ?string,
  relationship_provider?: ?any,
  clientMutationId?: ?string,
|};
export type UpdateCableInput = {|
  name: string,
  cable_type: any,
  description?: ?string,
  relationship_provider?: ?any,
  relationship_end_a?: ?number,
  relationship_end_b?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteCableInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipInput = {|
  relation_id: number,
  clientMutationId?: ?string,
|};
export type DeletePortInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateRouterInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  operational_state: any,
  relationship_location?: ?number,
  relationship_ports?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateRouterInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  operational_state: any,
  relationship_location?: ?number,
  description?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteRouterInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateSwitchInput = {|
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
  rack_units?: ?number,
  rack_position?: ?number,
  operational_state: any,
  managed_by?: ?any,
  responsible_group?: ?any,
  support_group?: ?any,
  backup?: ?string,
  security_class?: ?any,
  security_comment?: ?string,
  os?: ?string,
  os_version?: ?string,
  model?: ?string,
  vendor?: ?string,
  service_tag?: ?string,
  end_support?: ?any,
  contract_number?: ?string,
  relationship_location?: ?number,
  relationship_owner?: ?number,
  max_number_of_ports?: ?number,
  relationship_provider?: ?any,
  switch_type: any,
  clientMutationId?: ?string,
|};
export type UpdateSwitchInput = {|
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
  rack_units?: ?number,
  rack_position?: ?number,
  operational_state: any,
  managed_by?: ?any,
  responsible_group?: ?any,
  support_group?: ?any,
  backup?: ?string,
  security_class?: ?any,
  security_comment?: ?string,
  os?: ?string,
  os_version?: ?string,
  model?: ?string,
  vendor?: ?string,
  service_tag?: ?string,
  end_support?: ?any,
  contract_number?: ?string,
  relationship_location?: ?number,
  relationship_owner?: ?number,
  max_number_of_ports?: ?number,
  relationship_provider?: ?any,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteSwitchInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateFirewallInput = {|
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
  rack_units?: ?number,
  rack_position?: ?number,
  operational_state: any,
  managed_by?: ?any,
  responsible_group?: ?any,
  support_group?: ?any,
  backup?: ?string,
  security_class?: ?any,
  security_comment?: ?string,
  os?: ?string,
  os_version?: ?string,
  model?: ?string,
  vendor?: ?string,
  service_tag?: ?string,
  end_support?: ?any,
  contract_number?: ?string,
  relationship_location?: ?number,
  relationship_owner?: ?any,
  relationship_user?: ?number,
  relationship_depends_on?: ?number,
  relationship_ports?: ?string,
  services_locked?: ?boolean,
  services_checked?: ?boolean,
  max_number_of_ports?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateFirewallInput = {|
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
  rack_units?: ?number,
  rack_position?: ?number,
  operational_state: any,
  managed_by?: ?any,
  responsible_group?: ?any,
  support_group?: ?any,
  backup?: ?string,
  security_class?: ?any,
  security_comment?: ?string,
  os?: ?string,
  os_version?: ?string,
  model?: ?string,
  vendor?: ?string,
  service_tag?: ?string,
  end_support?: ?any,
  contract_number?: ?string,
  relationship_location?: ?number,
  relationship_owner?: ?any,
  relationship_user?: ?number,
  relationship_depends_on?: ?number,
  relationship_ports?: ?string,
  services_locked?: ?boolean,
  services_checked?: ?boolean,
  max_number_of_ports?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteFirewallInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateExternalEquipmentInput = {|
  name: string,
  description?: ?string,
  rack_units?: ?number,
  rack_position?: ?number,
  relationship_owner?: ?any,
  relationship_location?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateExternalEquipmentInput = {|
  name: string,
  description?: ?string,
  rack_units?: ?number,
  rack_position?: ?number,
  relationship_owner?: ?any,
  relationship_location?: ?number,
  relationship_ports?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteExternalEquipmentInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreatePortMutationVariables = {|
  input: CompositePortMutationInput
|};
export type CreatePortMutationResponse = {|
  +composite_port: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +port: ?{|
        +id: string,
        +name: string,
        +port_type: ?{|
          +value: string,
          +name: string,
        |},
        +description: ?string,
        +parent: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type?: ?{|
            +value: string,
            +name: string,
          |},
          +description?: ?string,
        |}>,
        +connected_to: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type?: ?{|
            +value: string,
            +name: string,
          |},
          +description?: ?string,
        |}>,
      |},
    |},
    +subupdated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +cable: ?{|
        +id: string,
        +name: string,
        +description: ?string,
        +type: ?{|
          +value: string,
          +name: string,
        |},
      |},
    |}>,
    +parent_port_updated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>
    |}>,
  |}
|};
export type CreatePortMutation = {|
  variables: CreatePortMutationVariables,
  response: CreatePortMutationResponse,
|};
*/


/*
mutation CreatePortMutation(
  $input: CompositePortMutationInput!
) {
  composite_port(input: $input) {
    created {
      errors {
        field
        messages
      }
      port {
        id
        name
        port_type {
          value
          name
          id
        }
        description
        parent {
          __typename
          id
          name
          ... on Port {
            type: port_type {
              value
              name
              id
            }
            description
          }
          ... on Cable {
            type: cable_type {
              value
              name
              id
            }
            description
          }
        }
        connected_to {
          __typename
          id
          name
          ... on Cable {
            type: cable_type {
              value
              name
              id
            }
            description
          }
        }
      }
    }
    subupdated {
      errors {
        field
        messages
      }
      cable {
        id
        name
        description
        type: cable_type {
          value
          name
          id
        }
      }
    }
    parent_port_updated {
      errors {
        field
        messages
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
    "type": "CompositePortMutationInput!"
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
  (v5/*: any*/),
  (v4/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": "type",
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "cable_type",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/),
    (v7/*: any*/)
  ],
  "type": "Cable"
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "UpdatePortPayload",
  "kind": "LinkedField",
  "name": "parent_port_updated",
  "plural": true,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
},
v11 = [
  (v5/*: any*/),
  (v4/*: any*/),
  (v3/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v13 = {
  "alias": "type",
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "cable_type",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": null
},
v14 = {
  "kind": "InlineFragment",
  "selections": [
    (v13/*: any*/),
    (v7/*: any*/)
  ],
  "type": "Cable"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePortMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositePortMutationPayload",
        "kind": "LinkedField",
        "name": "composite_port",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreatePortPayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Port",
                "kind": "LinkedField",
                "name": "port",
                "plural": false,
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
                    "name": "parent",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "type",
                            "args": null,
                            "concreteType": "Choice",
                            "kind": "LinkedField",
                            "name": "port_type",
                            "plural": false,
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "type": "Port"
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "connected_to",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateCablePayload",
            "kind": "LinkedField",
            "name": "subupdated",
            "plural": true,
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
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v10/*: any*/)
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
    "name": "CreatePortMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositePortMutationPayload",
        "kind": "LinkedField",
        "name": "composite_port",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreatePortPayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Port",
                "kind": "LinkedField",
                "name": "port",
                "plural": false,
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
                    "selections": (v11/*: any*/),
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "parent",
                    "plural": true,
                    "selections": [
                      (v12/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "type",
                            "args": null,
                            "concreteType": "Choice",
                            "kind": "LinkedField",
                            "name": "port_type",
                            "plural": false,
                            "selections": (v11/*: any*/),
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "type": "Port"
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "connected_to",
                    "plural": true,
                    "selections": [
                      (v12/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateCablePayload",
            "kind": "LinkedField",
            "name": "subupdated",
            "plural": true,
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
                  (v7/*: any*/),
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
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
    "name": "CreatePortMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePortMutation(\n  $input: CompositePortMutationInput!\n) {\n  composite_port(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      port {\n        id\n        name\n        port_type {\n          value\n          name\n          id\n        }\n        description\n        parent {\n          __typename\n          id\n          name\n          ... on Port {\n            type: port_type {\n              value\n              name\n              id\n            }\n            description\n          }\n          ... on Cable {\n            type: cable_type {\n              value\n              name\n              id\n            }\n            description\n          }\n        }\n        connected_to {\n          __typename\n          id\n          name\n          ... on Cable {\n            type: cable_type {\n              value\n              name\n              id\n            }\n            description\n          }\n        }\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      cable {\n        id\n        name\n        description\n        type: cable_type {\n          value\n          name\n          id\n        }\n      }\n    }\n    parent_port_updated {\n      errors {\n        field\n        messages\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5e3a33637628ecffac57bf485bb3fd88';

module.exports = node;
