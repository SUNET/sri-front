import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class SwitchRow extends React.PureComponent {
  static propTypes = {
    switch: PropTypes.object.isRequired,
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
    let row = this.props.switch;
    return (
      <tr onClick={(e) => this.props.onClick(e, row)}>
        {this.renderCellSection('name', row.name)}
        {this.renderCellSection('description', row.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const SwitchRowFragment = createFragmentContainer(SwitchRow, {
  switch: graphql`
    fragment SwitchRow_switch on Switch {
      id
      name
      description
    }
  `,
});

export default SwitchRowFragment;
