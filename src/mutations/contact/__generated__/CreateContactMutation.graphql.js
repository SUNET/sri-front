/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeContactMutationInput = {|
  create_phones?: ?$ReadOnlyArray<?CreatePhoneInput>,
  update_phones?: ?$ReadOnlyArray<?UpdatePhoneInput>,
  delete_phones?: ?$ReadOnlyArray<?DeletePhoneInput>,
  link_rolerelations?: ?$ReadOnlyArray<?RoleRelationMutationInput>,
  create_input?: ?CreateContactInput,
  update_input?: ?UpdateContactInput,
  create_subinputs?: ?$ReadOnlyArray<?CreateEmailInput>,
  update_subinputs?: ?$ReadOnlyArray<?UpdateEmailInput>,
  delete_subinputs?: ?$ReadOnlyArray<?DeleteEmailInput>,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_uses_group?: ?CreateGroupInput,
  update_uses_group?: ?UpdateGroupInput,
  deleted_uses_group?: ?DeleteGroupInput,
  create_uses_procedure?: ?CreateProcedureInput,
  update_uses_procedure?: ?UpdateProcedureInput,
  deleted_uses_procedure?: ?DeleteProcedureInput,
  create_uses_address?: ?CreateAddressInput,
  update_uses_address?: ?UpdateAddressInput,
  deleted_uses_address?: ?DeleteAddressInput,
  create_uses_phone?: ?CreatePhoneInput,
  update_uses_phone?: ?UpdatePhoneInput,
  deleted_uses_phone?: ?DeletePhoneInput,
  create_uses_email?: ?CreateEmailInput,
  update_uses_email?: ?UpdateEmailInput,
  deleted_uses_email?: ?DeleteEmailInput,
  create_uses_host?: ?CreateHostInput,
  update_uses_host?: ?EditHostInput,
  deleted_uses_host?: ?DeleteHostInput,
  create_uses_opticallink?: ?CreateOpticalLinkInput,
  update_uses_opticallink?: ?UpdateOpticalLinkInput,
  deleted_uses_opticallink?: ?DeleteOpticalLinkInput,
  create_uses_opticalmultiplexsection?: ?CreateOpticalMultiplexSectionInput,
  update_uses_opticalmultiplexsection?: ?UpdateOpticalMultiplexSectionInput,
  deleted_uses_opticalmultiplexsection?: ?DeleteOpticalMultiplexSectionInput,
  create_uses_opticalpath?: ?CreateOpticalPathInput,
  update_uses_opticalpath?: ?UpdateOpticalPathInput,
  deleted_uses_opticalpath?: ?DeleteOpticalPathInput,
  create_uses_peeringgroup?: ?CreatePeeringGroupInput,
  update_uses_peeringgroup?: ?UpdatePeeringGroupInput,
  deleted_uses_peeringgroup?: ?DeletePeeringGroupInput,
  create_owns_port?: ?$ReadOnlyArray<?CreatePortInput>,
  update_owns_port?: ?$ReadOnlyArray<?UpdatePortInput>,
  deleted_owns_port?: ?$ReadOnlyArray<?DeletePortInput>,
  create_owns_cable?: ?$ReadOnlyArray<?CreateCableInput>,
  update_owns_cable?: ?$ReadOnlyArray<?UpdateCableInput>,
  deleted_owns_cable?: ?$ReadOnlyArray<?DeleteCableInput>,
  create_owns_router?: ?$ReadOnlyArray<?CreateRouterInput>,
  update_owns_router?: ?$ReadOnlyArray<?UpdateRouterInput>,
  deleted_owns_router?: ?$ReadOnlyArray<?DeleteRouterInput>,
  create_owns_switch?: ?$ReadOnlyArray<?CreateSwitchInput>,
  update_owns_switch?: ?$ReadOnlyArray<?UpdateSwitchInput>,
  deleted_owns_switch?: ?$ReadOnlyArray<?DeleteSwitchInput>,
  create_owns_firewall?: ?$ReadOnlyArray<?CreateFirewallInput>,
  update_owns_firewall?: ?$ReadOnlyArray<?UpdateFirewallInput>,
  deleted_owns_firewall?: ?$ReadOnlyArray<?DeleteFirewallInput>,
  create_owns_externalequipment?: ?$ReadOnlyArray<?CreateExternalEquipmentInput>,
  update_owns_externalequipment?: ?$ReadOnlyArray<?UpdateExternalEquipmentInput>,
  deleted_owns_externalequipment?: ?$ReadOnlyArray<?DeleteExternalEquipmentInput>,
  create_owns_opticalnode?: ?$ReadOnlyArray<?CreateOpticalNodeInput>,
  update_owns_opticalnode?: ?$ReadOnlyArray<?UpdateOpticalNodeInput>,
  deleted_owns_opticalnode?: ?$ReadOnlyArray<?DeleteOpticalNodeInput>,
  create_owns_odf?: ?$ReadOnlyArray<?CreateOdfInput>,
  update_owns_odf?: ?$ReadOnlyArray<?UpdateOdfInput>,
  deleted_owns_odf?: ?$ReadOnlyArray<?DeleteOdfInput>,
  create_owns_opticalfilter?: ?$ReadOnlyArray<?CreateOpticalFilterInput>,
  update_owns_opticalfilter?: ?$ReadOnlyArray<?UpdateOpticalFilterInput>,
  deleted_owns_opticalfilter?: ?$ReadOnlyArray<?DeleteOpticalFilterInput>,
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
export type RoleRelationMutationInput = {|
  role_id?: ?string,
  organization_id: string,
  relation_id?: ?number,
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
export type CreateContactMutationVariables = {|
  input: CompositeContactMutationInput
|};
export type CreateContactMutationResponse = {|
  +composite_contact: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +contact: ?{|
        +id: string,
        +title: ?string,
        +notes: ?string,
        +contact_type: ?{|
          +name: string,
          +value: string,
        |},
        +first_name: string,
        +last_name: ?string,
        +pgp_fingerprint: ?string,
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
        +roles: ?$ReadOnlyArray<?{|
          +relation_id: number,
          +role_data: ?{|
            +id: string,
            +name: string,
          |},
          +end: ?{|
            +id: string,
            +name: string,
            +organization_id: ?string,
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
        +member_of_groups: ?$ReadOnlyArray<?{|
          +name: string
        |}>,
      |},
    |},
    +subcreated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +email: ?{|
        +id: string,
        +name: string,
        +type: ?{|
          +name: string,
          +value: string,
        |},
      |},
    |}>,
    +phones_created: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +phone: ?{|
        +id: string,
        +name: string,
        +type: ?{|
          +name: string,
          +value: string,
        |},
      |},
    |}>,
    +rolerelations: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +rolerelation: ?{|
        +relation_id: number,
        +type: string,
        +start: ?{|
          +id: string,
          +first_name: string,
          +last_name: ?string,
        |},
        +end: ?{|
          +id: string,
          +name: string,
        |},
      |},
    |}>,
  |}
