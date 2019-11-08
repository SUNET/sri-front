/**
 * @flow
 * @relayHash d9c8761e7aced581ef47fd5739355e04
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactUpdateForm_contact$ref = any;
export type ContactDetailsQueryVariables = {|
  contactId: number
|};
export type ContactDetailsQueryResponse = {|
  +getContactById: ?{|
    +handle_id: string,
    +name: string,
    +notes: ?string,
    +title: ?string,
    +contact_type: ?any,
    +first_name: string,
    +last_name: string,
    +pgp_fingerprint: ?string,
    +emails: ?$ReadOnlyArray<?{|
      +handle_id: string,
      +name: string,
      +type: any,
    |}>,
    +phones: ?$ReadOnlyArray<?{|
      +handle_id: string,
      +name: string,
      +type: any,
    |}>,
    +roles: ?$ReadOnlyArray<?{|
      +relation_id: number,
      +role_data: ?{|
        +handle_id: string,
        +name: string,
      |},
      +end: ?{|
        +handle_id: string,
        +name: string,
        +customer_id: ?string,
      |},
    |}>,
    +created: any,
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +comments: ?$ReadOnlyArray<?{|
      +id: string,
      +user: ?{|
        +first_name: string,
        +last_name: string,
      |},
      +comment: string,
      +submit_date: any,
    |}>,
    +$fragmentRefs: ContactUpdateForm_contact$ref,
  |}
|};
export type ContactDetailsQuery = {|
  variables: ContactDetailsQueryVariables,
  response: ContactDetailsQueryResponse,
|};
*/


/*
query ContactDetailsQuery(
  $contactId: Int!
) {
  getContactById(handle_id: $contactId) {
    ...ContactUpdateForm_contact
    handle_id
    name
    notes
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
      relation_id
      role_data {
        handle_id
        name
      }
      end {
        handle_id
        name
        customer_id
        id
      }
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

fragment ContactUpdateForm_contact on Contact {
  handle_id
  name
  notes
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
    relation_id
    role_data {
      handle_id
      name
    }
    end {
      handle_id
      name
      id
    }
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
  "name": "handle_id",
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
  "name": "notes",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pgp_fingerprint",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v11 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v10/*: any*/)
],
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "role_data",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customer_id",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v17 = [
  (v16/*: any*/)
],
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v22 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v10/*: any*/),
  (v19/*: any*/)
],
v23 = [
  (v16/*: any*/),
  (v19/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContactDetailsQuery",
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
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "emails",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": true,
            "selections": (v11/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones",
            "storageKey": null,
            "args": null,
            "concreteType": "Phone",
            "plural": true,
            "selections": (v11/*: any*/)
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
              (v12/*: any*/),
              (v13/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v14/*: any*/)
                ]
              }
            ]
          },
          (v15/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v17/*: any*/)
          },
          (v18/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v17/*: any*/)
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
              (v19/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/)
                ]
              },
              (v20/*: any*/),
              (v21/*: any*/)
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "ContactUpdateForm_contact",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactDetailsQuery",
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
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "emails",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": true,
            "selections": (v22/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones",
            "storageKey": null,
            "args": null,
            "concreteType": "Phone",
            "plural": true,
            "selections": (v22/*: any*/)
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
              (v12/*: any*/),
              (v13/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v19/*: any*/),
                  (v14/*: any*/)
                ]
              }
            ]
          },
          (v15/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v23/*: any*/)
          },
          (v18/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v23/*: any*/)
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
              (v19/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v19/*: any*/)
                ]
              },
              (v20/*: any*/),
              (v21/*: any*/)
            ]
          },
          (v19/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ContactDetailsQuery",
    "id": null,
    "text": "query ContactDetailsQuery(\n  $contactId: Int!\n) {\n  getContactById(handle_id: $contactId) {\n    ...ContactUpdateForm_contact\n    handle_id\n    name\n    notes\n    title\n    contact_type\n    first_name\n    last_name\n    pgp_fingerprint\n    emails {\n      handle_id\n      name\n      type\n      id\n    }\n    phones {\n      handle_id\n      name\n      type\n      id\n    }\n    roles {\n      relation_id\n      role_data {\n        handle_id\n        name\n      }\n      end {\n        handle_id\n        name\n        customer_id\n        id\n      }\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    id\n  }\n}\n\nfragment ContactUpdateForm_contact on Contact {\n  handle_id\n  name\n  notes\n  title\n  contact_type\n  first_name\n  last_name\n  pgp_fingerprint\n  emails {\n    handle_id\n    name\n    type\n    id\n  }\n  phones {\n    handle_id\n    name\n    type\n    id\n  }\n  roles {\n    relation_id\n    role_data {\n      handle_id\n      name\n    }\n    end {\n      handle_id\n      name\n      id\n    }\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48117b629a5ade31e28f24c790325a26';
module.exports = node;
