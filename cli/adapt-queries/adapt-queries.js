const replace = require('replace-in-file');

const CONFIG_QUERIES = require('../../ConfigEntities/FieldsBySchema');

// const FIELD_TYPES = {
//   SINGLE: 'single_text',
//   ARRAY_LIST: 'field_array_list',
//   OBJ_TO_LIST: 'field_array_object_to_list',
//   OBJECT: 'name_value_object',
//   ID_OBJECT: 'id_name_object',
// };

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
    const options = {
      files: entityFields.files,
      from: entityFields.reference,
      to: mountStringToInsert(entityFields.queries[schemaName].fields),
    };
    try {
      const results = await replace(options);
      // console.log('Replacement results:', results);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  });
};

module.exports = adaptQueries;
