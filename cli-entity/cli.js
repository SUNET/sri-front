#!/usr/bin/env node

const fs = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const writeDirectoryAsync = promisify(fs.mkdirSync);

function camelToSnake(string) {
    return string
        .replace(/(?:^|\.?)([A-Z])/g, function(x, y) {
            return "_" + y.toLowerCase();
        })
        .replace(/^_/, "");
}

// get args
const [, , ...args] = process.argv;

const blockName = args[0];
const entityName = args[1];
const entityClassName = entityName.charAt(0).toUpperCase() + entityName.slice(1);
const entityInternalRoutePath = camelToSnake(entityName);

const createDirectory = async (dirPath) => {
    await writeDirectoryAsync(process.cwd() + dirPath, { recursive: true }, (error) => {
        if (error) {
        } else {
        }
    });
};
const createFile = async (filePath, fileContent) => {
    await writeFileAsync(process.cwd() + filePath, fileContent, (error) => {
        if (error) {
        } else {
        }
    });
};

const createPathAndFiles = async (paths) => {
    createDirectory(paths.directory);
    paths.files.forEach(async (fileData) => {
        let content;
        try {
            content = await readFileAsync(fileData.template, "utf8");
            content = content.split("__EntityClassName__").join(`${entityClassName}`);
            content = content.split("__entityName__").join(`${entityName}`);
            content = content.split("__entityInternalRoutePath__").join(`${entityInternalRoutePath}`);
            content = content.split("__entityBlock__").join(`${blockName}`);
        } catch (err) {
            throw err;
        }
        createFile(`${paths.directory}/${fileData.path}`, content);
    });
};

const containersPaths = {
    directory: `/src/containers/${entityName}`,
    files: [
        { path: `${entityClassName}List.js`, template: "cli-entity/templates/ContainerEntityList.js" },
        { path: `Search${entityClassName}.js`, template: "cli-entity/templates/ContainerSearchEntity.js" }
    ]
};

const componentsPaths = {
    directory: `/src/components/${entityName}`,
    files: [
        { path: `/Search${entityClassName}.js`, template: "cli-entity/templates/ComponentSearchEntity.js" },
        { path: `/${entityClassName}List.js`, template: "cli-entity/templates/ComponentEntityList.js" },
        { path: `/${entityClassName}Row.js`, template: "cli-entity/templates/ComponentEntityRow.js" }
    ]
};

createPathAndFiles(containersPaths);
createPathAndFiles(componentsPaths);
