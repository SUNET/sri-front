/**
 * @flow
 * @relayHash a977083d8ef376764f3bf7829b7c58da
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
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_address?: ?$ReadOnlyArray<?CreateAddressInput>,
  update_address?: ?$ReadOnlyArray<?UpdateAddressInput>,
  delete_address?: ?$ReadOnlyArray<?DeleteAddressInput>,
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
  handle_id: number,
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
  email_handle_id?: ?number,
  email?: ?string,
  email_type?: ?any,
  phone_handle_id?: ?number,
  phone?: ?string,
  phone_type?: ?any,
  role_handle_id?: ?number,
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
  email_handle_id?: ?number,
  email?: ?string,
  email_type?: ?any,
  phone_handle_id?: ?number,
  phone?: ?string,
  phone_type?: ?any,
  role_handle_id?: ?number,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteContactInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipInput = {|
  relation_id: number,
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
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteAddressInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type CreateOrganizationMutationVariables = {|
  input: CompositeOrganizationMutationInput
|};
export type CreateOrganizationMutationResponse = {|
  +composite_organization: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +organization: ?{|
        +handle_id: string,
        +name: string,
        +type: ?any,
        +website: ?string,
        +organization_id: ?string,
        +organization_number: ?string,
        +affiliation_customer: ?boolean,
        +affiliation_end_customer: ?boolean,
        +affiliation_host_user: ?boolean,
        +affiliation_partner: ?boolean,
        +affiliation_provider: ?boolean,
        +affiliation_site_owner: ?boolean,
        +comments: ?$ReadOnlyArray<?{|
          +user: ?{|
            +first_name: string,
            +last_name: string,
          |},
          +comment: string,
          +submit_date: any,
        |}>,
        +created: any,
        +creator: {|
          +email: string
        |},
        +modified: any,
        +modifier: {|
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
        +handle_id: string,
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
        +handle_id: string,
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
        +handle_id: string,
        +first_name: string,
        +last_name: string,
        +contact_type: ?any,
        +emails: ?$ReadOnlyArray<?{|
          +handle_id: string,
          +name: string,
          +type: any,
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +handle_id: string,
          +name: string,
          +type: any,
        |}>,
        +roles: ?$ReadOnlyArray<?{|
          +relation_id: number,
          +role_data: ?{|
            +handle_id: string,
            +name: string,
          |},
          +end: ?{|
            +handle_id: string,
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
        +handle_id: string,
        +first_name: string,
        +last_name: string,
        +contact_type: ?any,
        +emails: ?$ReadOnlyArray<?{|
          +handle_id: string,
          +name: string,
          +type: any,
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +handle_id: string,
          +name: string,
          +type: any,
        |}>,
        +roles: ?$ReadOnlyArray<?{|
          +relation_id: number,
          +role_data: ?{|
            +handle_id: string,
            +name: string,
          |},
          +end: ?{|
            +handle_id: string,
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
export type CreateOrganizationMutation = {|
  variables: CreateOrganizationMutationVariables,
  response: CreateOrganizationMutationResponse,
|};
*/


