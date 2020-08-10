/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCustomerInput = {|
  name: string,
  url?: ?string,
  description?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type UpdateCustomerMutationVariables = {|
  input: UpdateCustomerInput
|};
export type UpdateCustomerMutationResponse = {|
  +update_customer: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +customer: ?{|
      +id: string,
      +name: string,
      +description: ?string,
      +url: ?string,
      +__typename: string,
      +with_same_name: ?$ReadOnlyArray<?{|
        +id: string,
        +name: string,
        +__typename: string,
        +website?: ?string,
        +organization_id?: ?string,
        +parent_organization?: ?{|
          +organization_id: ?string
        |},
        +affiliation_partner?: ?boolean,
        +affiliation_customer?: ?boolean,
        +affiliation_provider?: ?boolean,
        +affiliation_host_user?: ?boolean,
        +affiliation_site_owner?: ?boolean,
        +affiliation_end_customer?: ?boolean,
        +type?: ?{|
          +name: string,
          +value: string,
        |},
        +url?: ?string,
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
|};
export type UpdateCustomerMutation = {|
  variables: UpdateCustomerMutationVariables,
  response: UpdateCustomerMutationResponse,
|};
*/


/*
mutation UpdateCustomerMutation(
  $input: UpdateCustomerInput!
) {
  update_customer(input: $input) {
    errors {
      field
      messages
    }
    customer {
      id
      name
      description
      url
      __typename
      with_same_name {
        id
        name
        ... on Organization {
          website
          organization_id
          parent_organization {
            organization_id
            id
          }
          affiliation_partner
          affiliation_customer
          affiliation_provider
          affiliation_host_user
          affiliation_site_owner
          affiliation_end_customer
          type {
            name
            value
            id
          }
        }
        ... on EndUser {
          url
        }
        ... on Customer {
          url
        }
        ... on SiteOwner {
          url
        }
        ... on Provider {
          url
        }
        __typename
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCustomerInput!"
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
  "name": "url",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "name": "affiliation_partner",
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
  "name": "affiliation_provider",
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
  "name": "affiliation_site_owner",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_end_customer",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v17 = [
  (v6/*: any*/)
],
v18 = {
  "kind": "InlineFragment",
  "selections": (v17/*: any*/),
  "type": "EndUser"
},
v19 = {
  "kind": "InlineFragment",
  "selections": (v17/*: any*/),
  "type": "Customer"
},
v20 = {
  "kind": "InlineFragment",
  "selections": (v17/*: any*/),
  "type": "SiteOwner"
},
v21 = {
  "kind": "InlineFragment",
  "selections": (v17/*: any*/),
  "type": "Provider"
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v28 = [
  (v27/*: any*/)
],
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v30 = [
  (v27/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateCustomerMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCustomerPayload",
        "kind": "LinkedField",
        "name": "update_customer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Customer",
            "kind": "LinkedField",
            "name": "customer",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "with_same_name",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v7/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/),
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
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Choice",
                        "kind": "LinkedField",
                        "name": "type",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Organization"
                  },
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/)
                ],
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
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v22/*: any*/),
                      (v23/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v24/*: any*/),
                  (v25/*: any*/)
                ],
                "storageKey": null
              },
              (v26/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "creator",
                "plural": false,
                "selections": (v28/*: any*/),
                "storageKey": null
              },
              (v29/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "modifier",
                "plural": false,
                "selections": (v28/*: any*/),
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
    "name": "UpdateCustomerMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCustomerPayload",
        "kind": "LinkedField",
        "name": "update_customer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Customer",
            "kind": "LinkedField",
            "name": "customer",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "with_same_name",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v7/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/),
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
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Choice",
                        "kind": "LinkedField",
                        "name": "type",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v16/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Organization"
                  },
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/)
                ],
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
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v24/*: any*/),
                  (v25/*: any*/)
                ],
                "storageKey": null
              },
              (v26/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "creator",
                "plural": false,
                "selections": (v30/*: any*/),
                "storageKey": null
              },
              (v29/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "modifier",
                "plural": false,
                "selections": (v30/*: any*/),
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
    "name": "UpdateCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCustomerMutation(\n  $input: UpdateCustomerInput!\n) {\n  update_customer(input: $input) {\n    errors {\n      field\n      messages\n    }\n    customer {\n      id\n      name\n      description\n      url\n      __typename\n      with_same_name {\n        id\n        name\n        ... on Organization {\n          website\n          organization_id\n          parent_organization {\n            organization_id\n            id\n          }\n          affiliation_partner\n          affiliation_customer\n          affiliation_provider\n          affiliation_host_user\n          affiliation_site_owner\n          affiliation_end_customer\n          type {\n            name\n            value\n            id\n          }\n        }\n        ... on EndUser {\n          url\n        }\n        ... on Customer {\n          url\n        }\n        ... on SiteOwner {\n          url\n        }\n        ... on Provider {\n          url\n        }\n        __typename\n      }\n      comments {\n        id\n        user {\n          first_name\n          last_name\n          id\n        }\n        comment\n        submit_date\n      }\n      created\n      creator {\n        email\n        id\n      }\n      modified\n      modifier {\n        email\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ce615f2bafa72f9d218fc344d1f0067';

module.exports = node;
