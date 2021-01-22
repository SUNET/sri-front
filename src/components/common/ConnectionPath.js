import React from 'react';

import '../../style/PortConnectionPath.scss';

const ConnectionPath = ({ blocks }) => {
  return (
    <div className="connection-path">
      {blocks.map((el, index, arr) => {
        const isLast = index === arr.length - 1;
        return (
          <div key={`connection-path__key-${index}`} className="connection-path__element">
            <div className="connection-path__element__content">
              <div className="connection-path__element__content__link-name">
                {<a
                  href={`${el.path}`}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {el.name}
                </a>}
                {el.portName && !el.currentElement && (
                  <a
                    href={`${el.portPath}`}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {el.portName}
                  </a>
                )}
                {el.portName && el.currentElement && el.portName}
              </div>
              <div className="connection-path__element__content__type">({el.connectionType})</div>
            </div>
            {!isLast && <div className="connection-path__element__arrow"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default ConnectionPath;
