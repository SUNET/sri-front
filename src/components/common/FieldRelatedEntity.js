import React from 'react';
import FormBlockSection from './FormBlockSection';
import { generateURL } from '../../utils';

const getPresentContent = (partialPath, fieldInfo, data) => {
  let content;
  switch (fieldInfo.type) {
    case 'textType':
      content = <div>{data[fieldInfo.internalName].name}</div>;
      break;
    case 'text':
      content = <div>{data[fieldInfo.internalName]}</div>;
      break;
    case 'internal-url':
      content = (
        <a href={`/${partialPath}/${data.id}`} rel="noopener noreferrer">
          {data.internalLinkText}
        </a>
      );
      break;
    case 'url':
      content = (
        <a href={generateURL(data[fieldInfo.internalName])} target="_blank" rel="noopener noreferrer">
          {data[fieldInfo.internalName]}
        </a>
      );
      break;
    default:
      break;
  }
  return content;
};
function FieldRelatedEntity(props) {
  const { t, data, fieldsInfo } = props;
  const { fields } = fieldsInfo;
  return (
    <div key={data.id} className="field-related-entity d-flex flex-wrap">
      {fields.map((field, index) => {
        const structuredData = {
          title: t(`${field.i18nText}`),
          presentContent: getPresentContent(fieldsInfo?.partialPath, field, {
            ...data,
            ...{ internalLinkText: t('general-forms/go-to-detail') },
          }),
        };
        return <FormBlockSection key={`${data.id}+${index}`} editable={false} data={structuredData} />;
      })}
    </div>
  );
}

export default FieldRelatedEntity;
