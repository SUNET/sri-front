/**
 * @flow
 * @relayHash 4ee3eb91ad214158216fbd3dd7275503
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
    +last_name: string,
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
  "name": "value",
  "args": null,
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pgp_fingerprint",
  "args": null,
  "storageKey": null
},
v11 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "type",
    "storageKey": null,
    "args": null,
    "concreteType": "Choice",
    "plural": false,
    "selections": (v7/*: any*/)
  }
],
v12 = {
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
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v15 = [
  (v14/*: any*/)
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
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
    "kind": "LinkedField",
    "alias": null,
    "name": "type",
    "storageKey": null,
    "args": null,
    "concreteType": "Choice",
    "plural": false,
    "selections": (v19/*: any*/)
  }
],
v21 = [
  (v14/*: any*/),
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact_type",
            "storageKey": null,
            "args": null,
            "concreteType": "Choice",
            "plural": false,
            "selections": (v7/*: any*/)
          },
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
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
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v15/*: any*/)
          },
          (v16/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v15/*: any*/)
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
                  (v8/*: any*/),
                  (v9/*: any*/)
                ]
              },
              (v17/*: any*/),
              (v18/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact_type",
            "storageKey": null,
            "args": null,
            "concreteType": "Choice",
            "plural": false,
            "selections": (v19/*: any*/)
          },
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "emails",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": true,
            "selections": (v20/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones",
            "storageKey": null,
            "args": null,
            "concreteType": "Phone",
            "plural": true,
            "selections": (v20/*: any*/)
          },
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v21/*: any*/)
          },
          (v16/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v21/*: any*/)
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
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v17/*: any*/),
              (v18/*: any*/)
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
    "text": "query ContactDetailsQuery(\n  $contactId: ID!\n) {\n  getContactById(id: $contactId) {\n    ...ContactUpdateForm_contact\n    id\n    name\n    notes\n    title\n    contact_type {\n      name\n      value\n      id\n    }\n    first_name\n    last_name\n    pgp_fingerprint\n    emails {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    phones {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    roles {\n      relation_id\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n        organization_id\n        organization_number\n      }\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n  }\n}\n\nfragment ContactUpdateForm_contact on Contact {\n  id\n  name\n  notes\n  title\n  contact_type {\n    name\n    value\n    id\n  }\n  first_name\n  last_name\n  pgp_fingerprint\n  emails {\n    id\n    name\n    type {\n      name\n      value\n      id\n    }\n  }\n  phones {\n    id\n    name\n    type {\n      name\n      value\n      id\n    }\n  }\n  roles {\n    relation_id\n    role_data {\n      id\n      name\n    }\n    end {\n      id\n      name\n    }\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1fdc729e3e2ee075f1666ee074bd035d';
module.exports = node;
