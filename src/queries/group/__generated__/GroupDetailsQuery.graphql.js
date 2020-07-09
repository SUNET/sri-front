/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GroupUpdateForm_group$ref = any;
export type GroupDetailsQueryVariables = {|
  groupId: string
|};
export type GroupDetailsQueryResponse = {|
  +getGroupById: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +contacts: ?$ReadOnlyArray<?{|
      +id: string,
      +first_name: string,
      +last_name: ?string,
      +relation_id: ?number,
      +contact_type: ?{|
        +name: string,
        +value: string,
      |},
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
        +role_data: ?{|
          +id: string,
          +name: string,
        |},
        +end: ?{|
          +id: string,
          +name: string,
        |},
      |}>,
      +outgoing: ?$ReadOnlyArray<?{|
        +name: string,
        +relation: {|
          +relation_id: number,
          +type: string,
          +end: {|
            +id: string,
            +node_name: string,
          |},
        |},
      |}>,
    |}>,
    +contact_relations: ?$ReadOnlyArray<?{|
      +entity_id: ?string,
      +relation_id: ?number,
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
    +$fragmentRefs: GroupUpdateForm_group$ref,
  |}
|};
export type GroupDetailsQuery = {|
  variables: GroupDetailsQueryVariables,
  response: GroupDetailsQueryResponse,
|};
*/


/*
query GroupDetailsQuery(
  $groupId: ID!
) {
  getGroupById(id: $groupId) {
    ...GroupUpdateForm_group
    id
    name
    description
    contacts {
      id
      first_name
      last_name
      relation_id
      contact_type {
        name
        value
        id
      }
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
        role_data {
          id
          name
        }
        end {
          id
          name
        }
      }
      outgoing {
        name
        relation {
          relation_id
          type
          end {
            id
            node_name
          }
          id
        }
      }
    }
    contact_relations {
      entity_id
      relation_id
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

fragment GroupUpdateForm_group on Group {
  id
  name
  description
  contacts {
    id
    first_name
    last_name
    contact_type {
      name
      value
      id
    }
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
      role_data {
        id
        name
      }
      end {
        id
        name
      }
    }
    outgoing {
      name
      relation {
        relation_id
        type
        end {
          id
          node_name
        }
        id
      }
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "groupId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "groupId"
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
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relation_id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v9 = [
  (v3/*: any*/),
  (v8/*: any*/)
],
v10 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v9/*: any*/),
    "storageKey": null
  }
],
v11 = [
  (v2/*: any*/),
  (v3/*: any*/)
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
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "role_data",
      "plural": false,
      "selections": (v11/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "end",
      "plural": false,
      "selections": (v11/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "NINodeHandlerType",
  "kind": "LinkedField",
  "name": "end",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "node_name",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "IDRelation",
  "kind": "LinkedField",
  "name": "contact_relations",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "entity_id",
      "storageKey": null
    },
    (v7/*: any*/)
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v20 = [
  (v19/*: any*/)
],
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v22 = [
  (v3/*: any*/),
  (v8/*: any*/),
  (v2/*: any*/)
],
v23 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v22/*: any*/),
    "storageKey": null
  }
],
v24 = [
  (v19/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "getGroupById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Contact",
            "kind": "LinkedField",
            "name": "contacts",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "contact_type",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Email",
                "kind": "LinkedField",
                "name": "emails",
                "plural": true,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Phone",
                "kind": "LinkedField",
                "name": "phones",
                "plural": true,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "DictRelationType",
                "kind": "LinkedField",
                "name": "outgoing",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NIRelationType",
                    "kind": "LinkedField",
                    "name": "relation",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v15/*: any*/),
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
                  (v5/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v16/*: any*/),
              (v17/*: any*/)
            ],
            "storageKey": null
          },
          (v18/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v20/*: any*/),
            "storageKey": null
          },
          (v21/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v20/*: any*/),
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GroupUpdateForm_group"
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
    "name": "GroupDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "getGroupById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Contact",
            "kind": "LinkedField",
            "name": "contacts",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "contact_type",
                "plural": false,
                "selections": (v22/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Email",
                "kind": "LinkedField",
                "name": "emails",
                "plural": true,
                "selections": (v23/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Phone",
                "kind": "LinkedField",
                "name": "phones",
                "plural": true,
                "selections": (v23/*: any*/),
                "storageKey": null
              },
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "DictRelationType",
                "kind": "LinkedField",
                "name": "outgoing",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NIRelationType",
                    "kind": "LinkedField",
                    "name": "relation",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v7/*: any*/)
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
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v16/*: any*/),
              (v17/*: any*/)
            ],
            "storageKey": null
          },
          (v18/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v24/*: any*/),
            "storageKey": null
          },
          (v21/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v24/*: any*/),
            "storageKey": null
          },
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GroupDetailsQuery",
    "operationKind": "query",
    "text": "query GroupDetailsQuery(\n  $groupId: ID!\n) {\n  getGroupById(id: $groupId) {\n    ...GroupUpdateForm_group\n    id\n    name\n    description\n    contacts {\n      id\n      first_name\n      last_name\n      relation_id\n      contact_type {\n        name\n        value\n        id\n      }\n      emails {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n      phones {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n      roles {\n        role_data {\n          id\n          name\n        }\n        end {\n          id\n          name\n        }\n      }\n      outgoing {\n        name\n        relation {\n          relation_id\n          type\n          end {\n            id\n            node_name\n          }\n          id\n        }\n      }\n    }\n    contact_relations {\n      entity_id\n      relation_id\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment GroupUpdateForm_group on Group {\n  id\n  name\n  description\n  contacts {\n    id\n    first_name\n    last_name\n    contact_type {\n      name\n      value\n      id\n    }\n    emails {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    phones {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n    roles {\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n      }\n    }\n    outgoing {\n      name\n      relation {\n        relation_id\n        type\n        end {\n          id\n          node_name\n        }\n        id\n      }\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b719c9f684c4ad8d18bfe74ce3f41f76';

module.exports = node;
