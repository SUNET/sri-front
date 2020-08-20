/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeOpticalNodeMutationInput = {|
  delete_owner?: ?DeleteOwnerMutationInput,
  create_input?: ?CreateOpticalNodeInput,
  update_input?: ?UpdateOpticalNodeInput,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_has_port?: ?$ReadOnlyArray<?CreatePortInput>,
  update_has_port?: ?$ReadOnlyArray<?UpdatePortInput>,
  deleted_has_port?: ?$ReadOnlyArray<?DeletePortInput>,
  create_has_cable?: ?$ReadOnlyArray<?CreateCableInput>,
  update_has_cable?: ?$ReadOnlyArray<?UpdateCableInput>,
  deleted_has_cable?: ?$ReadOnlyArray<?DeleteCableInput>,
  create_has_router?: ?$ReadOnlyArray<?CreateRouterInput>,
  update_has_router?: ?$ReadOnlyArray<?UpdateRouterInput>,
  deleted_has_router?: ?$ReadOnlyArray<?DeleteRouterInput>,
  create_has_switch?: ?$ReadOnlyArray<?CreateSwitchInput>,
  update_has_switch?: ?$ReadOnlyArray<?UpdateSwitchInput>,
  deleted_has_switch?: ?$ReadOnlyArray<?DeleteSwitchInput>,
  create_has_firewall?: ?$ReadOnlyArray<?CreateFirewallInput>,
  update_has_firewall?: ?$ReadOnlyArray<?UpdateFirewallInput>,
  deleted_has_firewall?: ?$ReadOnlyArray<?DeleteFirewallInput>,
  create_has_externalequipment?: ?$ReadOnlyArray<?CreateExternalEquipmentInput>,
  update_has_externalequipment?: ?$ReadOnlyArray<?UpdateExternalEquipmentInput>,
  deleted_has_externalequipment?: ?$ReadOnlyArray<?DeleteExternalEquipmentInput>,
  create_has_opticalnode?: ?$ReadOnlyArray<?CreateOpticalNodeInput>,
  update_has_opticalnode?: ?$ReadOnlyArray<?UpdateOpticalNodeInput>,
  deleted_has_opticalnode?: ?$ReadOnlyArray<?DeleteOpticalNodeInput>,
  create_has_odf?: ?$ReadOnlyArray<?CreateOdfInput>,
  update_has_odf?: ?$ReadOnlyArray<?UpdateOdfInput>,
  deleted_has_odf?: ?$ReadOnlyArray<?DeleteOdfInput>,
  create_has_opticalfilter?: ?$ReadOnlyArray<?CreateOpticalFilterInput>,
  update_has_opticalfilter?: ?$ReadOnlyArray<?UpdateOpticalFilterInput>,
  deleted_has_opticalfilter?: ?$ReadOnlyArray<?DeleteOpticalFilterInput>,
  clientMutationId?: ?string,
|};
export type DeleteOwnerMutationInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateOpticalNodeInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  type: any,
  operational_state: any,
  description?: ?string,
  relationship_location?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateOpticalNodeInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  type: any,
  operational_state: any,
  description?: ?string,
  relationship_location?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipInput = {|
  relation_id: number,
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
export type CreateRouterInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  operational_state: any,
  relationship_location?: ?number,
  relationship_ports?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateRouterInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
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
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
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
  max_number_of_ports?: ?number,
  relationship_provider?: ?any,
  switch_type: any,
  clientMutationId?: ?string,
|};
export type UpdateSwitchInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
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
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
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
  services_locked?: ?boolean,
  services_checked?: ?boolean,
  max_number_of_ports?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateFirewallInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  ip_addresses?: ?string,
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
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  relationship_owner?: ?any,
  relationship_location?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateExternalEquipmentInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
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
export type DeleteOpticalNodeInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateOdfInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  max_number_of_ports?: ?any,
  operational_state?: ?any,
  relationship_location?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateOdfInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  max_number_of_ports?: ?number,
  operational_state?: ?any,
  relationship_ports?: ?string,
  relationship_location?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOdfInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateOpticalFilterInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  max_number_of_ports?: ?any,
  operational_state?: ?any,
  relationship_location?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateOpticalFilterInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  description?: ?string,
  max_number_of_ports?: ?number,
  operational_state?: ?any,
  relationship_ports?: ?string,
  relationship_location?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOpticalFilterInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateOpticalNodeMutationVariables = {|
  input: CompositeOpticalNodeMutationInput
|};
export type CreateOpticalNodeMutationResponse = {|
  +composite_opticalNode: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +opticalNode: ?{|
        +__typename: string,
        +id: string,
        +name: string,
        +description: ?string,
        +type: ?{|
          +id: string,
          +name: string,
        |},
        +ports: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
        |}>,
        +rack_units: ?number,
        +rack_position: ?number,
        +rack_back: ?boolean,
        +operational_state: ?{|
          +id: string,
          +name: string,
        |},
      |},
    |}
  |}
|};
export type CreateOpticalNodeMutation = {|
  variables: CreateOpticalNodeMutationVariables,
  response: CreateOpticalNodeMutationResponse,
|};
*/


/*
mutation CreateOpticalNodeMutation(
  $input: CompositeOpticalNodeMutationInput!
) {
  composite_opticalNode(input: $input) {
    created {
      errors {
        field
        messages
      }
      opticalNode {
        __typename
        id
        name
        description
        type {
          id
          name
        }
        ports {
          id
          name
        }
        rack_units
        rack_position
        rack_back
        operational_state {
          id
          name
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
    "type": "CompositeOpticalNodeMutationInput!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CompositeOpticalNodeMutationPayload",
    "kind": "LinkedField",
    "name": "composite_opticalNode",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CreateOpticalNodePayload",
        "kind": "LinkedField",
        "name": "created",
        "plural": false,
        "selections": [
          {
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
          {
            "alias": null,
            "args": null,
            "concreteType": "OpticalNode",
            "kind": "LinkedField",
            "name": "opticalNode",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "type",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Port",
                "kind": "LinkedField",
                "name": "ports",
                "plural": true,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rack_units",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rack_position",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rack_back",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "operational_state",
                "plural": false,
                "selections": (v3/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateOpticalNodeMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateOpticalNodeMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateOpticalNodeMutation",
    "operationKind": "mutation",
    "text": "mutation CreateOpticalNodeMutation(\n  $input: CompositeOpticalNodeMutationInput!\n) {\n  composite_opticalNode(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      opticalNode {\n        __typename\n        id\n        name\n        description\n        type {\n          id\n          name\n        }\n        ports {\n          id\n          name\n        }\n        rack_units\n        rack_position\n        rack_back\n        operational_state {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0b5f02d798c6107078327efa5397661f';

module.exports = node;
