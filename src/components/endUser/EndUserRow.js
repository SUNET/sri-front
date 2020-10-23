import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class EndUserRow extends React.PureComponent {
  static propTypes = {
    endUser: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  formatDate = (dateString) => {
    let date = new Date(dateString);
    return date.toISOString('YYYY-MM-DD');
  };

  renderCellSection(sectionName, text) {
    return (
      (this.props.columnsVisible[sectionName] || this.props.showAllColumns) && (
        <td className="text-truncate" style={{ maxWidth: 0 }}>
          <span title={text} className="d-inline-block text-truncate" style={{ width: '100%' }}>
            {text}
          </span>
        </td>
      )
    );
  }

  render() {
    let endUser = this.props.endUser;

    return (
      <tr onClick={(e) => this.props.onClick(e, endUser)}>
        {this.renderCellSection('name', endUser.name)}
        {this.renderCellSection('url', endUser.url)}
        {this.renderCellSection('description', endUser.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const EndUserRowFragment = createFragmentContainer(EndUserRow, {
  endUser: graphql`
    fragment EndUserRow_endUser on EndUser {
      id
      name
      description
      url
    }
  `,
});

export default EndUserRowFragment;
