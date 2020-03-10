const fs = require("fs");
const utils = require("./utils");
const { createDirectory, createFile, readFileAsync, camelToSnake, getNamingObject, generateContent } = utils;

const generateDetails = (blockEntity, nameEntity) => {
    const namingObject = getNamingObject(blockEntity, nameEntity);
    const { blockName, entityName, entityClassName, entityInternalRoutePath } = namingObject;

    const createPathAndFiles = async (paths) => {
        createDirectory(paths.directory);
        paths.files.forEach(async (fileData) => {
            const content = await generateContent(namingObject, fileData.template);
            createFile(`${paths.directory}/${fileData.path}`, content);
        });
    };

    const containersPaths = {
        directory: `/src/containers/${entityName}`,
        files: [{ path: `${entityClassName}Details.js`, template: "cli-entity/templates/ContainerEntityDetails.js" }]
    };
    const componentsPaths = {
        directory: `/src/components/${entityName}`,
        files: [{ path: `${entityClassName}Details.js`, template: "cli-entity/templates/ComponentEntityDetails.js" }]
    };
    const queriesPaths = {
        directory: `/src/queries/${entityName}`,
        files: [
            { path: `${entityClassName}DetailsQuery.js`, template: "cli-entity/templates/QueryEntityDetailsQuery.js" }
        ]
    };

    createPathAndFiles(containersPaths);
    createPathAndFiles(queriesPaths);
};
module.exports = generateDetails;
