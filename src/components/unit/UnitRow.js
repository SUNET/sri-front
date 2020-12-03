import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class UnitRow extends React.PureComponent {
  static propTypes = {
    unit: PropTypes.object.isRequired,
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
    let unit = this.props.unit;
    return (
      <tr onClick={(e) => this.props.onClick(e, unit)}>
        {this.renderCellSection('name', unit.name)}
        {this.renderCellSection('description', unit.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const UnitRowFragment = createFragmentContainer(UnitRow, {
  unit: graphql`
    fragment UnitRow_unit on Unit {
      id
      name
      description
    }
  `,
});

export default UnitRowFragment;
