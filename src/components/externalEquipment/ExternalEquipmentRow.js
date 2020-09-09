import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class ExternalEquipmentRow extends React.PureComponent {
  static propTypes = {
    externalEquipment: PropTypes.object.isRequired,
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
    let externalEquipment = this.props.externalEquipment;
    return (
      <tr onClick={(e) => this.props.onClick(e, externalEquipment)}>
        {this.renderCellSection('name', externalEquipment.name)}
        {this.renderCellSection('description', externalEquipment.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const ExternalEquipmentRowFragment = createFragmentContainer(ExternalEquipmentRow, {
  externalEquipment: graphql`
    fragment ExternalEquipmentRow_externalEquipment on ExternalEquipment {
      id
      name
      description
    }
  `,
});

export default ExternalEquipmentRowFragment;
