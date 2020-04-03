/**
 * @flow
 * @relayHash a50c1764c26850582d1b3d5d53436848
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactList_contacts$ref = any;
export type ContactOrderBy = "contact_type_ASC" | "contact_type_DESC" | "created_ASC" | "created_DESC" | "emails_ASC" | "emails_DESC" | "first_name_ASC" | "first_name_DESC" | "handle_id_ASC" | "handle_id_DESC" | "last_name_ASC" | "last_name_DESC" | "member_of_groups_ASC" | "member_of_groups_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "notes_ASC" | "notes_DESC" | "organizations_ASC" | "organizations_DESC" | "pgp_fingerprint_ASC" | "pgp_fingerprint_DESC" | "phones_ASC" | "phones_DESC" | "roles_ASC" | "roles_DESC" | "salutation_ASC" | "salutation_DESC" | "title_ASC" | "title_DESC" | "%future added value";
export type ContactListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?ContactOrderBy,
|};
export type ContactListForwardQueryResponse = {|
  +$fragmentRefs: ContactList_contacts$ref
|};
export type ContactListForwardQuery = {|
  variables: ContactListForwardQueryVariables,
  response: ContactListForwardQueryResponse,
|};
*/


/*
query ContactListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: ContactOrderBy
) {
  ...ContactList_contacts_32czeo
}

fragment ContactList_contacts_32czeo on Query {
  contacts(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...ContactRow_contact
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

fragment ContactRow_contact on Contact {
  id
  first_name
  last_name
  contact_type
  modified
  roles {
    name
    end {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "ContactOrderBy",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContactListForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ContactList_contacts",
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
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactListForwardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contacts",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "contactConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "contactEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Contact",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "first_name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "last_name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "contact_type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "modified",
                    "args": null,
                    "storageKey": null
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
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organization",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v3/*: any*/)
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "contacts",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ContactList_contacts",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ContactListForwardQuery",
    "id": null,
    "text": "query ContactListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: ContactOrderBy\n) {\n  ...ContactList_contacts_32czeo\n}\n\nfragment ContactList_contacts_32czeo on Query {\n  contacts(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...ContactRow_contact\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment ContactRow_contact on Contact {\n  id\n  first_name\n  last_name\n  contact_type\n  modified\n  roles {\n    name\n    end {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96a0d0eb0ad60f76ab272f4c423e87fd';
module.exports = node;
