/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HostUpdateForm_host$ref = any;
export type HostDetailsQueryVariables = {|
  hostId: string
|};
export type HostDetailsQueryResponse = {|
  +getHostById: ?{|
    +id: string,
    +name: string,
    +operational_state: ?{|
      +name: string,
      +value: string,
    |},
    +description: ?string,
    +host_type: ?string,
    +ip_addresses: ?any,
    +host_user: ?{|
      +id: string,
      +name: string,
      +__typename: string,
    |},
    +owner: ?{|
      +__typename: string,
      +id: string,
      +name: string,
      +type?: {|
        +name: string
      |},
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
    +rack_units: ?number,
    +rack_position: ?number,
    +$fragmentRefs: HostUpdateForm_host$ref,
  |}
|};
export type HostDetailsQuery = {|
  variables: HostDetailsQueryVariables,
  response: HostDetailsQueryResponse,
|};
*/


/*
query HostDetailsQuery(
  $hostId: ID!
) {
  getHostById(id: $hostId) {
    ...HostUpdateForm_host
    id
    name
    operational_state {
      name
      value
      id
    }
    description
    host_type
    ip_addresses
    host_user {
      id
      name
      __typename
    }
    owner: host_owner {
      __typename
      id
      name
      ... on EndUser {
        type: node_type {
          name: type
          id
        }
      }
      ... on Customer {
        type: node_type {
          name: type
          id
        }
      }
      ... on HostUser {
        type: node_type {
          name: type
          id
        }
      }
      ... on Provider {
        type: node_type {
          name: type
          id
        }
      }
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
    rack_units
    rack_position
  }
}

fragment HostUpdateForm_host on Host {
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
    "name": "hostId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "hostId"
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
  "name": "value",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "host_type",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ip_addresses",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "HostUser",
  "kind": "LinkedField",
  "name": "host_user",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": "name",
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v11 = [
  {
    "alias": "type",
    "args": null,
    "concreteType": "NINodeType",
    "kind": "LinkedField",
    "name": "node_type",
    "plural": false,
    "selections": [
      (v10/*: any*/)
    ],
    "storageKey": null
  }
],
v12 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "Group",
  "kind": "LinkedField",
  "name": "responsible_group",
  "plural": false,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "Group",
  "kind": "LinkedField",
  "name": "support_group",
  "plural": false,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backup",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "os",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "os_version",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contract_number",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_units",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rack_position",
  "storageKey": null
},
v21 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  },
  (v2/*: any*/)
],
v22 = [
  {
    "alias": "type",
    "args": null,
    "concreteType": "NINodeType",
    "kind": "LinkedField",
    "name": "node_type",
    "plural": false,
    "selections": [
      (v10/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HostDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Host",
        "kind": "LinkedField",
        "name": "getHostById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "operational_state",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          {
            "alias": "owner",
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "host_owner",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v11/*: any*/),
                "type": "EndUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v11/*: any*/),
                "type": "Customer"
              },
              {
                "kind": "InlineFragment",
                "selections": (v11/*: any*/),
                "type": "HostUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v11/*: any*/),
                "type": "Provider"
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "managed_by",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HostUpdateForm_host"
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
    "name": "HostDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Host",
        "kind": "LinkedField",
        "name": "getHostById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "first_name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "last_name",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "comment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "submit_date",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "modified",
            "storageKey": null
          },
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
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "operational_state",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          {
            "alias": "owner",
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "host_owner",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v22/*: any*/),
                "type": "EndUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v22/*: any*/),
                "type": "Customer"
              },
              {
                "kind": "InlineFragment",
                "selections": (v22/*: any*/),
                "type": "HostUser"
              },
              {
                "kind": "InlineFragment",
                "selections": (v22/*: any*/),
                "type": "Provider"
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "managed_by",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "HostDetailsQuery",
    "operationKind": "query",
    "text": "query HostDetailsQuery(\n  $hostId: ID!\n) {\n  getHostById(id: $hostId) {\n    ...HostUpdateForm_host\n    id\n    name\n    operational_state {\n      name\n      value\n      id\n    }\n    description\n    host_type\n    ip_addresses\n    host_user {\n      id\n      name\n      __typename\n    }\n    owner: host_owner {\n      __typename\n      id\n      name\n      ... on EndUser {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n      ... on Customer {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n      ... on HostUser {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n      ... on Provider {\n        type: node_type {\n          name: type\n          id\n        }\n      }\n    }\n    responsible_group {\n      id\n      name\n    }\n    support_group {\n      id\n      name\n    }\n    managed_by {\n      value\n      id\n    }\n    backup\n    os\n    os_version\n    contract_number\n    rack_units\n    rack_position\n  }\n}\n\nfragment HostUpdateForm_host on Host {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c64e6ac52cbae30a7031e298bc827a4a';

module.exports = node;
