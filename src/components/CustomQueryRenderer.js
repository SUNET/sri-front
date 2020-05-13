import React from 'react';
import { QueryRenderer } from 'react-relay';
import { Spinner } from 'react-bootstrap';

const CustomQueryRenderer = ({ environment, query, variables, errorMessage, mainClass, componentToRender }) => {
  const { Component, mainProps, componentProps } = componentToRender;
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={variables}
      render={({ error, props, retry }) => {
        let loading = true;
        if (props && !error) {
          loading = false;
        } else if (error) {
          loading = false;
          return <div>{errorMessage}</div>;
        }
        const customProps = {
          refetch: retry,
          loading,
        };

        mainProps.forEach((propString) => {
          customProps[propString] = props;
        });

        const allProps = { ...componentProps, ...customProps };

        return (
          <div className={`position-relative ${mainClass}`}>
            {loading && (
              <div className="query-renderer-spinner">
                <Spinner animation="grow" />
              </div>
            )}
            <Component {...allProps} />
          </div>
        );
      }}
    />
  );
};

export default CustomQueryRenderer;
