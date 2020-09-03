/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeOpticalLinkMutationInput = {|
  create_input?: ?CreateOpticalLinkInput,
  update_input?: ?UpdateOpticalLinkInput,
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
  create_dependencies_opticallink?: ?$ReadOnlyArray<?CreateOpticalLinkInput>,
  update_dependencies_opticallink?: ?$ReadOnlyArray<?UpdateOpticalLinkInput>,
  deleted_dependencies_opticallink?: ?$ReadOnlyArray<?DeleteOpticalLinkInput>,
  create_dependencies_opticalmultiplexsection?: ?$ReadOnlyArray<?CreateOpticalMultiplexSectionInput>,
  update_dependencies_opticalmultiplexsection?: ?$ReadOnlyArray<?UpdateOpticalMultiplexSectionInput>,
  deleted_dependencies_opticalmultiplexsection?: ?$ReadOnlyArray<?DeleteOpticalMultiplexSectionInput>,
  create_dependencies_opticalpath?: ?$ReadOnlyArray<?CreateOpticalPathInput>,
  update_dependencies_opticalpath?: ?$ReadOnlyArray<?UpdateOpticalPathInput>,
  deleted_dependencies_opticalpath?: ?$ReadOnlyArray<?DeleteOpticalPathInput>,
  create_dependencies_peeringgroup?: ?$ReadOnlyArray<?CreatePeeringGroupInput>,
  update_dependencies_peeringgroup?: ?$ReadOnlyArray<?UpdatePeeringGroupInput>,
  deleted_dependencies_peeringgroup?: ?$ReadOnlyArray<?DeletePeeringGroupInput>,
  clientMutationId?: ?string,
|};
export type CreateOpticalLinkInput = {|
  name: string,
  link_type: any,
  interface_type: any,
  operational_state: any,
  description?: ?string,
  relationship_provider?: ?any,
  clientMutationId?: ?string,
|};
export type UpdateOpticalLinkInput = {|
  name: string,
  link_type: any,
  interface_type: any,
  operational_state: any,
  description?: ?string,
  relationship_provider?: ?any,
  relationship_end_a?: ?number,
  relationship_end_b?: ?number,
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
  ip_addresses?: ?string,
  description?: ?string,
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
  relationship_ports?: ?string,
  services_locked?: ?boolean,
  services_checked?: ?boolean,
  clientMutationId?: ?string,
|};
export type EditHostInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  ip_addresses?: ?string,
  description?: ?string,
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
  ip_addresses?: ?string,
  description?: ?string,
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
  relationship_provider?: ?any,
  switch_type: any,
  clientMutationId?: ?string,
|};
export type UpdateSwitchInput = {|
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  ip_addresses?: ?string,
  description?: ?string,
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
  ip_addresses?: ?string,
  description?: ?string,
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
  rack_units?: ?number,
  rack_position?: ?number,
  rack_back?: ?boolean,
  name: string,
  ip_addresses?: ?string,
  description?: ?string,
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
export type DeleteOpticalLinkInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateOpticalMultiplexSectionInput = {|
  name: string,
  operational_state: any,
  description?: ?string,
  relationship_provider?: ?any,
  clientMutationId?: ?string,
|};
export type UpdateOpticalMultiplexSectionInput = {|
  name: string,
  operational_state: any,
  description?: ?string,
  relationship_provider?: ?any,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOpticalMultiplexSectionInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateOpticalPathInput = {|
  name: string,
  framing: any,
  capacity: any,
  wavelength?: ?number,
  operational_state: any,
  description?: ?string,
  enrs?: ?string,
  relationship_provider?: ?any,
  clientMutationId?: ?string,
|};
export type UpdateOpticalPathInput = {|
  name: string,
  framing: any,
  capacity: any,
  wavelength?: ?number,
  operational_state: any,
  description?: ?string,
  enrs?: ?string,
  relationship_provider?: ?any,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOpticalPathInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreatePeeringGroupInput = {|
  name: string,
  clientMutationId?: ?string,
|};
export type UpdatePeeringGroupInput = {|
  name: string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeletePeeringGroupInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateOpticalLinkMutationVariables = {|
  input: CompositeOpticalLinkMutationInput
|};
export type CreateOpticalLinkMutationResponse = {|
  +composite_opticalLink: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +opticalLink: ?{|
        +id: string,
        +name: string,
        +description: ?string,
        +operational_state: ?{|
          +name: string,
          +value: string,
        |},
        +type: ?{|
          +id: string,
          +name: string,
          +value: string,
        |},
        +interface_type: ?{|
          +id: string,
          +name: string,
          +value: string,
        |},
        +provider: ?{|
          +id: string,
          +name: string,
        |},
        +ports: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +__typename: string,
          +relation_id: ?number,
          +type: ?{|
            +name: string
          |},
        |}>,
      |},
    |}
  |}
|};
export type CreateOpticalLinkMutation = {|
  variables: CreateOpticalLinkMutationVariables,
  response: CreateOpticalLinkMutationResponse,
|};
*/


/*
mutation CreateOpticalLinkMutation(
  $input: CompositeOpticalLinkMutationInput!
) {
  composite_opticalLink(input: $input) {
    created {
      errors {
        field
        messages
      }
      opticalLink {
        id
        name
        description
        operational_state {
          name
          value
          id
        }
        type: link_type {
          id
          name
          value
        }
        interface_type {
          id
          name
          value
        }
        provider {
          id
          name
        }
        ports {
          id
          name
          __typename
          relation_id
          type: port_type {
            name
            id
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
    "type": "CompositeOpticalLinkMutationInput!"
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
  "name": "description",
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
  (v4/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "alias": "type",
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "link_type",
  "plural": false,
  "selections": (v7/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "interface_type",
  "plural": false,
  "selections": (v7/*: any*/),
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Provider",
  "kind": "LinkedField",
  "name": "provider",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relation_id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateOpticalLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeOpticalLinkMutationPayload",
        "kind": "LinkedField",
        "name": "composite_opticalLink",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateOpticalLinkPayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "OpticalLink",
                "kind": "LinkedField",
                "name": "opticalLink",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "operational_state",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
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
                      (v11/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": "type",
                        "args": null,
                        "concreteType": "Choice",
                        "kind": "LinkedField",
                        "name": "port_type",
                        "plural": false,
                        "selections": [
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
    "name": "CreateOpticalLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeOpticalLinkMutationPayload",
        "kind": "LinkedField",
        "name": "composite_opticalLink",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateOpticalLinkPayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "OpticalLink",
                "kind": "LinkedField",
                "name": "opticalLink",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "operational_state",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v6/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
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
                      (v11/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": "type",
                        "args": null,
                        "concreteType": "Choice",
                        "kind": "LinkedField",
                        "name": "port_type",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v3/*: any*/)
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
    "name": "CreateOpticalLinkMutation",
    "operationKind": "mutation",
    "text": "mutation CreateOpticalLinkMutation(\n  $input: CompositeOpticalLinkMutationInput!\n) {\n  composite_opticalLink(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      opticalLink {\n        id\n        name\n        description\n        operational_state {\n          name\n          value\n          id\n        }\n        type: link_type {\n          id\n          name\n          value\n        }\n        interface_type {\n          id\n          name\n          value\n        }\n        provider {\n          id\n          name\n        }\n        ports {\n          id\n          name\n          __typename\n          relation_id\n          type: port_type {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa029ce7a45665605d9f1ab3660a4683';

module.exports = node;
