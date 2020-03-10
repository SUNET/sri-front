#!/usr/bin/env node

const fs = require("fs");
const generateList = require("./generate-list");
const generateDetails = require("./generate-details");

const OPERATION_GENERATE_LIST = "generate-list";
const OPERATION_GENERATE_DETAILS = "generate-details";

// get args
const [, , ...args] = process.argv;

const typeOperation = args[0]; // generate-list or generate-details
const blockName = args[1];
const entityName = args[2];

switch (typeOperation) {
    case OPERATION_GENERATE_LIST:
        generateList(blockName, entityName);
        break;
    case OPERATION_GENERATE_DETAILS:
        generateDetails(blockName, entityName);
        break;
    default:
        break;
}
