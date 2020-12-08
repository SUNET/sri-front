import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class FirewallRow extends React.PureComponent {
  static propTypes = {
    firewall: PropTypes.object.isRequired,
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
    let { firewall } = this.props;
    return (
      <tr onClick={(e) => this.props.onClick(e, firewall)}>
        {this.renderCellSection('name', firewall.name)}
        {this.renderCellSection('model', firewall.model)}
        {this.renderCellSection('os_version', firewall.os_version)}
        {this.renderCellSection('operational_state', firewall.operational_state.name)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const FirewallRowFragment = createFragmentContainer(FirewallRow, {
  firewall: graphql`
    fragment FirewallRow_firewall on Firewall {
      id
      name
      description
      name
      model
      os_version
      operational_state {
        name
        value
      }
    }
  `,
});

export default FirewallRowFragment;
