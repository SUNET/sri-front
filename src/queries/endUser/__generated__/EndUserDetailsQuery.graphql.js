/**
 * @flow
 * @relayHash a6d5a6a11cecdb46a4cb4d996ab8bda1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EndUserUpdateForm_endUser$ref = any;
export type EndUserDetailsQueryVariables = {|
  endUserId: string
|};
export type EndUserDetailsQueryResponse = {|
  +getEndUserById: ?{|
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
      +parent_organization?: ?$ReadOnlyArray<?{|
        +organization_id: ?string
      |}>,
      +affiliation_partner?: ?boolean,
      +affiliation_customer?: ?boolean,
      +affiliation_provider?: ?boolean,
      +affiliation_host_user?: ?boolean,
      +affiliation_site_owner?: ?boolean,
      +affiliation_end_customer?: ?boolean,
      +type?: ?any,
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
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: EndUserUpdateForm_endUser$ref,
  |}
|};
export type EndUserDetailsQuery = {|
  variables: EndUserDetailsQueryVariables,
  response: EndUserDetailsQueryResponse,
|};
*/


/*
query EndUserDetailsQuery(
  $endUserId: ID!
) {
  getEndUserById(id: $endUserId) {
    ...EndUserUpdateForm_endUser
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
        type
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

fragment EndUserUpdateForm_endUser on EndUser {
  id
  name
  description
  url
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
    "kind": "LocalArgument",
    "name": "endUserId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "endUserId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "website",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_id",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_partner",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_customer",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_provider",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "affiliation_host_user",
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
  "name": "affiliation_end_customer",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v16 = [
  (v5/*: any*/)
],
v17 = {
  "kind": "InlineFragment",
  "type": "EndUser",
  "selections": (v16/*: any*/)
},
v18 = {
  "kind": "InlineFragment",
  "type": "Customer",
  "selections": (v16/*: any*/)
},
v19 = {
  "kind": "InlineFragment",
  "type": "SiteOwner",
  "selections": (v16/*: any*/)
},
v20 = {
  "kind": "InlineFragment",
  "type": "Provider",
  "selections": (v16/*: any*/)
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v27 = [
  (v26/*: any*/)
],
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v29 = [
  (v26/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EndUserDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEndUserById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EndUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "with_same_name",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Organization",
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "parent_organization",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": true,
                    "selections": [
                      (v8/*: any*/)
                    ]
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
                ]
              },
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/)
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
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v21/*: any*/),
                  (v22/*: any*/)
                ]
              },
              (v23/*: any*/),
              (v24/*: any*/)
            ]
          },
          (v25/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v27/*: any*/)
          },
          (v28/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v27/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "EndUserUpdateForm_endUser",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EndUserDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEndUserById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EndUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v23/*: any*/),
              (v24/*: any*/)
            ]
          },
          (v25/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v29/*: any*/)
          },
          (v28/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v29/*: any*/)
          },
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "with_same_name",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Organization",
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "parent_organization",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": true,
                    "selections": [
                      (v8/*: any*/),
                      (v2/*: any*/)
                    ]
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
                ]
              },
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EndUserDetailsQuery",
    "id": null,
    "text": "query EndUserDetailsQuery(\n  $endUserId: ID!\n) {\n  getEndUserById(id: $endUserId) {\n    ...EndUserUpdateForm_endUser\n    id\n    name\n    description\n    url\n    __typename\n    with_same_name {\n      id\n      name\n      ... on Organization {\n        website\n        organization_id\n        parent_organization {\n          organization_id\n          id\n        }\n        affiliation_partner\n        affiliation_customer\n        affiliation_provider\n        affiliation_host_user\n        affiliation_site_owner\n        affiliation_end_customer\n        type\n      }\n      ... on EndUser {\n        url\n      }\n      ... on Customer {\n        url\n      }\n      ... on SiteOwner {\n        url\n      }\n      ... on Provider {\n        url\n      }\n      __typename\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment EndUserUpdateForm_endUser on EndUser {\n  id\n  name\n  description\n  url\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fc458323a953416e385540a5e8bf16fa';
module.exports = node;
