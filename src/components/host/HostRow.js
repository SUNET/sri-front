import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class HostRow extends React.PureComponent {
  static propTypes = {
    host: PropTypes.object.isRequired,
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
    let host = this.props.host;
    return (
      <tr onClick={(e) => this.props.onClick(e, host)}>
        {this.renderCellSection('name', host.name)}
        {this.renderCellSection('description', host.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const HostRowFragment = createFragmentContainer(HostRow, {
  host: graphql`
    fragment HostRow_host on Host {
      id
      name
      description
    }
  `,
});

export default HostRowFragment;
