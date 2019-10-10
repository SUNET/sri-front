/**
 * @flow
 * @relayHash 64a0b1d004b975024bbc1d466ce97e66
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelationshipGroupContactQueryVariables = {|
  group_id: number,
  contact_id: number,
|};
export type RelationshipGroupContactQueryResponse = {|
  +getGroupContactRelations: ?$ReadOnlyArray<?{|
    +id: string,
    +relation_id: number,
    +type: string,
    +start: {|
      +handle_id: string,
      +node_name: string,
    |},
    +end: {|
      +handle_id: string,
      +node_name: string,
    |},
  |}>
|};
export type RelationshipGroupContactQuery = {|
  variables: RelationshipGroupContactQueryVariables,
  response: RelationshipGroupContactQueryResponse,
|};
*/


/*
query RelationshipGroupContactQuery(
  $group_id: Int!
  $contact_id: Int!
) {
  getGroupContactRelations(group_id: $group_id, contact_id: $contact_id) {
    id
    relation_id
    type
    start {
      handle_id
      node_name
      id
    }
    end {
      handle_id
      node_name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "group_id",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "contact_id",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "contact_id",
    "variableName": "contact_id"
  },
  {
    "kind": "Variable",
    "name": "group_id",
    "variableName": "group_id"
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
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "node_name",
  "args": null,
  "storageKey": null
},
v7 = [
  (v5/*: any*/),
  (v6/*: any*/)
],
v8 = [
  (v5/*: any*/),
  (v6/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RelationshipGroupContactQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupContactRelations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "NIRelationType",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "start",
            "storageKey": null,
            "args": null,
            "concreteType": "NINodeHandlerType",
            "plural": false,
            "selections": (v7/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "end",
            "storageKey": null,
            "args": null,
            "concreteType": "NINodeHandlerType",
            "plural": false,
            "selections": (v7/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RelationshipGroupContactQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupContactRelations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "NIRelationType",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "start",
            "storageKey": null,
            "args": null,
            "concreteType": "NINodeHandlerType",
            "plural": false,
            "selections": (v8/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "end",
            "storageKey": null,
            "args": null,
            "concreteType": "NINodeHandlerType",
            "plural": false,
            "selections": (v8/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RelationshipGroupContactQuery",
    "id": null,
    "text": "query RelationshipGroupContactQuery(\n  $group_id: Int!\n  $contact_id: Int!\n) {\n  getGroupContactRelations(group_id: $group_id, contact_id: $contact_id) {\n    id\n    relation_id\n    type\n    start {\n      handle_id\n      node_name\n      id\n    }\n    end {\n      handle_id\n      node_name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '22d7023fd2c042cacf5c3b8b7f8d5fb8';
module.exports = node;
