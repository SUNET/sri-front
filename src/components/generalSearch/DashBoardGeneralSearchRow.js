import React from 'react';
import graphql from 'babel-plugin-relay/macro';
// import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import _DashBoardRowParentClass from '../common/_DashBoardRowParentClass';
import { RoutesCommunityEntity, RoutesNetworkEntity } from '../../Routes';

function getUrlByType(entityType) {
  const allRoutes = { ...RoutesCommunityEntity, ...RoutesNetworkEntity };
  return allRoutes[entityType] ? `/${allRoutes[entityType]}/__dataId__` : null;
}

export class DashBoardGeneralSearchRow extends _DashBoardRowParentClass {
  constructor(props) {
    super(props);
    this.MAIN_PROP = 'ninode';
  }

  renderInfo() {
    const element = this.props[this.MAIN_PROP];
    const { filterText } = this.props;
    const { match_txt, ninode } = element;
    const { __typename, name, id } = ninode;
    const urlTemplate = getUrlByType(__typename);

    const indexString = match_txt.toLowerCase().indexOf(filterText.toLowerCase());
    const matchTxtToPresent = {
      initText: match_txt.substr(0, indexString),
      boldText: match_txt.substr(indexString, filterText.length),
      finalText: match_txt.substr(indexString + filterText.length),
    };

    return (
      <tr
        className={!urlTemplate ? 'not-clickable' : ''}
        onClick={() => {
          if (urlTemplate) {
            this.props.onClick(urlTemplate, id);
          }
        }}
      >
        <td>{__typename}</td>
        <td>{name}</td>
        <td>
          <div>
            {matchTxtToPresent.initText}
            <span className="font-weight-bold">{matchTxtToPresent.boldText}</span>
            {matchTxtToPresent.finalText}
          </div>
        </td>
      </tr>
    );
  }

  render() {
    return this.renderInfo();
  }
}

DashBoardGeneralSearchRow.propTypes = {};

const GeneralSearchRowFragment = createFragmentContainer(DashBoardGeneralSearchRow, {
  ninode: graphql`
    fragment DashBoardGeneralSearchRow_ninode on GeneralSearch {
      match_txt
      ninode {
        __typename
        id
        name
      }
    }
  `,
});

export default GeneralSearchRowFragment;
