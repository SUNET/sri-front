const utils = require("./utils");
const { createDirectory, createFile, readFileAsync, camelToSnake } = utils;

const generateDetails = (blockEntity, nameEntity) => {
    const blockName = blockEntity;
    const entityName = nameEntity;
    const entityInternalRoutePath = camelToSnake(entityName);
    const entityClassName = entityName.charAt(0).toUpperCase() + entityName.slice(1);
    console.log(entityName);
    console.log(entityClassName);
    console.log(entityInternalRoutePath);
};
module.exports = generateDetails;
