/**
 * @flow
 * @relayHash 362e6ff8d76903612f2346321087a4e8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Contact_contact$ref = any;
export type GroupDetailsQueryVariables = {|
  contactId: number
|};
export type GroupDetailsQueryResponse = {|
  +getContactById: ?{|
    +name: string,
    +contact_type: ?string,
    +created: any,
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: Contact_contact$ref,
  |}
|};
export type GroupDetailsQuery = {|
  variables: GroupDetailsQueryVariables,
  response: GroupDetailsQueryResponse,
|};
*/


/*
query GroupDetailsQuery(
  $contactId: Int!
) {
  getContactById(handle_id: $contactId) {
    ...Contact_contact
    name
    contact_type
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

fragment Contact_contact on Contact {
  handle_id
  title
  contact_type
  first_name
  last_name
  pgp_fingerprint
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
    name
    end {
      handle_id
      name
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "contactId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "contactId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v12 = [
  (v8/*: any*/),
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "type",
    "args": null,
    "storageKey": null
  },
  (v11/*: any*/)
],
v13 = [
  (v5/*: any*/),
  (v11/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GroupDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getContactById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v6/*: any*/)
          },
          (v7/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v6/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "Contact_contact",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "GroupDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getContactById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pgp_fingerprint",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "emails",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": true,
            "selections": (v12/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones",
            "storageKey": null,
            "args": null,
            "concreteType": "Phone",
            "plural": true,
            "selections": (v12/*: any*/)
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
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v2/*: any*/),
                  (v11/*: any*/)
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
              (v11/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "comment",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "submit_date",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v13/*: any*/)
          },
          (v7/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v13/*: any*/)
          },
          (v11/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupDetailsQuery",
    "id": null,
    "text": "query GroupDetailsQuery(\n  $contactId: Int!\n) {\n  getContactById(handle_id: $contactId) {\n    ...Contact_contact\n    name\n    contact_type\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    id\n  }\n}\n\nfragment Contact_contact on Contact {\n  handle_id\n  title\n  contact_type\n  first_name\n  last_name\n  pgp_fingerprint\n  emails {\n    handle_id\n    name\n    type\n    id\n  }\n  phones {\n    handle_id\n    name\n    type\n    id\n  }\n  roles {\n    name\n    end {\n      handle_id\n      name\n      id\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '16224e982b9cedc321049823dfa27989';
module.exports = node;
