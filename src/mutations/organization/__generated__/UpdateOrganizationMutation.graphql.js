/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeOrganizationMutationInput = {|
  create_input?: ?CreateOrganizationInput,
  update_input?: ?UpdateOrganizationInput,
  create_subinputs?: ?$ReadOnlyArray<?CreateContactInput>,
  update_subinputs?: ?$ReadOnlyArray<?UpdateContactInput>,
  delete_subinputs?: ?$ReadOnlyArray<?DeleteContactInput>,
  create_address?: ?$ReadOnlyArray<?CreateAddressInput>,
  update_address?: ?$ReadOnlyArray<?UpdateAddressInput>,
  delete_address?: ?$ReadOnlyArray<?DeleteAddressInput>,
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
  update_uses_host?: ?UpdateHostInput,
  deleted_uses_host?: ?DeleteHostInput,
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
export type UpdateHostInput = {|
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
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteHostInput = {|
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
  relationship_owner?: ?number,
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
export type UpdateOrganizationMutationVariables = {|
  input: CompositeOrganizationMutationInput
|};
export type UpdateOrganizationMutationResponse = {|
  +composite_organization: ?{|
    +updated: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +organization: ?{|
        +id: string,
        +name: string,
        +type: ?{|
          +name: string,
          +value: string,
        |},
        +website: ?string,
        +organization_id: ?string,
        +organization_number: ?string,
        +affiliation_customer: ?boolean,
        +affiliation_end_customer: ?boolean,
        +affiliation_host_user: ?boolean,
        +affiliation_partner: ?boolean,
        +affiliation_provider: ?boolean,
        +affiliation_site_owner: ?boolean,
        +parent_organization: ?{|
          +organization_id: ?string
        |},
        +contacts: ?$ReadOnlyArray<?{|
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
          +roles: ?$ReadOnlyArray<?{|
            +relation_id: number,
            +role_data: ?{|
              +id: string,
              +name: string,
            |},
            +end: ?{|
              +id: string,
              +name: string,
            |},
          |}>,
          +member_of_groups: ?$ReadOnlyArray<?{|
            +name: string
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
        +created: any,
        +creator: ?{|
          +email: string
        |},
        +modified: any,
        +modifier: ?{|
          +email: string
        |},
      |},
    |},
    +address_created: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +address: ?{|
        +id: string,
        +name: string,
        +street: ?string,
        +postal_code: ?string,
        +postal_area: ?string,
        +phone: ?string,
      |},
    |}>,
    +address_updated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +address: ?{|
        +id: string,
        +name: string,
        +street: ?string,
        +postal_code: ?string,
        +postal_area: ?string,
        +phone: ?string,
      |},
    |}>,
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
        +roles: ?$ReadOnlyArray<?{|
          +relation_id: number,
          +role_data: ?{|
            +id: string,
            +name: string,
          |},
          +end: ?{|
            +id: string,
            +name: string,
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
        +roles: ?$ReadOnlyArray<?{|
          +relation_id: number,
          +role_data: ?{|
            +id: string,
            +name: string,
          |},
          +end: ?{|
            +id: string,
            +name: string,
          |},
        |}>,
        +member_of_groups: ?$ReadOnlyArray<?{|
          +name: string
        |}>,
      |},
    |}>,
  |}
|};
export type UpdateOrganizationMutation = {|
  variables: UpdateOrganizationMutationVariables,
  response: UpdateOrganizationMutationResponse,
|};
*/


/*
mutation UpdateOrganizationMutation(
  $input: CompositeOrganizationMutationInput!
) {
  composite_organization(input: $input) {
    updated {
      errors {
        field
        messages
      }
      organization {
        id
        name
        type {
          name
          value
          id
        }
        website
        organization_id
        organization_number
        affiliation_customer
        affiliation_end_customer
        affiliation_host_user
        affiliation_partner
        affiliation_provider
        affiliation_site_owner
        parent_organization {
          organization_id
          id
        }
        contacts {
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
          roles {
            relation_id
            role_data {
              id
              name
            }
            end {
              id
              name
            }
          }
          member_of_groups {
            name
            id
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
        created
        creator {
          email
          id
        }
        modified
        modifier {
          email
          id
        }
      }
    }
    address_created {
      errors {
        field
        messages
      }
      address {
        id
        name
        street
        postal_code
        postal_area
        phone
      }
    }
    address_updated {
      errors {
        field
        messages
      }
      address {
        id
        name
        street
        postal_code
        postal_area
        phone
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
        roles {
          relation_id
          role_data {
            id
            name
          }
          end {
            id
            name
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
        roles {
          relation_id
          role_data {
            id
            name
          }
          end {
            id
            name
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
    "type": "CompositeOrganizationMutationInput!"
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
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "type",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "website",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization_id",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization_number",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_customer",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_end_customer",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_host_user",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_partner",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_provider",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_site_owner",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v19 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v7/*: any*/)
],
v20 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "RoleRelation",
  "kind": "LinkedField",
  "name": "roles",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "relation_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "role_data",
      "plural": false,
      "selections": (v20/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "end",
      "plural": false,
      "selections": (v20/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = [
  (v3/*: any*/),
  (v17/*: any*/),
  (v18/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "contact_type",
    "plural": false,
    "selections": (v6/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Email",
    "kind": "LinkedField",
    "name": "emails",
    "plural": true,
    "selections": (v19/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Phone",
    "kind": "LinkedField",
    "name": "phones",
    "plural": true,
    "selections": (v19/*: any*/),
    "storageKey": null
  },
  (v21/*: any*/),
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
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v27 = [
  (v26/*: any*/)
],
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v29 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Address",
    "kind": "LinkedField",
    "name": "address",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v4/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "street",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "postal_code",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "postal_area",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "CreateAddressPayload",
  "kind": "LinkedField",
  "name": "address_created",
  "plural": true,
  "selections": (v29/*: any*/),
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "UpdateAddressPayload",
  "kind": "LinkedField",
  "name": "address_updated",
  "plural": true,
  "selections": (v29/*: any*/),
  "storageKey": null
},
v32 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Contact",
    "kind": "LinkedField",
    "name": "contact",
    "plural": false,
    "selections": (v22/*: any*/),
    "storageKey": null
  }
],
v33 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v3/*: any*/)
],
v34 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "type",
  "plural": false,
  "selections": (v33/*: any*/),
  "storageKey": null
},
v35 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v34/*: any*/)
],
v36 = [
  (v3/*: any*/),
  (v17/*: any*/),
  (v18/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "contact_type",
    "plural": false,
    "selections": (v33/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Email",
    "kind": "LinkedField",
    "name": "emails",
    "plural": true,
    "selections": (v35/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Phone",
    "kind": "LinkedField",
    "name": "phones",
    "plural": true,
    "selections": (v35/*: any*/),
    "storageKey": null
  },
  (v21/*: any*/),
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
v37 = [
  (v26/*: any*/),
  (v3/*: any*/)
],
v38 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Contact",
    "kind": "LinkedField",
    "name": "contact",
    "plural": false,
    "selections": (v36/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateOrganizationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeOrganizationMutationPayload",
        "kind": "LinkedField",
        "name": "composite_organization",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateOrganizationPayload",
            "kind": "LinkedField",
            "name": "updated",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "organization",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "parent_organization",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Contact",
                    "kind": "LinkedField",
                    "name": "contacts",
                    "plural": true,
                    "selections": (v22/*: any*/),
                    "storageKey": null
                  },
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
                          (v17/*: any*/),
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v23/*: any*/),
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v25/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "creator",
                    "plural": false,
                    "selections": (v27/*: any*/),
                    "storageKey": null
                  },
                  (v28/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "modifier",
                    "plural": false,
                    "selections": (v27/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v30/*: any*/),
          (v31/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "kind": "LinkedField",
            "name": "subcreated",
            "plural": true,
            "selections": (v32/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "kind": "LinkedField",
            "name": "subupdated",
            "plural": true,
            "selections": (v32/*: any*/),
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
    "name": "UpdateOrganizationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeOrganizationMutationPayload",
        "kind": "LinkedField",
        "name": "composite_organization",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateOrganizationPayload",
            "kind": "LinkedField",
            "name": "updated",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "organization",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v34/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "parent_organization",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Contact",
                    "kind": "LinkedField",
                    "name": "contacts",
                    "plural": true,
                    "selections": (v36/*: any*/),
                    "storageKey": null
                  },
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
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v25/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "creator",
                    "plural": false,
                    "selections": (v37/*: any*/),
                    "storageKey": null
                  },
                  (v28/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "modifier",
                    "plural": false,
                    "selections": (v37/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v30/*: any*/),
          (v31/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "kind": "LinkedField",
            "name": "subcreated",
            "plural": true,
            "selections": (v38/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "kind": "LinkedField",
            "name": "subupdated",
            "plural": true,
            "selections": (v38/*: any*/),
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
    "name": "UpdateOrganizationMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateOrganizationMutation(\n  $input: CompositeOrganizationMutationInput!\n) {\n  composite_organization(input: $input) {\n    updated {\n      errors {\n        field\n        messages\n      }\n      organization {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n        website\n        organization_id\n        organization_number\n        affiliation_customer\n        affiliation_end_customer\n        affiliation_host_user\n        affiliation_partner\n        affiliation_provider\n        affiliation_site_owner\n        parent_organization {\n          organization_id\n          id\n        }\n        contacts {\n          id\n          first_name\n          last_name\n          contact_type {\n            name\n            value\n            id\n          }\n          emails {\n            id\n            name\n            type {\n              name\n              value\n              id\n            }\n          }\n          phones {\n            id\n            name\n            type {\n              name\n              value\n              id\n            }\n          }\n          roles {\n            relation_id\n            role_data {\n              id\n              name\n            }\n            end {\n              id\n              name\n            }\n          }\n          member_of_groups {\n            name\n            id\n          }\n        }\n        comments {\n          user {\n            first_name\n            last_name\n            id\n          }\n          comment\n          submit_date\n          id\n        }\n        created\n        creator {\n          email\n          id\n        }\n        modified\n        modifier {\n          email\n          id\n        }\n      }\n    }\n    address_created {\n      errors {\n        field\n        messages\n      }\n      address {\n        id\n        name\n        street\n        postal_code\n        postal_area\n        phone\n      }\n    }\n    address_updated {\n      errors {\n        field\n        messages\n      }\n      address {\n        id\n        name\n        street\n        postal_code\n        postal_area\n        phone\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        first_name\n        last_name\n        contact_type {\n          name\n          value\n          id\n        }\n        emails {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        phones {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        roles {\n          relation_id\n          role_data {\n            id\n            name\n          }\n          end {\n            id\n            name\n          }\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        first_name\n        last_name\n        contact_type {\n          name\n          value\n          id\n        }\n        emails {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        phones {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        roles {\n          relation_id\n          role_data {\n            id\n            name\n          }\n          end {\n            id\n            name\n          }\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce4db6bbbce03b511e0382651d47c558';

module.exports = node;
