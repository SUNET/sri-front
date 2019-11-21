/**
 * @flow
 * @relayHash d2d915c672efbf7c19edb2bfb7679846
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GroupUpdateForm_group$ref = any;
export type GroupUpdateFormRefetchQueryVariables = {|
  groupId: number
|};
export type GroupUpdateFormRefetchQueryResponse = {|
  +getGroupById: ?{|
    +$fragmentRefs: GroupUpdateForm_group$ref
  |}
|};
export type GroupUpdateFormRefetchQuery = {|
  variables: GroupUpdateFormRefetchQueryVariables,
  response: GroupUpdateFormRefetchQueryResponse,
|};
*/


/*
query GroupUpdateFormRefetchQuery(
  $groupId: Int!
) {
  getGroupById(handle_id: $groupId) {
    ...GroupUpdateForm_group
    id
  }
}

fragment GroupUpdateForm_group on Group {
  handle_id
  name
  description
  contacts {
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
    outgoing {
      name
      relation {
        relation_id
        type
        end {
          handle_id
          node_name
          id
        }
        id
      }
    }
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
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  },
  (v7/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GroupUpdateFormRefetchQuery",
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
    "name": "GroupUpdateFormRefetchQuery",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
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
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "contact_type",
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
                "selections": (v8/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "phones",
                "storageKey": null,
                "args": null,
                "concreteType": "Phone",
                "plural": true,
                "selections": (v8/*: any*/)
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
                      (v7/*: any*/)
                    ]
                  }
                ]
              },
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "relation_id",
                        "args": null,
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      {
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
                          },
                          (v7/*: any*/)
                        ]
                      },
                      (v7/*: any*/)
                    ]
                  }
                ]
              },
              (v7/*: any*/)
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
              (v7/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v7/*: any*/)
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "created",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v9/*: any*/)
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
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v9/*: any*/)
          },
          (v7/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupUpdateFormRefetchQuery",
    "id": null,
    "text": "query GroupUpdateFormRefetchQuery(\n  $groupId: Int!\n) {\n  getGroupById(handle_id: $groupId) {\n    ...GroupUpdateForm_group\n    id\n  }\n}\n\nfragment GroupUpdateForm_group on Group {\n  handle_id\n  name\n  description\n  contacts {\n    handle_id\n    first_name\n    last_name\n    contact_type\n    emails {\n      handle_id\n      name\n      type\n      id\n    }\n    phones {\n      handle_id\n      name\n      type\n      id\n    }\n    roles {\n      role_data {\n        handle_id\n        name\n      }\n      end {\n        handle_id\n        name\n        id\n      }\n    }\n    outgoing {\n      name\n      relation {\n        relation_id\n        type\n        end {\n          handle_id\n          node_name\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '828b7afd2d605f9bc543e464c24601fe';
module.exports = node;
