const fs = require("fs");

const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const writeDirectoryAsync = promisify(fs.mkdirSync);

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

module.exports = { createDirectory, createFile, readFileAsync, camelToSnake };
