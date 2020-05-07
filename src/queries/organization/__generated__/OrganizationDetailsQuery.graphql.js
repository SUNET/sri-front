/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizationUpdateForm_organization$ref = any;
export type OrganizationDetailsQueryVariables = {|
  organizationId: string
|};
export type OrganizationDetailsQueryResponse = {|
  +getOrganizationById: ?{|
    +id: string,
    +name: string,
    +type: ?{|
      +name: string,
      +value: string,
    |},
    +website: ?string,
    +organization_id: ?string,
    +organization_number: ?string,
    +description: ?string,
    +incident_management_info: ?string,
    +affiliation_customer: ?boolean,
    +affiliation_end_customer: ?boolean,
    +affiliation_host_user: ?boolean,
    +affiliation_partner: ?boolean,
    +affiliation_provider: ?boolean,
    +affiliation_site_owner: ?boolean,
    +parent_organization: ?{|
      +organization_id: ?string,
      +relation_id: ?number,
      +id: string,
      +name: string,
    |},
    +addresses: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
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
          +id: string,
          +node_name: string,
        |},
        +start: {|
          +id: string,
          +node_name: string,
        |},
      |},
    |}>,
    +contacts: ?$ReadOnlyArray<?{|
      +id: string,
      +first_name: string,
      +last_name: string,
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
    +$fragmentRefs: OrganizationUpdateForm_organization$ref,
  |}
|};
export type OrganizationDetailsQuery = {|
  variables: OrganizationDetailsQueryVariables,
  response: OrganizationDetailsQueryResponse,
|};
*/


