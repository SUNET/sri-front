/**
 * @flow
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
    +contact_type: ?{|
      +name: string,
      +value: string,
    |},
    +first_name: string,
    +last_name: ?string,
    +pgp_fingerprint: ?string,
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
    contact_type {
      name
      value
      id
    }
    first_name
    last_name
    pgp_fingerprint
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
  contact_type {
    name
    value
    id
  }
  first_name
  last_name
  pgp_fingerprint
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contactId",
    "type": "ID!"
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
  "name": "notes",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pgp_fingerprint",
  "storageKey": null
},
v11 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v7/*: any*/),
    "storageKey": null
  }
],
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "RoleRelation",
  "kind": "LinkedField",
  "name": "roles",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "relation_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "role_data",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "end",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "organization_id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "organization_number",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v15 = [
  (v14/*: any*/)
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v19 = [
  (v3/*: any*/),
  (v6/*: any*/),
  (v2/*: any*/)
],
v20 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v19/*: any*/),
    "storageKey": null
  }
],
v21 = [
  (v14/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "getContactById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "contact_type",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Email",
            "kind": "LinkedField",
            "name": "emails",
            "plural": true,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Phone",
            "kind": "LinkedField",
            "name": "phones",
            "plural": true,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": null
          },
          (v16/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v15/*: any*/),
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
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/),
              (v18/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContactUpdateForm_contact"
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
    "name": "ContactDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "getContactById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "contact_type",
            "plural": false,
            "selections": (v19/*: any*/),
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Email",
            "kind": "LinkedField",
            "name": "emails",
            "plural": true,
            "selections": (v20/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Phone",
            "kind": "LinkedField",
            "name": "phones",
            "plural": true,
            "selections": (v20/*: any*/),
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v21/*: any*/),
            "storageKey": null
          },
          (v16/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v21/*: any*/),
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
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/),
              (v18/*: any*/)
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
    "name": "ContactDetailsQuery",
    "operationKind": "query",
    "text": "query ContactDetailsQuery(\n  $contactId: ID!\n) {\n  getContactById(id: $contactId) {\n    ...ContactUpdateForm_contact\n    id\n    name\n    notes\n    title\n    contact_type {\n      name\n      value\n      id\n    }\n    first_name\n    last_name\n    pgp_fingerprint\n    emails {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    phones {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    roles {\n      relation_id\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n        organization_id\n        organization_number\n      }\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n  }\n}\n\nfragment ContactUpdateForm_contact on Contact {\n  id\n  name\n  notes\n  title\n  contact_type {\n    name\n    value\n    id\n  }\n  first_name\n  last_name\n  pgp_fingerprint\n  emails {\n    id\n    name\n    type {\n      name\n      value\n      id\n    }\n  }\n  phones {\n    id\n    name\n    type {\n      name\n      value\n      id\n    }\n  }\n  roles {\n    relation_id\n    role_data {\n      id\n      name\n    }\n    end {\n      id\n      name\n    }\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1fdc729e3e2ee075f1666ee074bd035d';

module.exports = node;
