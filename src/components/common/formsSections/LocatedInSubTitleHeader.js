import React from 'react';

const getPath = (type, id) => {
  return `/network/location-${type.toLowerCase()}s/${id}`;
};

const getLocationElement = (locationBlock, locType) => {
  if (!locationBlock) return null;
  let id, name;
  if (locationBlock?.__typename === locType) {
    id = locationBlock.id;
    name = locationBlock.name;
  }
  if (locationBlock?.parent?.__typename === locType) {
    id = locationBlock?.parent.id;
    name = locationBlock?.parent.name;
  }
  if (locationBlock?.parent?.parent?.__typename === locType) {
    id = locationBlock?.parent?.parent?.id;
    name = locationBlock?.parent?.parent?.name;
  }
  return {
    id,
    name,
    path: getPath(locType, id),
  };
};

export default function renderLocatedInSubTitleHeader(titleText, location) {
  const locationData = Array.isArray(location) && location.length > 0 ? location[0] : location;

  const rack = getLocationElement(locationData, 'Rack');
  const room = getLocationElement(locationData, 'Room');
  const site = getLocationElement(locationData, 'Site');
  const locationsToRender = [rack, room, site].filter((el) => el);

  return (
    <div className="model-details__subtitle">
      <div className="model-details__subtitle__title">{titleText}:</div>
      <div className="model-details__subtitle__content">
        {locationsToRender.map((el, index, arr) => {
          const isLast = index === arr.length - 1;
          const uniqKey = `${new Date().getTime()}-${index}`;
          return (
            <span key={uniqKey}>
              <a
                href={`${el.path}`}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {el.name}
              </a>
              {!isLast && <span>|</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
