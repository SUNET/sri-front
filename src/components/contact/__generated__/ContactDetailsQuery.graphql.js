/**
 * @flow
 * @relayHash f34d71604de1945d182d756b1cdbc1b0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactUpdateForm_contact$ref = any;
export type ContactDetailsQueryVariables = {|
  contactId: string
|};
export type ContactDetailsQueryResponse = {|
  +getContactById: ?{|
    +id: string,
    +name: string,
    +notes: ?string,
    +title: ?string,
    +contact_type: ?any,
    +first_name: string,
    +last_name: string,
    +pgp_fingerprint: ?string,
    +emails: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: any,
    |}>,
    +phones: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: any,
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
        +organization_id: ?string,
        +organization_number: ?string,
      |},
    |}>,
    +created: any,
    +creator: ?{|
      +email: string
    |},
    +modified: any,
    +modifier: ?{|
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
  $contactId: ID!
) {
  getContactById(id: $contactId) {
    ...ContactUpdateForm_contact
    id
    name
    notes
    title
    contact_type
    first_name
    last_name
    pgp_fingerprint
    emails {
      id
      name
      type
    }
    phones {
      id
      name
      type
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
        organization_id
        organization_number
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
}

fragment ContactUpdateForm_contact on Contact {
  id
  name
  notes
  title
  contact_type
  first_name
  last_name
  pgp_fingerprint
  emails {
    id
    name
    type
  }
  phones {
    id
    name
    type
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
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "contactId"
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
v10 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "type",
    "args": null,
    "storageKey": null
  }
],
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "emails",
  "storageKey": null,
  "args": null,
  "concreteType": "Email",
  "plural": true,
  "selections": (v10/*: any*/)
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "phones",
  "storageKey": null,
  "args": null,
  "concreteType": "Phone",
  "plural": true,
  "selections": (v10/*: any*/)
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "roles",
  "storageKey": null,
  "args": null,
  "concreteType": "RoleRelation",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "relation_id",
      "args": null,
      "storageKey": null
    },
    {
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "organization_id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "organization_number",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v16 = [
  (v15/*: any*/)
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v20 = [
  (v15/*: any*/),
  (v2/*: any*/)
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
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v16/*: any*/)
          },
          (v17/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v16/*: any*/)
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
                  (v7/*: any*/),
                  (v8/*: any*/)
                ]
              },
              (v18/*: any*/),
              (v19/*: any*/)
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
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v20/*: any*/)
          },
          (v17/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v20/*: any*/)
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
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v18/*: any*/),
              (v19/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ContactDetailsQuery",
    "id": null,
    "text": "query ContactDetailsQuery(\n  $contactId: ID!\n) {\n  getContactById(id: $contactId) {\n    ...ContactUpdateForm_contact\n    id\n    name\n    notes\n    title\n    contact_type\n    first_name\n    last_name\n    pgp_fingerprint\n    emails {\n      id\n      name\n      type\n    }\n    phones {\n      id\n      name\n      type\n    }\n    roles {\n      relation_id\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n        organization_id\n        organization_number\n      }\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n  }\n}\n\nfragment ContactUpdateForm_contact on Contact {\n  id\n  name\n  notes\n  title\n  contact_type\n  first_name\n  last_name\n  pgp_fingerprint\n  emails {\n    id\n    name\n    type\n  }\n  phones {\n    id\n    name\n    type\n  }\n  roles {\n    relation_id\n    role_data {\n      id\n      name\n    }\n    end {\n      id\n      name\n    }\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b18589c32c8e6f5f54a1c1a2947905e8';
module.exports = node;