/*
mutation CreateOrganizationMutation(
  $input: CompositeOrganizationMutationInput!
) {
  composite_organization(input: $input) {
    created {
      errors {
        field
        messages
      }
      organization {
        handle_id
        name
        type
        website
        organization_id
        organization_number
        affiliation_customer
        affiliation_end_customer
        affiliation_host_user
        affiliation_partner
        affiliation_provider
        affiliation_site_owner
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
        id
      }
    }
    address_created {
      errors {
        field
        messages
      }
      address {
        handle_id
        name
        street
        postal_code
        postal_area
        phone
        id
      }
    }
    address_updated {
      errors {
        field
        messages
      }
      address {
        handle_id
        name
        street
        postal_code
        postal_area
        phone
        id
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      contact {
        handle_id
        first_name
        last_name
        contact_type
        emails {
          handle_id
          name
          type
          id
        }
        phones {
          handle_id
          name
          type
          id
        }
        roles {
          relation_id
          role_data {
            handle_id
            name
          }
          end {
            handle_id
            name
            id
          }
        }
        member_of_groups {
          name
          id
        }
        id
      }
    }
    subupdated {
      errors {
        field
        messages
      }
      contact {
        handle_id
        first_name
        last_name
        contact_type
        emails {
          handle_id
          name
          type
          id
        }
        phones {
          handle_id
          name
          type
          id
        }
        roles {
          relation_id
          role_data {
            handle_id
            name
          }
          end {
            handle_id
            name
            id
          }
        }
        member_of_groups {
          name
          id
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CompositeOrganizationMutationInput!",
    "defaultValue": null
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
  "kind": "LinkedField",
  "alias": null,
  "name": "errors",
  "storageKey": null,
  "args": null,
  "concreteType": "ErrorType",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "field",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "messages",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "website",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_id",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_number",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_customer",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_end_customer",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_host_user",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_partner",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_provider",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_site_owner",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v21 = [
  (v20/*: any*/)
],
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "street",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_code",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_area",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v27 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "address",
    "storageKey": null,
    "args": null,
    "concreteType": "Address",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v23/*: any*/),
      (v24/*: any*/),
      (v25/*: any*/),
      (v26/*: any*/)
    ]
  }
],
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v29 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/)
],
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v31 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v32 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "role_data",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": (v31/*: any*/)
},
v33 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contact",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/),
      (v28/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "emails",
        "storageKey": null,
        "args": null,
        "concreteType": "Email",
        "plural": true,
        "selections": (v29/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "phones",
        "storageKey": null,
        "args": null,
        "concreteType": "Phone",
        "plural": true,
        "selections": (v29/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "roles",
        "storageKey": null,
        "args": null,
        "concreteType": "RoleRelation",
        "plural": true,
        "selections": [
          (v30/*: any*/),
          (v32/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "end",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": (v31/*: any*/)
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "member_of_groups",
        "storageKey": null,
        "args": null,
        "concreteType": "Group",
        "plural": true,
        "selections": [
          (v4/*: any*/)
        ]
      }
    ]
  }
],
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v35 = [
  (v20/*: any*/),
  (v34/*: any*/)
],
v36 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "address",
    "storageKey": null,
    "args": null,
    "concreteType": "Address",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v23/*: any*/),
      (v24/*: any*/),
      (v25/*: any*/),
      (v26/*: any*/),
      (v34/*: any*/)
    ]
  }
],
v37 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v34/*: any*/)
],
v38 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contact",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/),
      (v28/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "emails",
        "storageKey": null,
        "args": null,
        "concreteType": "Email",
        "plural": true,
        "selections": (v37/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "phones",
        "storageKey": null,
        "args": null,
        "concreteType": "Phone",
        "plural": true,
        "selections": (v37/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "roles",
        "storageKey": null,
        "args": null,
        "concreteType": "RoleRelation",
        "plural": true,
        "selections": [
          (v30/*: any*/),
          (v32/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "end",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v34/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "member_of_groups",
        "storageKey": null,
        "args": null,
        "concreteType": "Group",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v34/*: any*/)
        ]
      },
      (v34/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateOrganizationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeOrganizationMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateOrganizationPayload",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "organization",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comments",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          (v16/*: any*/)
                        ]
                      },
                      (v17/*: any*/),
                      (v18/*: any*/)
                    ]
                  },
                  (v19/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "creator",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": (v21/*: any*/)
                  },
                  (v22/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "modifier",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": (v21/*: any*/)
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "address_created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateAddressPayload",
            "plural": true,
            "selections": (v27/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "address_updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateAddressPayload",
            "plural": true,
            "selections": (v27/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcreated",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "plural": true,
            "selections": (v33/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": true,
            "selections": (v33/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOrganizationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeOrganizationMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateOrganizationPayload",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "organization",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comments",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          (v16/*: any*/),
                          (v34/*: any*/)
                        ]
                      },
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v34/*: any*/)
                    ]
                  },
                  (v19/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "creator",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": (v35/*: any*/)
                  },
                  (v22/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "modifier",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": (v35/*: any*/)
                  },
                  (v34/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "address_created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateAddressPayload",
            "plural": true,
            "selections": (v36/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "address_updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateAddressPayload",
            "plural": true,
            "selections": (v36/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcreated",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "plural": true,
            "selections": (v38/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": true,
            "selections": (v38/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOrganizationMutation",
    "id": null,
    "text": "mutation CreateOrganizationMutation(\n  $input: CompositeOrganizationMutationInput!\n) {\n  composite_organization(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      organization {\n        handle_id\n        name\n        type\n        website\n        organization_id\n        organization_number\n        affiliation_customer\n        affiliation_end_customer\n        affiliation_host_user\n        affiliation_partner\n        affiliation_provider\n        affiliation_site_owner\n        comments {\n          user {\n            first_name\n            last_name\n            id\n          }\n          comment\n          submit_date\n          id\n        }\n        created\n        creator {\n          email\n          id\n        }\n        modified\n        modifier {\n          email\n          id\n        }\n        id\n      }\n    }\n    address_created {\n      errors {\n        field\n        messages\n      }\n      address {\n        handle_id\n        name\n        street\n        postal_code\n        postal_area\n        phone\n        id\n      }\n    }\n    address_updated {\n      errors {\n        field\n        messages\n      }\n      address {\n        handle_id\n        name\n        street\n        postal_code\n        postal_area\n        phone\n        id\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        handle_id\n        first_name\n        last_name\n        contact_type\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        roles {\n          relation_id\n          role_data {\n            handle_id\n            name\n          }\n          end {\n            handle_id\n            name\n            id\n          }\n        }\n        member_of_groups {\n          name\n          id\n        }\n        id\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        handle_id\n        first_name\n        last_name\n        contact_type\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        roles {\n          relation_id\n          role_data {\n            handle_id\n            name\n          }\n          end {\n            handle_id\n            name\n            id\n          }\n        }\n        member_of_groups {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '26f86e0a7b3d21d42f5cddcd2ba37f21';
module.exports = node;
