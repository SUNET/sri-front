/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeFirewallMutationInput = {|
  delete_owner?: ?DeleteOwnerMutationInput,
  update_input?: ?UpdateFirewallInput,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
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
  create_dependents_opticallink?: ?$ReadOnlyArray<?CreateOpticalLinkInput>,
  update_dependents_opticallink?: ?$ReadOnlyArray<?UpdateOpticalLinkInput>,
  deleted_dependents_opticallink?: ?$ReadOnlyArray<?DeleteOpticalLinkInput>,
  create_dependents_peeringgroup?: ?$ReadOnlyArray<?CreatePeeringGroupInput>,
  update_dependents_peeringgroup?: ?$ReadOnlyArray<?UpdatePeeringGroupInput>,
  deleted_dependents_peeringgroup?: ?$ReadOnlyArray<?DeletePeeringGroupInput>,
  clientMutationId?: ?string,
|};
export type DeleteOwnerMutationInput = {|
  id: string,
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
export type UpdateFirewallMutationVariables = {|
  input: CompositeFirewallMutationInput
|};
export type UpdateFirewallMutationResponse = {|
  +composite_firewall: ?{|
    +updated: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +firewall: ?{|
        +id: string,
        +name: string,
        +description: ?string,
        +operational_state: ?{|
          +name: string,
          +value: string,
        |},
        +managed_by: ?{|
          +id: string,
          +value: string,
          +name: string,
        |},
        +responsible_group: ?{|
          +id: string,
          +name: string,
        |},
        +support_group: ?{|
          +id: string,
          +name: string,
        |},
        +backup: ?string,
        +security_class: ?{|
          +name: string,
          +value: string,
        |},
        +security_comment: ?string,
        +os: ?string,
        +os_version: ?string,
        +model: ?string,
        +vendor: ?string,
        +service_tag: ?string,
        +end_support: ?string,
        +max_number_of_ports: ?number,
        +rack_units: ?number,
        +rack_position: ?number,
        +contract_number: ?string,
        +location: ?{|
          +id: string,
          +name: string,
        |},
        +owner: ?{|
          +__typename: string,
          +id: string,
          +name: string,
          +type?: {|
            +name: string
          |},
        |},
        +__typename: string,
        +comments: ?$ReadOnlyArray<?{|
          +id: string,
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
    |}
  |}
|};
export type UpdateFirewallMutation = {|
  variables: UpdateFirewallMutationVariables,
  response: UpdateFirewallMutationResponse,
|};
*/


/*
mutation UpdateFirewallMutation(
  $input: CompositeFirewallMutationInput!
) {
  composite_firewall(input: $input) {
    updated {
      errors {
        field
        messages
      }
      firewall {
        id
        name
        description
        operational_state {
          name
          value
          id
        }
        managed_by {
          id
          value
          name
        }
        responsible_group {
          id
          name
        }
        support_group {
          id
          name
        }
        backup
        security_class {
          name
          value
          id
        }
        security_comment
        os
        os_version
        model
        vendor
        service_tag
        end_support
        max_number_of_ports
        rack_units
        rack_position
        contract_number
        location {
          __typename
          id
          name
        }
        owner {
          __typename
          id
          name
          ... on EndUser {
            type: node_type {
              name: type
              id
            }
          }
          ... on Customer {
            type: node_type {
              name: type
              id
            }
          }
          ... on HostUser {
            type: node_type {
              name: type
              id
            }
          }
          ... on Provider {
            type: node_type {
              name: type
              id
            }
          }
        }
        __typename
        comments {
          id
          user {
            first_name
            last_name
            id
          }
          comment
          submit_date
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
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CompositeFirewallMutationInput!"
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
  (v4/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "managed_by",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v6/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v9 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Group",
  "kind": "LinkedField",
  "name": "responsible_group",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "Group",
  "kind": "LinkedField",
  "name": "support_group",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backup",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "security_comment",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "os",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "os_version",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "model",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vendor",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "service_tag",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "end_support",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "max_number_of_ports",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_units",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_position",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contract_number",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v25 = {
  "alias": "name",
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v26 = [
  {
    "alias": "type",
    "args": null,
    "concreteType": "NINodeType",
    "kind": "LinkedField",
    "name": "node_type",
    "plural": false,
    "selections": [
      (v25/*: any*/)
    ],
    "storageKey": null
  }
],
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v33 = [
  (v32/*: any*/)
],
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v35 = [
  (v4/*: any*/),
  (v6/*: any*/),
  (v3/*: any*/)
],
v36 = [
  {
    "alias": "type",
    "args": null,
    "concreteType": "NINodeType",
    "kind": "LinkedField",
    "name": "node_type",
    "plural": false,
    "selections": [
      (v25/*: any*/),
      (v3/*: any*/)
    ],
    "storageKey": null
  }
],
v37 = [
  (v32/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateFirewallMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeFirewallMutationPayload",
        "kind": "LinkedField",
        "name": "composite_firewall",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateFirewallPayload",
            "kind": "LinkedField",
            "name": "updated",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Firewall",
                "kind": "LinkedField",
                "name": "firewall",
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
                    "selections": (v7/*: any*/),
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "security_class",
                    "plural": false,
                    "selections": (v7/*: any*/),
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v23/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "location",
                    "plural": false,
                    "selections": (v9/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "owner",
                    "plural": false,
                    "selections": [
                      (v24/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v26/*: any*/),
                        "type": "EndUser"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v26/*: any*/),
                        "type": "Customer"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v26/*: any*/),
                        "type": "HostUser"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v26/*: any*/),
                        "type": "Provider"
                      }
                    ],
                    "storageKey": null
                  },
                  (v24/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "kind": "LinkedField",
                    "name": "comments",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v27/*: any*/),
                          (v28/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v29/*: any*/),
                      (v30/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v31/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "creator",
                    "plural": false,
                    "selections": (v33/*: any*/),
                    "storageKey": null
                  },
                  (v34/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "modifier",
                    "plural": false,
                    "selections": (v33/*: any*/),
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
    "name": "UpdateFirewallMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeFirewallMutationPayload",
        "kind": "LinkedField",
        "name": "composite_firewall",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UpdateFirewallPayload",
            "kind": "LinkedField",
            "name": "updated",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Firewall",
                "kind": "LinkedField",
                "name": "firewall",
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
                    "selections": (v35/*: any*/),
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "security_class",
                    "plural": false,
                    "selections": (v35/*: any*/),
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v23/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "location",
                    "plural": false,
                    "selections": [
                      (v24/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "owner",
                    "plural": false,
                    "selections": [
                      (v24/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v36/*: any*/),
                        "type": "EndUser"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v36/*: any*/),
                        "type": "Customer"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v36/*: any*/),
                        "type": "HostUser"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v36/*: any*/),
                        "type": "Provider"
                      }
                    ],
                    "storageKey": null
                  },
                  (v24/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "kind": "LinkedField",
                    "name": "comments",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v29/*: any*/),
                      (v30/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v31/*: any*/),
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
                  (v34/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateFirewallMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateFirewallMutation(\n  $input: CompositeFirewallMutationInput!\n) {\n  composite_firewall(input: $input) {\n    updated {\n      errors {\n        field\n        messages\n      }\n      firewall {\n        id\n        name\n        description\n        operational_state {\n          name\n          value\n          id\n        }\n        managed_by {\n          id\n          value\n          name\n        }\n        responsible_group {\n          id\n          name\n        }\n        support_group {\n          id\n          name\n        }\n        backup\n        security_class {\n          name\n          value\n          id\n        }\n        security_comment\n        os\n        os_version\n        model\n        vendor\n        service_tag\n        end_support\n        max_number_of_ports\n        rack_units\n        rack_position\n        contract_number\n        location {\n          __typename\n          id\n          name\n        }\n        owner {\n          __typename\n          id\n          name\n          ... on EndUser {\n            type: node_type {\n              name: type\n              id\n            }\n          }\n          ... on Customer {\n            type: node_type {\n              name: type\n              id\n            }\n          }\n          ... on HostUser {\n            type: node_type {\n              name: type\n              id\n            }\n          }\n          ... on Provider {\n            type: node_type {\n              name: type\n              id\n            }\n          }\n        }\n        __typename\n        comments {\n          id\n          user {\n            first_name\n            last_name\n            id\n          }\n          comment\n          submit_date\n        }\n        created\n        creator {\n          email\n          id\n        }\n        modified\n        modifier {\n          email\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6bbb8b76045f4b0cf2ea494631bd3236';

module.exports = node;
