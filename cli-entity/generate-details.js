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
        files: [
            // { path: `${entityClassName}Details.js`, template: "cli-entity/templates/ContainerEntityDetails.js" },
            // { path: `${entityClassName}UpdateForm.js`, template: "cli-entity/templates/ContainerEntityUpdateForm.js" },
            { path: `Create${entityClassName}Form.js`, template: "cli-entity/templates/ContainerCreateEntityForm.js" }
        ]
    };
    const componentsPaths = {
        directory: `/src/components/${entityName}`,
        files: [
            // { path: `${entityClassName}Details.js`, template: "cli-entity/templates/ComponentEntityDetails.js" },
            // { path: `${entityClassName}UpdateForm.js`, template: "cli-entity/templates/ComponentEntityUpdateForm.js" },
            { path: `Create${entityClassName}.js`, template: "cli-entity/templates/ComponentCreateEntity.js" },
            { path: `Create${entityClassName}Form.js`, template: "cli-entity/templates/ComponentCreateEntityForm.js" },
        ]
    };
    const queriesPaths = {
        directory: `/src/queries/${entityName}`,
        files: [
            { path: `${entityClassName}DetailsQuery.js`, template: "cli-entity/templates/QueryEntityDetailsQuery.js" }
        ]
    };

    const mutationsPaths = {
        directory: `/src/mutations/${entityName}`,
        files: [
            { path: `Delete${entityClassName}Mutation.js`, template: "cli-entity/templates/MutationDeleteEntityMutation.js" },
            { path: `Update${entityClassName}Mutation.js`, template: "cli-entity/templates/MutationDeleteEntityUpdateMutation.js" },
            { path: `Create${entityClassName}Mutation.js`, template: "cli-entity/templates/MutationDeleteEntityCreateMutation.js" },
        ]
    }

    createPathAndFiles(containersPaths);
    // createPathAndFiles(queriesPaths);
    createPathAndFiles(componentsPaths);
    createPathAndFiles(mutationsPaths);
};
module.exports = generateDetails;
