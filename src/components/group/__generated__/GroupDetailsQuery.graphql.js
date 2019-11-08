/**
 * @flow
 * @relayHash 45ce192514465ebbb441ed77c619197b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GroupUpdateForm_group$ref = any;
export type GroupDetailsQueryVariables = {|
  groupId: number
|};
export type GroupDetailsQueryResponse = {|
  +getGroupById: ?{|
    +handle_id: string,
    +name: string,
    +description: ?string,
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
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: GroupUpdateForm_group$ref,
  |},
  +getGroupContacts: ?$ReadOnlyArray<?{|
    +relation_id: ?number,
    +contact: ?{|
      +handle_id: string,
      +first_name: string,
      +last_name: string,
      +contact_type: ?any,
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
        +name: ?string,
        +end: ?{|
          +handle_id: string,
          +name: string,
        |},
      |}>,
    |},
  |}>,
|};
export type GroupDetailsQuery = {|
  variables: GroupDetailsQueryVariables,
  response: GroupDetailsQueryResponse,
|};
*/


/*
query GroupDetailsQuery(
  $groupId: Int!
) {
  getGroupById(handle_id: $groupId) {
    ...GroupUpdateForm_group
    handle_id
    name
    description
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
    id
  }
  getGroupContacts(handle_id: $groupId) {
    relation_id
    contact {
      handle_id
      first_name
      last_name
      contact_type
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
      id
    }
  }
}

fragment GroupUpdateForm_group on Group {
  handle_id
  name
  description
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
    "name": "groupId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "groupId"
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v12 = [
  (v11/*: any*/)
],
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v17 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v16/*: any*/)
],
v18 = [
  (v11/*: any*/),
  (v5/*: any*/)
],
v19 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v16/*: any*/),
  (v5/*: any*/)
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
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentType",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/)
                ]
              },
              (v8/*: any*/),
              (v9/*: any*/)
            ]
          },
          (v10/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v12/*: any*/)
          },
          (v13/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v12/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "GroupUpdateForm_group",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupContacts",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ContactWithRelation",
        "plural": true,
        "selections": [
          (v14/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v15/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "emails",
                "storageKey": null,
                "args": null,
                "concreteType": "Email",
                "plural": true,
                "selections": (v17/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "phones",
                "storageKey": null,
                "args": null,
                "concreteType": "Phone",
                "plural": true,
                "selections": (v17/*: any*/)
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
                      (v2/*: any*/),
                      (v3/*: any*/)
                    ]
                  }
                ]
              }
            ]
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
          (v10/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v18/*: any*/)
          },
          (v13/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v18/*: any*/)
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
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v5/*: any*/)
                ]
              },
              (v8/*: any*/),
              (v9/*: any*/)
            ]
          },
          (v5/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupContacts",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ContactWithRelation",
        "plural": true,
        "selections": [
          (v14/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v15/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "emails",
                "storageKey": null,
                "args": null,
                "concreteType": "Email",
                "plural": true,
                "selections": (v19/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "phones",
                "storageKey": null,
                "args": null,
                "concreteType": "Phone",
                "plural": true,
                "selections": (v19/*: any*/)
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
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v5/*: any*/)
                    ]
                  }
                ]
              },
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupDetailsQuery",
    "id": null,
    "text": "query GroupDetailsQuery(\n  $groupId: Int!\n) {\n  getGroupById(handle_id: $groupId) {\n    ...GroupUpdateForm_group\n    handle_id\n    name\n    description\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    id\n  }\n  getGroupContacts(handle_id: $groupId) {\n    relation_id\n    contact {\n      handle_id\n      first_name\n      last_name\n      contact_type\n      emails {\n        handle_id\n        name\n        type\n        id\n      }\n      phones {\n        handle_id\n        name\n        type\n        id\n      }\n      roles {\n        name\n        end {\n          handle_id\n          name\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment GroupUpdateForm_group on Group {\n  handle_id\n  name\n  description\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '89daaadafc59956f3d2f38c973dee203';
module.exports = node;
