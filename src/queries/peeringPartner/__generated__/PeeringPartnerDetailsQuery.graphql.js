/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeeringPartnerUpdateForm_peeringPartner$ref = any;
export type PeeringPartnerDetailsQueryVariables = {|
  peeringPartnerId: string
|};
export type PeeringPartnerDetailsQueryResponse = {|
  +getPeeringPartnerById: ?{|
    +id: string,
    +name: string,
    +as_number: ?string,
    +peering_link: ?string,
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
    +$fragmentRefs: PeeringPartnerUpdateForm_peeringPartner$ref,
  |}
|};
export type PeeringPartnerDetailsQuery = {|
  variables: PeeringPartnerDetailsQueryVariables,
  response: PeeringPartnerDetailsQueryResponse,
|};
*/


/*
query PeeringPartnerDetailsQuery(
  $peeringPartnerId: ID!
) {
  getPeeringPartnerById(id: $peeringPartnerId) {
    ...PeeringPartnerUpdateForm_peeringPartner
    id
    name
    as_number
    peering_link
    __typename
    with_same_name {
      id
      name
      __typename
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

fragment PeeringPartnerUpdateForm_peeringPartner on PeeringPartner {
  id
  name
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
    "name": "peeringPartnerId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "peeringPartnerId"
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
  "name": "as_number",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "peering_link",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "name": "affiliation_partner",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_customer",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_provider",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_host_user",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_site_owner",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation_end_customer",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v16 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v17 = {
  "kind": "InlineFragment",
  "selections": (v16/*: any*/),
  "type": "EndUser"
},
v18 = {
  "kind": "InlineFragment",
  "selections": (v16/*: any*/),
  "type": "Customer"
},
v19 = {
  "kind": "InlineFragment",
  "selections": (v16/*: any*/),
  "type": "SiteOwner"
},
v20 = {
  "kind": "InlineFragment",
  "selections": (v16/*: any*/),
  "type": "Provider"
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
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
  (v26/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PeeringPartnerDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PeeringPartner",
        "kind": "LinkedField",
        "name": "getPeeringPartnerById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "with_same_name",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "parent_organization",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "type",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Organization"
              },
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/)
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
                  (v21/*: any*/),
                  (v22/*: any*/)
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PeeringPartnerUpdateForm_peeringPartner"
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
    "name": "PeeringPartnerDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PeeringPartner",
        "kind": "LinkedField",
        "name": "getPeeringPartnerById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v2/*: any*/)
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
            "selections": (v29/*: any*/),
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
            "selections": (v29/*: any*/),
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "with_same_name",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "parent_organization",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "type",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v15/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Organization"
              },
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/)
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
    "name": "PeeringPartnerDetailsQuery",
    "operationKind": "query",
    "text": "query PeeringPartnerDetailsQuery(\n  $peeringPartnerId: ID!\n) {\n  getPeeringPartnerById(id: $peeringPartnerId) {\n    ...PeeringPartnerUpdateForm_peeringPartner\n    id\n    name\n    as_number\n    peering_link\n    __typename\n    with_same_name {\n      id\n      name\n      __typename\n      ... on Organization {\n        website\n        organization_id\n        parent_organization {\n          organization_id\n          id\n        }\n        affiliation_partner\n        affiliation_customer\n        affiliation_provider\n        affiliation_host_user\n        affiliation_site_owner\n        affiliation_end_customer\n        type {\n          name\n          value\n          id\n        }\n      }\n      ... on EndUser {\n        url\n      }\n      ... on Customer {\n        url\n      }\n      ... on SiteOwner {\n        url\n      }\n      ... on Provider {\n        url\n      }\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment PeeringPartnerUpdateForm_peeringPartner on PeeringPartner {\n  id\n  name\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '20cc0be446acd5168a82983ad5bcf5aa';

module.exports = node;
