/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ConvertHostModalTypesConvertHostQueryVariables = {||};
export type ConvertHostModalTypesConvertHostQueryResponse = {|
  +getAllowedTypesConvertHost: ?$ReadOnlyArray<?string>
|};
export type ConvertHostModalTypesConvertHostQuery = {|
  variables: ConvertHostModalTypesConvertHostQueryVariables,
  response: ConvertHostModalTypesConvertHostQueryResponse,
|};
*/


/*
query ConvertHostModalTypesConvertHostQuery {
  getAllowedTypesConvertHost
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "getAllowedTypesConvertHost",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConvertHostModalTypesConvertHostQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ConvertHostModalTypesConvertHostQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ConvertHostModalTypesConvertHostQuery",
    "operationKind": "query",
    "text": "query ConvertHostModalTypesConvertHostQuery {\n  getAllowedTypesConvertHost\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd05554d716cbdd5c613f078582c951b2';

module.exports = node;
