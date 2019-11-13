/**
 * @flow
 * @relayHash 2d447608c0b4bc39b40404e7a5d7fc12
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
export type CreateOrganizationMutationVariables = {|
  input: CreateOrganizationInput
|};
export type CreateOrganizationMutationResponse = {|
  +create_organization: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +organization: ?{|
      +handle_id: string,
      +name: string,
      +type: ?any,
      +website: ?string,
      +incident_management_info: ?string,
      +affiliation_customer: ?boolean,
      +affiliation_end_customer: ?boolean,
      +affiliation_host_user: ?boolean,
      +affiliation_partner: ?boolean,
      +affiliation_provider: ?boolean,
      +affiliation_site_owner: ?boolean,
      +organization_id: ?string,
      +organization_number: ?string,
      +addresses: ?$ReadOnlyArray<?{|
        +handle_id: string,
        +street: ?string,
        +postal_code: ?string,
        +postal_area: ?string,
        +phone: ?string,
      |}>,
      +incoming: ?$ReadOnlyArray<?{|
        +name: string,
        +relation: {|
          +relation_id: number,
          +type: string,
          +end: {|
            +handle_id: string,
            +node_name: string,
          |},
          +start: {|
            +handle_id: string,
            +node_name: string,
          |},
        |},
      |}>,
      +comments: ?$ReadOnlyArray<?{|
        +id: string,
        +user: ?{|
          +first_name: string,
          +last_name: string,
        |},
        +comment: string,
        +submit_date: any,
      |}>,
    |},
  |}
|};
export type CreateOrganizationMutation = {|
  variables: CreateOrganizationMutationVariables,
  response: CreateOrganizationMutationResponse,
|};
*/


/*
mutation CreateOrganizationMutation(
  $input: CreateOrganizationInput!
) {
  create_organization(input: $input) {
    errors {
      field
      messages
    }
    organization {
      handle_id
      name
      type
      website
      incident_management_info
      affiliation_customer
      affiliation_end_customer
      affiliation_host_user
      affiliation_partner
      affiliation_provider
      affiliation_site_owner
      organization_id
      organization_number
      addresses {
        handle_id
        street
        postal_code
        postal_area
        phone
        id
      }
      incoming {
        name
        relation {
          relation_id
          type
          end {
            handle_id
            node_name
            id
          }
          start {
            handle_id
            node_name
            id
          }
          id
        }
      }
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
    "type": "CreateOrganizationInput!",
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
  "name": "incident_management_info",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_customer",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_end_customer",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_host_user",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_partner",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_provider",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_site_owner",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_id",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_number",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "street",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_code",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postal_area",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "node_name",
  "args": null,
  "storageKey": null
},
v22 = [
  (v3/*: any*/),
  (v21/*: any*/)
],
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v28 = [
  (v3/*: any*/),
  (v21/*: any*/),
  (v23/*: any*/)
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
        "name": "create_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v15/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "addresses",
                "storageKey": null,
                "args": null,
                "concreteType": "Address",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "incoming",
                "storageKey": null,
                "args": null,
                "concreteType": "DictRelationType",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "relation",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NIRelationType",
                    "plural": false,
                    "selections": [
                      (v20/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NINodeHandlerType",
                        "plural": false,
                        "selections": (v22/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "start",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NINodeHandlerType",
                        "plural": false,
                        "selections": (v22/*: any*/)
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "comments",
                "storageKey": null,
                "args": null,
                "concreteType": "CommentType",
                "plural": true,
                "selections": [
                  (v23/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v24/*: any*/),
                      (v25/*: any*/)
                    ]
                  },
                  (v26/*: any*/),
                  (v27/*: any*/)
                ]
              }
            ]
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
        "name": "create_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v15/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "addresses",
                "storageKey": null,
                "args": null,
                "concreteType": "Address",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v23/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "incoming",
                "storageKey": null,
                "args": null,
                "concreteType": "DictRelationType",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "relation",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NIRelationType",
                    "plural": false,
                    "selections": [
                      (v20/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NINodeHandlerType",
                        "plural": false,
                        "selections": (v28/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "start",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NINodeHandlerType",
                        "plural": false,
                        "selections": (v28/*: any*/)
                      },
                      (v23/*: any*/)
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "comments",
                "storageKey": null,
                "args": null,
                "concreteType": "CommentType",
                "plural": true,
                "selections": [
                  (v23/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v23/*: any*/)
                    ]
                  },
                  (v26/*: any*/),
                  (v27/*: any*/)
                ]
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
    "name": "CreateOrganizationMutation",
    "id": null,
    "text": "mutation CreateOrganizationMutation(\n  $input: CreateOrganizationInput!\n) {\n  create_organization(input: $input) {\n    errors {\n      field\n      messages\n    }\n    organization {\n      handle_id\n      name\n      type\n      website\n      incident_management_info\n      affiliation_customer\n      affiliation_end_customer\n      affiliation_host_user\n      affiliation_partner\n      affiliation_provider\n      affiliation_site_owner\n      organization_id\n      organization_number\n      addresses {\n        handle_id\n        street\n        postal_code\n        postal_area\n        phone\n        id\n      }\n      incoming {\n        name\n        relation {\n          relation_id\n          type\n          end {\n            handle_id\n            node_name\n            id\n          }\n          start {\n            handle_id\n            node_name\n            id\n          }\n          id\n        }\n      }\n      comments {\n        id\n        user {\n          first_name\n          last_name\n          id\n        }\n        comment\n        submit_date\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae4986b1050bc504b98edd83d5886ec8';
module.exports = node;
