const fs = require('fs');
const { promisify } = require('util');
const replace = require('replace-in-file');

const CONFIG_QUERIES = require('../../ConfigEntities/FieldsBySchema');

const copyFileAsync = promisify(fs.copyFile);

const getNameWithAlias = (fieldInfo) => {
  if (fieldInfo.alias) {
    return `${fieldInfo.alias}: ${fieldInfo.name}`;
  }
  return `${fieldInfo.name}`;
};

const mountStringToInsert = (fieldsList) => {
  const result = fieldsList.map((fieldElement) => {
    return STRUCTURE_BY_FIELD_TYPE[fieldElement.type](fieldElement);
  });
  return result.join('\n');
};

const STRUCTURE_BY_FIELD_TYPE = {
  single_text: (fieldInfo) => getNameWithAlias(fieldInfo),
  field_array_object_to_list: (fieldInfo) => getNameWithAlias(fieldInfo),
  field_array_list: (fieldInfo) => `
    ${fieldInfo.name} {
      ${mountStringToInsert(fieldInfo.subFields)}
    }`,
  name_value_object: (fieldInfo) => `
    ${getNameWithAlias(fieldInfo)} {
        name
        value
    }
  `,
  id_name_object: (fieldInfo) => `
    ${getNameWithAlias(fieldInfo)} {
        id
        name
    }
  `,
};

const adaptQueries = async (schemaName = 'common') => {
  CONFIG_QUERIES.forEach(async (entityFields) => {
    await Promise.all(
      entityFields.files.map(async (file) => {
        await copyFileAsync(`${__dirname}/../../${file}.template`, `${__dirname}/../../${file}.js`);
      }),
    );

    const options = {
      files: entityFields.files.map((file) => `${file}.js`),
      from: entityFields.reference,
      to: mountStringToInsert(entityFields.queries[schemaName].fields),
    };

    try {
      await replace(options);
      console.log(`${entityFields.entity} Adapt Query Done!`);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  });
};

module.exports = adaptQueries;
