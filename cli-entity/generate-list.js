const fs = require('fs');
const utils = require('./utils');
const { createDirectory, createFile, generateContent, camelToSnake, getNamingObject } = utils;

const generateList = (blockEntity, nameEntity) => {
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
      { path: `${entityClassName}List.js`, template: 'cli-entity/templates/ContainerEntityList.js' },
      { path: `Search${entityClassName}.js`, template: 'cli-entity/templates/ContainerSearchEntity.js' },
    ],
  };

  const componentsPaths = {
    directory: `/src/components/${entityName}`,
    files: [
      { path: `/Search${entityClassName}.js`, template: 'cli-entity/templates/ComponentSearchEntity.js' },
      { path: `/${entityClassName}List.js`, template: 'cli-entity/templates/ComponentEntityList.js' },
      { path: `/${entityClassName}Row.js`, template: 'cli-entity/templates/ComponentEntityRow.js' },
    ],
  };

  createPathAndFiles(containersPaths);
  createPathAndFiles(componentsPaths);
};
module.exports = generateList;
