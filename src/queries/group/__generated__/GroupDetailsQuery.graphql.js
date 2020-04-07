/**
 * @flow
 * @relayHash c561cbc5a58fe27fc93bb1cfd4153d69
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
      +last_name: string,
      +contact_type: ?any,
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
      contact_type
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
    contact_type
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
    "kind": "LocalArgument",
    "name": "groupId",
    "type": "ID!",
    "defaultValue": null
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
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v9 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v8/*: any*/)
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "emails",
  "storageKey": null,
  "args": null,
  "concreteType": "Email",
  "plural": true,
  "selections": (v9/*: any*/)
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "phones",
  "storageKey": null,
  "args": null,
  "concreteType": "Phone",
  "plural": true,
  "selections": (v9/*: any*/)
},
v12 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
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
      "kind": "LinkedField",
      "alias": null,
      "name": "role_data",
      "storageKey": null,
      "args": null,
      "concreteType": "Role",
      "plural": false,
      "selections": (v12/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "end",
      "storageKey": null,
      "args": null,
      "concreteType": "Organization",
      "plural": false,
      "selections": (v12/*: any*/)
    }
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "NINodeHandlerType",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "node_name",
      "args": null,
      "storageKey": null
    }
  ]
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "contact_relations",
  "storageKey": null,
  "args": null,
  "concreteType": "IDRelation",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "entity_id",
      "args": null,
      "storageKey": null
    },
    (v14/*: any*/)
  ]
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
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v21 = [
  (v20/*: any*/)
],
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v23 = [
  (v20/*: any*/),
  (v2/*: any*/)
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
        "name": "getGroupById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contacts",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v13/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outgoing",
                "storageKey": null,
                "args": null,
                "concreteType": "DictRelationType",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "relation",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NIRelationType",
                    "plural": false,
                    "selections": [
                      (v14/*: any*/),
                      (v8/*: any*/),
                      (v15/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v16/*: any*/),
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
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              },
              (v17/*: any*/),
              (v18/*: any*/)
            ]
          },
          (v19/*: any*/),
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
          (v22/*: any*/),
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
            "kind": "FragmentSpread",
            "name": "GroupUpdateForm_group",
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
        "name": "getGroupById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contacts",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v13/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outgoing",
                "storageKey": null,
                "args": null,
                "concreteType": "DictRelationType",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "relation",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NIRelationType",
                    "plural": false,
                    "selections": [
                      (v14/*: any*/),
                      (v8/*: any*/),
                      (v15/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
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
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v17/*: any*/),
              (v18/*: any*/)
            ]
          },
          (v19/*: any*/),
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
          (v22/*: any*/),
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
          (v16/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupDetailsQuery",
    "id": null,
    "text": "query GroupDetailsQuery(\n  $groupId: ID!\n) {\n  getGroupById(id: $groupId) {\n    ...GroupUpdateForm_group\n    id\n    name\n    description\n    contacts {\n      id\n      first_name\n      last_name\n      contact_type\n      emails {\n        id\n        name\n        type\n      }\n      phones {\n        id\n        name\n        type\n      }\n      roles {\n        role_data {\n          id\n          name\n        }\n        end {\n          id\n          name\n        }\n      }\n      outgoing {\n        name\n        relation {\n          relation_id\n          type\n          end {\n            id\n            node_name\n          }\n          id\n        }\n      }\n    }\n    contact_relations {\n      entity_id\n      relation_id\n    }\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment GroupUpdateForm_group on Group {\n  id\n  name\n  description\n  contacts {\n    id\n    first_name\n    last_name\n    contact_type\n    emails {\n      id\n      name\n      type\n    }\n    phones {\n      id\n      name\n      type\n    }\n    roles {\n      role_data {\n        id\n        name\n      }\n      end {\n        id\n        name\n      }\n    }\n    outgoing {\n      name\n      relation {\n        relation_id\n        type\n        end {\n          id\n          node_name\n        }\n        id\n      }\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c45b48a14b1da6617a7f35929436020';
module.exports = node;
