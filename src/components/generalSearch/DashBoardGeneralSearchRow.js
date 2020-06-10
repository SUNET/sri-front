import React from 'react';
import graphql from 'babel-plugin-relay/macro';
// import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import _DashBoardRowParentClass from '../common/_DashBoardRowParentClass';

function getUrlByType(entityType) {
  let url = null;
  switch (entityType) {
    case 'Group':
      url = '/community/groups/__dataId__';
      break;
    case 'Organization':
      url = '/community/organizations/__dataId__';
      break;
    case 'Contact':
      url = '/community/contacts/__dataId__';
      break;
    case 'Port':
      url = '/network/ports/__dataId__';
      break;
    case 'Cable':
      url = '/network/cables/__dataId__';
      break;
    case 'Customer':
      url = '/network/customers/__dataId__';
      break;
    case 'EndUser':
      url = '/network/end-users/__dataId__';
      break;
    case 'Provider':
      url = '/network/providers/__dataId__';
      break;
    case 'SiteOwner':
      url = '/network/site-owners/__dataId__';
      break;
    default:
      url = null;
      break;
  }

  return url;
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

    const replacement = '++++++';

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