/*
query OrganizationDetailsQuery(
  $organizationId: ID!
) {
  getOrganizationById(id: $organizationId) {
    ...OrganizationUpdateForm_organization
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
    description
    incident_management_info
    affiliation_customer
    affiliation_end_customer
    affiliation_host_user
    affiliation_partner
    affiliation_provider
    affiliation_site_owner
    parent_organization {
      organization_id
      relation_id
      id
      name
    }
    addresses {
      id
      name
      street
      postal_code
      postal_area
      phone
    }
    incoming {
      name
      relation {
        relation_id
        type
        end {
          id
          node_name
        }
        start {
          id
          node_name
        }
        id
      }
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

fragment OrganizationUpdateForm_organization on Organization {
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
  description
  incident_management_info
  parent_organization {
    organization_id
    id
    relation_id
    name
  }
  addresses {
    id
    name
    street
    postal_code
    postal_area
    phone
  }
  incoming {
    name
    relation {
      relation_id
      type
      end {
        id
        node_name
      }
      start {
        id
        node_name
      }
      id
    }
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "type",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "website",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization_id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization_number",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "incident_management_info",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_customer",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_end_customer",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_host_user",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_partner",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_provider",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_site_owner",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relation_id",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "Address",
  "kind": "LinkedField",
  "name": "addresses",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
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
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v21 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "node_name",
    "storageKey": null
  }
],
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "NINodeHandlerType",
  "kind": "LinkedField",
  "name": "end",
  "plural": false,
  "selections": (v21/*: any*/),
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "concreteType": "NINodeHandlerType",
  "kind": "LinkedField",
  "name": "start",
  "plural": false,
  "selections": (v21/*: any*/),
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v26 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v6/*: any*/)
],
v27 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v28 = {
  "alias": null,
  "args": null,
  "concreteType": "RoleRelation",
  "kind": "LinkedField",
  "name": "roles",
  "plural": true,
  "selections": [
    (v18/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "role_data",
      "plural": false,
      "selections": (v27/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "end",
      "plural": false,
      "selections": (v27/*: any*/),
      "storageKey": null
    }
  ],
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
  (v3/*: any*/),
  (v4/*: any*/),
  (v2/*: any*/)
],
v36 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "type",
  "plural": false,
  "selections": (v35/*: any*/),
  "storageKey": null
},
v37 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v36/*: any*/)
],
v38 = [
  (v32/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrganizationDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "getOrganizationById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
          (v16/*: any*/),
          (v17/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Organization",
            "kind": "LinkedField",
            "name": "parent_organization",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v18/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v19/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "DictRelationType",
            "kind": "LinkedField",
            "name": "incoming",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NIRelationType",
                "kind": "LinkedField",
                "name": "relation",
                "plural": false,
                "selections": [
                  (v18/*: any*/),
                  (v20/*: any*/),
                  (v22/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": null
              }
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
            "selections": [
              (v2/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "contact_type",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Email",
                "kind": "LinkedField",
                "name": "emails",
                "plural": true,
                "selections": (v26/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Phone",
                "kind": "LinkedField",
                "name": "phones",
                "plural": true,
                "selections": (v26/*: any*/),
                "storageKey": null
              },
              (v28/*: any*/)
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v24/*: any*/),
                  (v25/*: any*/)
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrganizationUpdateForm_organization"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrganizationDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "getOrganizationById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v36/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Organization",
            "kind": "LinkedField",
            "name": "parent_organization",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v2/*: any*/),
              (v18/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v19/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "DictRelationType",
            "kind": "LinkedField",
            "name": "incoming",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NIRelationType",
                "kind": "LinkedField",
                "name": "relation",
                "plural": false,
                "selections": [
                  (v18/*: any*/),
                  (v20/*: any*/),
                  (v22/*: any*/),
                  (v23/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
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
            "selections": [
              (v2/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "contact_type",
                "plural": false,
                "selections": (v35/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Email",
                "kind": "LinkedField",
                "name": "emails",
                "plural": true,
                "selections": (v37/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Phone",
                "kind": "LinkedField",
                "name": "phones",
                "plural": true,
                "selections": (v37/*: any*/),
                "storageKey": null
              },
              (v28/*: any*/)
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v24/*: any*/),
                  (v25/*: any*/),
                  (v2/*: any*/)
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
            "selections": (v38/*: any*/),
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
            "selections": (v38/*: any*/),
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrganizationDetailsQuery",
    "operationKind": "query",
    "text": "query OrganizationDetailsQuery(\n  $organizationId: ID!\n) {\n  getOrganizationById(id: $organizationId) {\n    ...OrganizationUpdateForm_organization\n    id\n    name\n    type {\n      name\n      value\n      id\n    }\n    website\n    organization_id\n    organization_number\n    description\n    incident_management_info\n    affiliation_customer\n    affiliation_end_customer\n    affiliation_host_user\n    affiliation_partner\n    affiliation_provider\n    affiliation_site_owner\n    parent_organization {\n      organization_id\n      relation_id\n      id\n      name\n    }\n    addresses {\n      id\n      name\n      street\n      postal_code\n      postal_area\n      phone\n    }\n    incoming {\n      name\n      relation {\n        relation_id\n        type\n        end {\n          id\n          node_name\n        }\n        start {\n          id\n          node_name\n        }\n        id\n      }\n    }\n    contacts {\n      id\n      first_name\n      last_name\n      contact_type {\n        name\n        value\n        id\n      }\n      emails {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n      phones {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n      roles {\n        relation_id\n        role_data {\n          id\n          name\n        }\n        end {\n          id\n          name\n        }\n      }\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment OrganizationUpdateForm_organization on Organization {\n  id\n  name\n  type {\n    name\n    value\n    id\n  }\n  website\n  organization_id\n  organization_number\n  description\n  incident_management_info\n  parent_organization {\n    organization_id\n    id\n    relation_id\n    name\n  }\n  addresses {\n    id\n    name\n    street\n    postal_code\n    postal_area\n    phone\n  }\n  incoming {\n    name\n    relation {\n      relation_id\n      type\n      end {\n        id\n        node_name\n      }\n      start {\n        id\n        node_name\n      }\n      id\n    }\n  }\n  contacts {\n    id\n    first_name\n    last_name\n    contact_type {\n      name\n      value\n      id\n    }\n    emails {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    phones {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    roles {\n      relation_id\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n      }\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '88abe59ae3c857317c529ade61bd7bb4';

module.exports = node;
