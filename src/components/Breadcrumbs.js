import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PropTypes from 'prop-types';
import Routes from '../Routes';

function generatePathsArray(pathString, isDetailsEntity, entityDetails) {
  return pathString.split('/').map((pathElement, index, array) => {
    const mathIdCurrentDetailsInLocationPath = pathString.includes(entityDetails.id);
    const isLastPath = index === array.length - 1;
    const isActive = isLastPath;
    let pathTo = `/${pathElement}`;
    let name = Routes[pathTo];

    if (typeof Routes[pathTo] === 'undefined') {
      pathTo = array.slice(0, index + 1).join('/');
      name = isLastPath && isDetailsEntity && mathIdCurrentDetailsInLocationPath ? entityDetails.name : Routes[pathTo];
    }
    return {
      pathTo,
      name,
      isActive,
    };
  });
}

const Breadcrumbs = ({ history, isDetailsEntity, entityDetails }) => {
  const { pathname } = history.location;
  const routeSteps = generatePathsArray(pathname, isDetailsEntity, entityDetails);
  return (
    <div className="breadcrumbs">
      <Breadcrumb>
        {routeSteps.map(({ pathTo, name, isActive }, index) => {
          return (
            <Breadcrumb.Item active={isActive} key={`${index * Math.random()}`} href={pathTo}>
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

Breadcrumbs.propsTypes = {
  history: PropTypes.object.isRequired,
  isDetailsEntity: PropTypes.bool.isRequired,
  entityDetails: PropTypes.bool.isRequired,
};

export default Breadcrumbs;
