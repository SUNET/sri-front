/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositePeeringGroupMutationInput = {|
  update_input?: ?UpdatePeeringGroupInput,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_dependencies_group?: ?$ReadOnlyArray<?CreateGroupInput>,
  update_dependencies_group?: ?$ReadOnlyArray<?UpdateGroupInput>,
  deleted_dependencies_group?: ?$ReadOnlyArray<?DeleteGroupInput>,
  create_dependencies_procedure?: ?$ReadOnlyArray<?CreateProcedureInput>,
  update_dependencies_procedure?: ?$ReadOnlyArray<?UpdateProcedureInput>,
  deleted_dependencies_procedure?: ?$ReadOnlyArray<?DeleteProcedureInput>,
  create_dependencies_address?: ?$ReadOnlyArray<?CreateAddressInput>,
  update_dependencies_address?: ?$ReadOnlyArray<?UpdateAddressInput>,
  deleted_dependencies_address?: ?$ReadOnlyArray<?DeleteAddressInput>,
  create_dependencies_phone?: ?$ReadOnlyArray<?CreatePhoneInput>,
  update_dependencies_phone?: ?$ReadOnlyArray<?UpdatePhoneInput>,
  deleted_dependencies_phone?: ?$ReadOnlyArray<?DeletePhoneInput>,
  create_dependencies_email?: ?$ReadOnlyArray<?CreateEmailInput>,
  update_dependencies_email?: ?$ReadOnlyArray<?UpdateEmailInput>,
  deleted_dependencies_email?: ?$ReadOnlyArray<?DeleteEmailInput>,
  create_dependencies_port?: ?$ReadOnlyArray<?CreatePortInput>,
  update_dependencies_port?: ?$ReadOnlyArray<?UpdatePortInput>,
  deleted_dependencies_port?: ?$ReadOnlyArray<?DeletePortInput>,
  create_dependencies_cable?: ?$ReadOnlyArray<?CreateCableInput>,
  update_dependencies_cable?: ?$ReadOnlyArray<?UpdateCableInput>,
  deleted_dependencies_cable?: ?$ReadOnlyArray<?DeleteCableInput>,
  create_dependencies_host?: ?$ReadOnlyArray<?CreateHostInput>,
  update_dependencies_host?: ?$ReadOnlyArray<?EditHostInput>,
  deleted_dependencies_host?: ?$ReadOnlyArray<?DeleteHostInput>,
  create_dependencies_router?: ?$ReadOnlyArray<?CreateRouterInput>,
  update_dependencies_router?: ?$ReadOnlyArray<?UpdateRouterInput>,
  deleted_dependencies_router?: ?$ReadOnlyArray<?DeleteRouterInput>,
  create_dependencies_switch?: ?$ReadOnlyArray<?CreateSwitchInput>,
  update_dependencies_switch?: ?$ReadOnlyArray<?UpdateSwitchInput>,
  deleted_dependencies_switch?: ?$ReadOnlyArray<?DeleteSwitchInput>,
  create_dependencies_firewall?: ?$ReadOnlyArray<?CreateFirewallInput>,
  update_dependencies_firewall?: ?$ReadOnlyArray<?UpdateFirewallInput>,
  deleted_dependencies_firewall?: ?$ReadOnlyArray<?DeleteFirewallInput>,
  create_dependencies_externalequipment?: ?$ReadOnlyArray<?CreateExternalEquipmentInput>,
  update_dependencies_externalequipment?: ?$ReadOnlyArray<?UpdateExternalEquipmentInput>,
  deleted_dependencies_externalequipment?: ?$ReadOnlyArray<?DeleteExternalEquipmentInput>,
  create_dependencies_opticalnode?: ?$ReadOnlyArray<?CreateOpticalNodeInput>,
  update_dependencies_opticalnode?: ?$ReadOnlyArray<?UpdateOpticalNodeInput>,
  deleted_dependencies_opticalnode?: ?$ReadOnlyArray<?DeleteOpticalNodeInput>,
  create_dependencies_odf?: ?$ReadOnlyArray<?CreateOdfInput>,
  update_dependencies_odf?: ?$ReadOnlyArray<?UpdateOdfInput>,
  deleted_dependencies_odf?: ?$ReadOnlyArray<?DeleteOdfInput>,
  create_dependencies_opticalfilter?: ?$ReadOnlyArray<?CreateOpticalFilterInput>,
  update_dependencies_opticalfilter?: ?$ReadOnlyArray<?UpdateOpticalFilterInput>,
  deleted_dependencies_opticalfilter?: ?$ReadOnlyArray<?DeleteOpticalFilterInput>,
  create_dependencies_peeringgroup?: ?$ReadOnlyArray<?CreatePeeringGroupInput>,
  update_dependencies_peeringgroup?: ?$ReadOnlyArray<?UpdatePeeringGroupInput>,
  deleted_dependencies_peeringgroup?: ?$ReadOnlyArray<?DeletePeeringGroupInput>,
  clientMutationId?: ?string,
|};
export type UpdatePeeringGroupInput = {|
  name: string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipInput = {|
  relation_id: number,
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
export type CreateHostInput = {|
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
  clientMutationId?: ?string,
|};
export type EditHostInput = {|
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
  relationship_user?: ?any,
  relationship_depends_on?: ?number,
  services_locked?: ?boolean,
  services_checked?: ?boolean,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteHostInput = {|
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
export type CreatePeeringGroupInput = {|
  name: string,
  clientMutationId?: ?string,
|};
export type DeletePeeringGroupInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type UpdatePeeringGroupMutationVariables = {|
  input: CompositePeeringGroupMutationInput
|};
export type UpdatePeeringGroupMutationResponse = {|
  +composite_peeringGroup: ?{|
    +updated: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +peeringGroup: ?{|
        +id: string,
        +name: string,
        +dependencies: ?$ReadOnlyArray<?{|
          +__typename: string,
          +type: string,
          +relation_id: ?number,
          +id: string,
          +name: string,
        |}>,
      |},
    |}
  |}
|};
export type UpdatePeeringGroupMutation = {|
  variables: UpdatePeeringGroupMutationVariables,
  response: UpdatePeeringGroupMutationResponse,
|};
*/


/*
mutation UpdatePeeringGroupMutation(
  $input: CompositePeeringGroupMutationInput!
) {
  composite_peeringGroup(input: $input) {
    updated {
      errors {
        field
        messages
      }
      peeringGroup {
        id
        name
        dependencies {
          __typename
          type: __typename
          relation_id
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
    "type": "CompositePeeringGroupMutationInput!"
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
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CompositePeeringGroupMutationPayload",
    "kind": "LinkedField",
    "name": "composite_peeringGroup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UpdatePeeringGroupPayload",
        "kind": "LinkedField",
        "name": "updated",
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
            "concreteType": "PeeringGroup",
            "kind": "LinkedField",
            "name": "peeringGroup",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "dependencies",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "alias": "type",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "relation_id",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  (v2/*: any*/)
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdatePeeringGroupMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdatePeeringGroupMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdatePeeringGroupMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePeeringGroupMutation(\n  $input: CompositePeeringGroupMutationInput!\n) {\n  composite_peeringGroup(input: $input) {\n    updated {\n      errors {\n        field\n        messages\n      }\n      peeringGroup {\n        id\n        name\n        dependencies {\n          __typename\n          type: __typename\n          relation_id\n          id\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1ef00bf42b18685ea8b142b2254da3c3';

module.exports = node;
