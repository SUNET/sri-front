/**
 * @flow
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
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_part_of_port?: ?CreatePortInput,
  update_part_of_port?: ?UpdatePortInput,
  deleted_part_of_port?: ?DeletePortInput,
  create_part_of_cable?: ?CreateCableInput,
  update_part_of_cable?: ?UpdateCableInput,
  deleted_part_of_cable?: ?DeleteCableInput,
  create_part_of_router?: ?CreateRouterInput,
  update_part_of_router?: ?UpdateRouterInput,
  deleted_part_of_router?: ?DeleteRouterInput,
  create_part_of_switch?: ?CreateSwitchInput,
  update_part_of_switch?: ?UpdateSwitchInput,
  deleted_part_of_switch?: ?DeleteSwitchInput,
  create_part_of_firewall?: ?CreateFirewallInput,
  update_part_of_firewall?: ?UpdateFirewallInput,
  deleted_part_of_firewall?: ?DeleteFirewallInput,
  create_part_of_externalequipment?: ?CreateExternalEquipmentInput,
  update_part_of_externalequipment?: ?UpdateExternalEquipmentInput,
  deleted_part_of_externalequipment?: ?DeleteExternalEquipmentInput,
  create_part_of_opticalnode?: ?CreateOpticalNodeInput,
  update_part_of_opticalnode?: ?UpdateOpticalNodeInput,
  deleted_part_of_opticalnode?: ?DeleteOpticalNodeInput,
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
  create_dependencies_peeringgroup?: ?$ReadOnlyArray<?CreatePeeringGroupInput>,
  update_dependencies_peeringgroup?: ?$ReadOnlyArray<?UpdatePeeringGroupInput>,
  deleted_dependencies_peeringgroup?: ?$ReadOnlyArray<?DeletePeeringGroupInput>,
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
  create_dependents_host?: ?$ReadOnlyArray<?CreateHostInput>,
  update_dependents_host?: ?$ReadOnlyArray<?EditHostInput>,
  deleted_dependents_host?: ?$ReadOnlyArray<?DeleteHostInput>,
  create_dependents_peeringgroup?: ?$ReadOnlyArray<?CreatePeeringGroupInput>,
  update_dependents_peeringgroup?: ?$ReadOnlyArray<?UpdatePeeringGroupInput>,
  deleted_dependents_peeringgroup?: ?$ReadOnlyArray<?DeletePeeringGroupInput>,
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
        +id: string,
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
        +id: string,
        +first_name: string,
        +last_name: ?string,
        +contact_type: ?{|
          +name: string,
          +value: string,
        |},
        +emails: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: ?{|
            +name: string,
            +value: string,
          |},
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: ?{|
            +name: string,
            +value: string,
          |},
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
        +id: string,
        +first_name: string,
        +last_name: ?string,
        +contact_type: ?{|
          +name: string,
          +value: string,
        |},
        +emails: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: ?{|
            +name: string,
            +value: string,
          |},
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: ?{|
            +name: string,
            +value: string,
          |},
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
        id
        name
        description
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      contact {
        id
        first_name
        last_name
        contact_type {
          name
          value
          id
        }
        emails {
          id
          name
          type {
            name
            value
            id
          }
        }
        phones {
          id
          name
          type {
            name
            value
            id
          }
        }
        member_of_groups {
          name
          id
        }
      }
    }
    subupdated {
      errors {
        field
        messages
      }
      contact {
        id
        first_name
        last_name
        contact_type {
          name
          value
          id
        }
        emails {
          id
          name
          type {
            name
            value
            id
          }
        }
        phones {
          id
          name
          type {
            name
            value
            id
          }
        }
        member_of_groups {
          name
          id
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
    "type": "CompositeGroupMutationInput!"
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
  "concreteType": "CreateGroupPayload",
  "kind": "LinkedField",
  "name": "created",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Group",
      "kind": "LinkedField",
      "name": "group",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v9 = [
  (v4/*: any*/),
  (v8/*: any*/)
],
v10 = [
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v9/*: any*/),
    "storageKey": null
  }
],
v11 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Contact",
    "kind": "LinkedField",
    "name": "contact",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Choice",
        "kind": "LinkedField",
        "name": "contact_type",
        "plural": false,
        "selections": (v9/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Email",
        "kind": "LinkedField",
        "name": "emails",
        "plural": true,
        "selections": (v10/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Phone",
        "kind": "LinkedField",
        "name": "phones",
        "plural": true,
        "selections": (v10/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "member_of_groups",
        "plural": true,
        "selections": [
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v12 = [
  (v4/*: any*/),
  (v8/*: any*/),
  (v3/*: any*/)
],
v13 = [
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v12/*: any*/),
    "storageKey": null
  }
],
v14 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Contact",
    "kind": "LinkedField",
    "name": "contact",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Choice",
        "kind": "LinkedField",
        "name": "contact_type",
        "plural": false,
        "selections": (v12/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Email",
        "kind": "LinkedField",
        "name": "emails",
        "plural": true,
        "selections": (v13/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Phone",
        "kind": "LinkedField",
        "name": "phones",
        "plural": true,
        "selections": (v13/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "member_of_groups",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v3/*: any*/)
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
    "name": "CreateGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeGroupMutationPayload",
        "kind": "LinkedField",
        "name": "composite_group",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "kind": "LinkedField",
            "name": "subcreated",
            "plural": true,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "kind": "LinkedField",
            "name": "subupdated",
            "plural": true,
            "selections": (v11/*: any*/),
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
    "name": "CreateGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeGroupMutationPayload",
        "kind": "LinkedField",
        "name": "composite_group",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "kind": "LinkedField",
            "name": "subcreated",
            "plural": true,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "kind": "LinkedField",
            "name": "subupdated",
            "plural": true,
            "selections": (v14/*: any*/),
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
    "name": "CreateGroupMutation",
    "operationKind": "mutation",
    "text": "mutation CreateGroupMutation(\n  $input: CompositeGroupMutationInput!\n) {\n  composite_group(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      group {\n        id\n        name\n        description\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        first_name\n        last_name\n        contact_type {\n          name\n          value\n          id\n        }\n        emails {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        phones {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        first_name\n        last_name\n        contact_type {\n          name\n          value\n          id\n        }\n        emails {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        phones {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '28d3d81fae411bfae330418413df1394';

module.exports = node;
