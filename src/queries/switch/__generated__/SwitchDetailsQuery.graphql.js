/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SwitchUpdateForm_switch$ref = any;
export type SwitchDetailsQueryVariables = {|
  switchId: string
|};
export type SwitchDetailsQueryResponse = {|
  +getSwitchById: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +ip_addresses: ?any,
    +rack_units: ?number,
    +rack_position: ?number,
    +provider: ?{|
      +id: string,
      +name: string,
    |},
    +responsible_group: ?{|
      +id: string,
      +name: string,
    |},
    +support_group: ?{|
      +id: string,
      +name: string,
    |},
    +managed_by: ?{|
      +value: string
    |},
    +backup: ?string,
    +os: ?string,
    +os_version: ?string,
    +contract_number: ?string,
    +max_number_of_ports: ?number,
    +__typename: string,
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
    +$fragmentRefs: SwitchUpdateForm_switch$ref,
  |}
|};
export type SwitchDetailsQuery = {|
  variables: SwitchDetailsQueryVariables,
  response: SwitchDetailsQueryResponse,
|};
*/


/*
query SwitchDetailsQuery(
  $switchId: ID!
) {
  getSwitchById(id: $switchId) {
    ...SwitchUpdateForm_switch
    id
    name
    description
    ip_addresses
    rack_units
    rack_position
    provider {
      id
      name
    }
    responsible_group {
      id
      name
    }
    support_group {
      id
      name
    }
    managed_by {
      value
      id
    }
    backup
    os
    os_version
    contract_number
    max_number_of_ports
    __typename
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

fragment SwitchUpdateForm_switch on Switch {
  id
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "switchId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "switchId"
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
  "name": "ip_addresses",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_units",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_position",
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Provider",
  "kind": "LinkedField",
  "name": "provider",
  "plural": false,
  "selections": (v8/*: any*/),
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Group",
  "kind": "LinkedField",
  "name": "responsible_group",
  "plural": false,
  "selections": (v8/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "Group",
  "kind": "LinkedField",
  "name": "support_group",
  "plural": false,
  "selections": (v8/*: any*/),
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backup",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "os",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "os_version",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contract_number",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "max_number_of_ports",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "submit_date",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v25 = [
  (v24/*: any*/)
],
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modified",
  "storageKey": null
},
v27 = [
  (v24/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SwitchDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Switch",
        "kind": "LinkedField",
        "name": "getSwitchById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "managed_by",
            "plural": false,
            "selections": [
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
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
                  (v19/*: any*/),
                  (v20/*: any*/)
                ],
                "storageKey": null
              },
              (v21/*: any*/),
              (v22/*: any*/)
            ],
            "storageKey": null
          },
          (v23/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v25/*: any*/),
            "storageKey": null
          },
          (v26/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v25/*: any*/),
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SwitchUpdateForm_switch"
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
    "name": "SwitchDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Switch",
        "kind": "LinkedField",
        "name": "getSwitchById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v21/*: any*/),
              (v22/*: any*/)
            ],
            "storageKey": null
          },
          (v23/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v27/*: any*/),
            "storageKey": null
          },
          (v26/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v27/*: any*/),
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "managed_by",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SwitchDetailsQuery",
    "operationKind": "query",
    "text": "query SwitchDetailsQuery(\n  $switchId: ID!\n) {\n  getSwitchById(id: $switchId) {\n    ...SwitchUpdateForm_switch\n    id\n    name\n    description\n    ip_addresses\n    rack_units\n    rack_position\n    provider {\n      id\n      name\n    }\n    responsible_group {\n      id\n      name\n    }\n    support_group {\n      id\n      name\n    }\n    managed_by {\n      value\n      id\n    }\n    backup\n    os\n    os_version\n    contract_number\n    max_number_of_ports\n    __typename\n    comments {\n      id\n      user {\n        first_name\n        last_name\n        id\n      }\n      comment\n      submit_date\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment SwitchUpdateForm_switch on Switch {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3c7b673134c9a6158f082ccb58515e1b';

module.exports = node;
