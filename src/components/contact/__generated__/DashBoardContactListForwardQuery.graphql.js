/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DashBoardContactList_contacts$ref = any;
export type ContactOrderBy = "contact_type_ASC" | "contact_type_DESC" | "created_ASC" | "created_DESC" | "emails_ASC" | "emails_DESC" | "first_name_ASC" | "first_name_DESC" | "handle_id_ASC" | "handle_id_DESC" | "last_name_ASC" | "last_name_DESC" | "member_of_groups_ASC" | "member_of_groups_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "notes_ASC" | "notes_DESC" | "organizations_ASC" | "organizations_DESC" | "pgp_fingerprint_ASC" | "pgp_fingerprint_DESC" | "phones_ASC" | "phones_DESC" | "roles_ASC" | "roles_DESC" | "salutation_ASC" | "salutation_DESC" | "title_ASC" | "title_DESC" | "%future added value";
export type DashBoardContactListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?ContactOrderBy,
|};
export type DashBoardContactListForwardQueryResponse = {|
  +$fragmentRefs: DashBoardContactList_contacts$ref
|};
export type DashBoardContactListForwardQuery = {|
  variables: DashBoardContactListForwardQueryVariables,
  response: DashBoardContactListForwardQueryResponse,
|};
*/


/*
query DashBoardContactListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: ContactOrderBy
) {
  ...DashBoardContactList_contacts_32czeo
}

fragment DashBoardContactList_contacts_32czeo on Query {
  contacts(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        ...DashBoardContactRow_contact
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment DashBoardContactRow_contact on Contact {
  id
  first_name
  last_name
  modified
  roles {
    name
    end {
      name
      id
    }
  }
  member_of_groups {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "ContactOrderBy"
  }
],
v1 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v1/*: any*/)
],
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
v5 = [
  (v4/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DashBoardContactListForwardQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "DashBoardContactList_contacts"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DashBoardContactListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "contactConnection",
        "kind": "LinkedField",
        "name": "contacts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "contactEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Contact",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "first_name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "last_name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "modified",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RoleRelation",
                    "kind": "LinkedField",
                    "name": "roles",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Organization",
                        "kind": "LinkedField",
                        "name": "end",
                        "plural": false,
                        "selections": (v5/*: any*/),
                        "storageKey": null
                      }
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
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
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
        "args": (v2/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "DashBoardContactList_contacts",
        "kind": "LinkedHandle",
        "name": "contacts"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DashBoardContactListForwardQuery",
    "operationKind": "query",
    "text": "query DashBoardContactListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: ContactOrderBy\n) {\n  ...DashBoardContactList_contacts_32czeo\n}\n\nfragment DashBoardContactList_contacts_32czeo on Query {\n  contacts(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        ...DashBoardContactRow_contact\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment DashBoardContactRow_contact on Contact {\n  id\n  first_name\n  last_name\n  modified\n  roles {\n    name\n    end {\n      name\n      id\n    }\n  }\n  member_of_groups {\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8d798a289e271e6a8e2c2ef50320a71';

module.exports = node;