|};
export type CreateContactMutation = {|
  variables: CreateContactMutationVariables,
  response: CreateContactMutationResponse,
|};
*/


/*
mutation CreateContactMutation(
  $input: CompositeContactMutationInput!
) {
  composite_contact(input: $input) {
    created {
      errors {
        field
        messages
      }
      contact {
        id
        title
        notes
        contact_type {
          name
          value
          id
        }
        first_name
        last_name
        pgp_fingerprint
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
        roles {
          relation_id
          role_data {
            id
            name
          }
          end {
            id
            name
            organization_id
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
        member_of_groups {
          name
          id
        }
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      email {
        id
        name
        type {
          name
          value
          id
        }
      }
    }
    phones_created {
      errors {
        field
        messages
      }
      phone {
        id
        name
        type {
          name
          value
          id
        }
      }
    }
    rolerelations {
      errors {
        field
        messages
      }
      rolerelation {
        relation_id
        type
        start {
          id
          first_name
          last_name
        }
        end {
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
    "type": "CompositeContactMutationInput!"
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
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v8 = [
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pgp_fingerprint",
  "storageKey": null
},
v12 = [
  (v3/*: any*/),
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v8/*: any*/),
    "storageKey": null
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relation_id",
  "storageKey": null
},
v14 = [
  (v3/*: any*/),
  (v6/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "RoleRelation",
  "kind": "LinkedField",
  "name": "roles",
  "plural": true,
  "selections": [
    (v13/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "role_data",
      "plural": false,
      "selections": (v14/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "end",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v6/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "organization_id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "RoleRelationMutationPayload",
  "kind": "LinkedField",
  "name": "rolerelations",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "RoleRelation",
      "kind": "LinkedField",
      "name": "rolerelation",
      "plural": false,
      "selections": [
        (v13/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Contact",
          "kind": "LinkedField",
          "name": "start",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            (v9/*: any*/),
            (v10/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Organization",
          "kind": "LinkedField",
          "name": "end",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v19 = [
  (v6/*: any*/),
  (v7/*: any*/),
  (v3/*: any*/)
],
v20 = [
  (v3/*: any*/),
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v19/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateContactMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeContactMutationPayload",
        "kind": "LinkedField",
        "name": "composite_contact",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "contact_type",
                    "plural": false,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Email",
                    "kind": "LinkedField",
                    "name": "emails",
                    "plural": true,
                    "selections": (v12/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Phone",
                    "kind": "LinkedField",
                    "name": "phones",
                    "plural": true,
                    "selections": (v12/*: any*/),
                    "storageKey": null
                  },
                  (v15/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "kind": "LinkedField",
                    "name": "comments",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v16/*: any*/),
                      (v17/*: any*/)
                    ],
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
                      (v6/*: any*/)
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
            "concreteType": "CreateEmailPayload",
            "kind": "LinkedField",
            "name": "subcreated",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Email",
                "kind": "LinkedField",
                "name": "email",
                "plural": false,
                "selections": (v12/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CreatePhonePayload",
            "kind": "LinkedField",
            "name": "phones_created",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Phone",
                "kind": "LinkedField",
                "name": "phone",
                "plural": false,
                "selections": (v12/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v18/*: any*/)
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
    "name": "CreateContactMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeContactMutationPayload",
        "kind": "LinkedField",
        "name": "composite_contact",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "kind": "LinkedField",
            "name": "created",
            "plural": false,
            "selections": [
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "contact_type",
                    "plural": false,
                    "selections": (v19/*: any*/),
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Email",
                    "kind": "LinkedField",
                    "name": "emails",
                    "plural": true,
                    "selections": (v20/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Phone",
                    "kind": "LinkedField",
                    "name": "phones",
                    "plural": true,
                    "selections": (v20/*: any*/),
                    "storageKey": null
                  },
                  (v15/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "kind": "LinkedField",
                    "name": "comments",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v3/*: any*/)
                    ],
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
                      (v6/*: any*/),
                      (v3/*: any*/)
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
            "concreteType": "CreateEmailPayload",
            "kind": "LinkedField",
            "name": "subcreated",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Email",
                "kind": "LinkedField",
                "name": "email",
                "plural": false,
                "selections": (v20/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CreatePhonePayload",
            "kind": "LinkedField",
            "name": "phones_created",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Phone",
                "kind": "LinkedField",
                "name": "phone",
                "plural": false,
                "selections": (v20/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v18/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateContactMutation",
    "operationKind": "mutation",
    "text": "mutation CreateContactMutation(\n  $input: CompositeContactMutationInput!\n) {\n  composite_contact(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        title\n        notes\n        contact_type {\n          name\n          value\n          id\n        }\n        first_name\n        last_name\n        pgp_fingerprint\n        emails {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        phones {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        roles {\n          relation_id\n          role_data {\n            id\n            name\n          }\n          end {\n            id\n            name\n            organization_id\n          }\n        }\n        comments {\n          user {\n            first_name\n            last_name\n            id\n          }\n          comment\n          submit_date\n          id\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      email {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n    }\n    phones_created {\n      errors {\n        field\n        messages\n      }\n      phone {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n    }\n    rolerelations {\n      errors {\n        field\n        messages\n      }\n      rolerelation {\n        relation_id\n        type\n        start {\n          id\n          first_name\n          last_name\n        }\n        end {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '09e1073f50e4e33eaccb806b7151527d';

module.exports = node;
