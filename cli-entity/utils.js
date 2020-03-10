const fs = require("fs");

const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const writeDirectoryAsync = promisify(fs.mkdirSync);

const getNamingObject = (blockName, entityName) => {
    const entityClassName = entityName.charAt(0).toUpperCase() + entityName.slice(1);
    const entityInternalRoutePath = camelToSnake(entityName);
    return {
        blockName,
        entityName,
        entityClassName,
        entityInternalRoutePath
    };
};

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

const camelToSnake = (string) => {
    return string
        .replace(/(?:^|\.?)([A-Z])/g, function(x, y) {
            return "-" + y.toLowerCase();
        })
        .replace(/^_/, "");
};

const generateContent = async (namingObj, template) => {
    const { blockName, entityName, entityClassName, entityInternalRoutePath } = namingObj;
    let content;
    try {
        content = await readFileAsync(template, "utf8");
        content = content.split("__EntityClassName__").join(`${entityClassName}`);
        content = content.split("__entityName__").join(`${entityName}`);
        content = content.split("__entityInternalRoutePath__").join(`${entityInternalRoutePath}`);
        content = content.split("__entityBlock__").join(`${blockName}`);
        content = content.split("__CONST_NAME__").join(`${entityName.toUpperCase()}`);
    } catch (err) {
        throw err;
    }
    return content;
};

module.exports = { createDirectory, createFile, readFileAsync, camelToSnake, generateContent, getNamingObject };
