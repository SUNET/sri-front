/**
 * @flow
 * @relayHash d64c516b65860b785d0f0908041bc8a8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactList_contacts$ref = any;
export type ContactOrderBy = "contact_type_ASC" | "contact_type_DESC" | "created_ASC" | "created_DESC" | "creator_ASC" | "creator_DESC" | "email_ASC" | "email_DESC" | "first_name_ASC" | "first_name_DESC" | "handle_id_ASC" | "handle_id_DESC" | "last_name_ASC" | "last_name_DESC" | "mobile_ASC" | "mobile_DESC" | "modified_ASC" | "modified_DESC" | "modifier_ASC" | "modifier_DESC" | "name_ASC" | "name_DESC" | "notes_ASC" | "notes_DESC" | "other_email_ASC" | "other_email_DESC" | "pgp_fingerprint_ASC" | "pgp_fingerprint_DESC" | "phone_ASC" | "phone_DESC" | "salutation_ASC" | "salutation_DESC" | "title_ASC" | "title_DESC" | "%future added value";
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
        handle_id
        ...ContactRow_contact
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment ContactRow_contact on Contact {
  handle_id
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
        "concreteType": "ContactConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ContactEdge",
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "handle_id",
                    "args": null,
                    "storageKey": null
                  },
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
                      (v3/*: any*/),
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
                          (v4/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v4/*: any*/),
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
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
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
    "text": "query ContactListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: ContactOrderBy\n) {\n  ...ContactList_contacts_32czeo\n}\n\nfragment ContactList_contacts_32czeo on Query {\n  contacts(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        handle_id\n        ...ContactRow_contact\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ContactRow_contact on Contact {\n  handle_id\n  first_name\n  last_name\n  contact_type\n  modified\n  roles {\n    name\n    end {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96a0d0eb0ad60f76ab272f4c423e87fd';
module.exports = node;
