import React from 'react';
import { kebabCase } from '../../../utils';

export default function renderCellElementsList(columnsVisible, showAllColumns, sectionName, listElements, path?) {
  const links = listElements.map((el, index, arr) => {
    const isLast = index === arr.length - 1;
    const uniqKey = `${new Date().getTime()}-${index}`;
    return (
      <span key={uniqKey}>
        {path && (
          <a
            href={`${window.location.origin}/${path}/${kebabCase(el.__typename)}s/${el.id}`}
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {el.name}
          </a>
        )}
        {!path && <span>{el.name}</span>}
        {!isLast && <span className="ml-1 mr-1">|</span>}
      </span>
    );
  });
  return (
    (columnsVisible[sectionName] || showAllColumns) && (
      <td>
        <span className="d-flex flex-wrap" style={{ width: '100%' }}>
          {links}
        </span>
      </td>
    )
  );
}
