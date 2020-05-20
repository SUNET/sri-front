import React from "react";
import FormBlockSection from "./FormBlockSection";
import { generateURL } from "../../utils";

const getPresentContent = (fieldInfo, data) => {
    let content;
    switch (fieldInfo.type) {
        case "textType":
            content = <div>{data[fieldInfo.internalName].name}</div>;
            break;
        case "text":
            content = <div>{data[fieldInfo.internalName]}</div>;
            break;
        case "url":
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
    const { t, data } = props;
    return (
        <div key={props.data.id} className="field-related-entity d-flex flex-wrap">
            {props.fields.map((field, index) => {
                const structuredData = {
                    title: t(`${field.i18nText}`),
                    presentContent: getPresentContent(field, data),
                };
                return <FormBlockSection key={`${data.id}+${index}`} editable={false} data={structuredData} />;
            })}
        </div>
    );
}

export default FieldRelatedEntity;
