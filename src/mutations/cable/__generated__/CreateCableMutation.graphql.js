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
  create_dependents_group?: ?$ReadOnlyArray<?CreateGroupInput>,
  update_dependents_group?: ?$ReadOnlyArray<?UpdateGroupInput>,
  deleted_dependents_group?: ?$ReadOnlyArray<?DeleteGroupInput>,
  create_dependents_procedure?: ?$ReadOnlyArray<?CreateProcedureInput>,
  update_dependents_procedure?: ?$ReadOnlyArray<?UpdateProcedureInput>,
  deleted_dependents_procedure?: ?$ReadOnlyArray<?DeleteProcedureInput>,
  create_dependents_address?: ?$ReadOnlyArray<?CreateAddressInput>,
  update_dependents_address?: ?$ReadOnlyArray<?UpdateAddressInput>,
  deleted_dependents_address?: ?$ReadOnlyArray<?DeleteAddressInput>,
  create_dependents_phone?: ?$ReadOnlyArray<?CreatePhoneInput>,
  update_dependents_phone?: ?$ReadOnlyArray<?UpdatePhoneInput>,
  deleted_dependents_phone?: ?$ReadOnlyArray<?DeletePhoneInput>,
  create_dependents_email?: ?$ReadOnlyArray<?CreateEmailInput>,
  update_dependents_email?: ?$ReadOnlyArray<?UpdateEmailInput>,
  deleted_dependents_email?: ?$ReadOnlyArray<?DeleteEmailInput>,
  create_owner_organization?: ?CreateOrganizationInput,
  update_owner_organization?: ?UpdateOrganizationInput,
  deleted_owner_organization?: ?DeleteOrganizationInput,
  create_owner_contact?: ?CreateContactInput,
  update_owner_contact?: ?UpdateContactInput,
  deleted_owner_contact?: ?DeleteContactInput,
  create_owner_customer?: ?CreateCustomerInput,
  update_owner_customer?: ?UpdateCustomerInput,
  deleted_owner_customer?: ?DeleteCustomerInput,
  create_owner_enduser?: ?CreateEndUserInput,
  update_owner_enduser?: ?UpdateEndUserInput,
  deleted_owner_enduser?: ?DeleteEndUserInput,
  create_owner_provider?: ?CreateProviderInput,
  update_owner_provider?: ?UpdateProviderInput,
  deleted_owner_provider?: ?DeleteProviderInput,
  create_owner_siteowner?: ?CreateSiteOwnerInput,
  update_owner_siteowner?: ?UpdateSiteOwnerInput,
  deleted_owner_siteowner?: ?DeleteSiteOwnerInput,
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
export type CreateOrganizationInput = {|
  organization_number?: ?string,
  name: string,
  description?: ?string,
  website?: ?string,
  organization_id?: ?string,
  type?: ?any,
  incident_management_info?: ?string,
  affiliation_customer?: ?boolean,
  affiliation_end_customer?: ?boolean,
  affiliation_provider?: ?boolean,
  affiliation_partner?: ?boolean,
  affiliation_host_user?: ?boolean,
  affiliation_site_owner?: ?boolean,
  relationship_parent_of?: ?any,
  relationship_uses_a?: ?any,
  abuse_contact?: ?any,
  primary_contact?: ?any,
  secondary_contact?: ?any,
  it_technical_contact?: ?any,
  it_security_contact?: ?any,
  it_manager_contact?: ?any,
  clientMutationId?: ?string,
|};
export type UpdateOrganizationInput = {|
  organization_number?: ?string,
  name: string,
  description?: ?string,
  website?: ?string,
  organization_id?: ?string,
  type?: ?any,
  incident_management_info?: ?string,
  affiliation_customer?: ?boolean,
  affiliation_end_customer?: ?boolean,
  affiliation_provider?: ?boolean,
  affiliation_partner?: ?boolean,
  affiliation_host_user?: ?boolean,
  affiliation_site_owner?: ?boolean,
  relationship_parent_of?: ?any,
  relationship_uses_a?: ?any,
  abuse_contact?: ?any,
  primary_contact?: ?any,
  secondary_contact?: ?any,
  it_technical_contact?: ?any,
  it_security_contact?: ?any,
  it_manager_contact?: ?any,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOrganizationInput = {|
  id: string,
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
  email_id?: ?string,
  email?: ?string,
  email_type?: ?any,
  phone_id?: ?string,
  phone?: ?string,
  phone_type?: ?any,
  role_id?: ?string,
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
  email_id?: ?string,
  email?: ?string,
  email_type?: ?any,
  phone_id?: ?string,
  phone?: ?string,
  phone_type?: ?any,
  role_id?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteContactInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateCustomerInput = {|
  name: string,
  url?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateCustomerInput = {|
  name: string,
  url?: ?string,
  description?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteCustomerInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateEndUserInput = {|
  name: string,
  description?: ?string,
  url?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateEndUserInput = {|
  name: string,
  description?: ?string,
  url?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteEndUserInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateProviderInput = {|
  name: string,
  url?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateProviderInput = {|
  name: string,
  url?: ?string,
  description?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteProviderInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type CreateSiteOwnerInput = {|
  name: string,
  description?: ?string,
  url?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateSiteOwnerInput = {|
  name: string,
  description?: ?string,
  url?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteSiteOwnerInput = {|
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
        +provider: ?{|
          +id: string,
          +name: string,
        |},
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
        provider {
          id
          name
        }
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
  (v3/*: any*/),
  (v4/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Provider",
  "kind": "LinkedField",
  "name": "provider",
  "plural": false,
  "selections": (v8/*: any*/),
  "storageKey": null
},
v10 = [
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
                  (v9/*: any*/),
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
                        "selections": (v8/*: any*/),
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
                    "selections": (v10/*: any*/),
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v9/*: any*/),
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
                        "selections": (v10/*: any*/),
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
    "text": "mutation CreateCableMutation(\n  $input: CompositeCableMutationInput!\n) {\n  composite_cable(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      cable {\n        id\n        name\n        cable_type {\n          value\n          id\n        }\n        description\n        provider {\n          id\n          name\n        }\n        ports {\n          id\n          name\n          port_type {\n            value\n            id\n          }\n          description\n          connected_to {\n            __typename\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '293bb9af9bb8e9e557d9c075680fd7d2';

module.exports = node;
