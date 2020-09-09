#!/usr/bin/env node

const generateList = require('./cli-entity/generate-list');
const generateDetails = require('./cli-entity/generate-details');
const adaptQueries = require('./adapt-queries/adapt-queries');

const OPERATION_GENERATE_LIST = 'generate-list';
const OPERATION_GENERATE_DETAILS = 'generate-details';
const OPERATION_ADAPT_QUERIES = 'adapt-queries';

// get args
const [, , ...args] = process.argv;

const typeOperation = args[0]; // generate-list or generate-details
const blockName = args[1];
const entityName = args[2];

const schemaName = args[1];

switch (typeOperation) {
  case OPERATION_GENERATE_LIST:
    generateList(blockName, entityName);
    break;
  case OPERATION_GENERATE_DETAILS:
    generateDetails(blockName, entityName);
    break;
  case OPERATION_ADAPT_QUERIES:
    adaptQueries(schemaName);
    break;
  default:
    break;
}
