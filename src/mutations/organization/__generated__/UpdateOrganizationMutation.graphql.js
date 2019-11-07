/**
 * @flow
 * @relayHash a1ca27d6ec96ce3fd0476c44dcb6fd07
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
export type UpdateOrganizationMutationVariables = {|
  input: UpdateOrganizationInput
|};
export type UpdateOrganizationMutationResponse = {|
  +update_organization: ?{|
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
  |}
|};
export type UpdateOrganizationMutation = {|
  variables: UpdateOrganizationMutationVariables,
  response: UpdateOrganizationMutationResponse,
|};
*/


/*
mutation UpdateOrganizationMutation(
  $input: UpdateOrganizationInput!
) {
  update_organization(input: $input) {
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateOrganizationInput!",
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v24 = [
  (v20/*: any*/),
  (v23/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateOrganizationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrganizationPayload",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateOrganizationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrganizationPayload",
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
                      (v23/*: any*/)
                    ]
                  },
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v23/*: any*/)
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
                "selections": (v24/*: any*/)
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
                "selections": (v24/*: any*/)
              },
              (v23/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateOrganizationMutation",
    "id": null,
    "text": "mutation UpdateOrganizationMutation(\n  $input: UpdateOrganizationInput!\n) {\n  update_organization(input: $input) {\n    errors {\n      field\n      messages\n    }\n    organization {\n      handle_id\n      name\n      type\n      website\n      organization_id\n      organization_number\n      affiliation_customer\n      affiliation_end_customer\n      affiliation_host_user\n      affiliation_partner\n      affiliation_provider\n      affiliation_site_owner\n      comments {\n        user {\n          first_name\n          last_name\n          id\n        }\n        comment\n        submit_date\n        id\n      }\n      created\n      creator {\n        email\n        id\n      }\n      modified\n      modifier {\n        email\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0eaa8066c63dee5c2284f30a25c57e17';
module.exports = node;
