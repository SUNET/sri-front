import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class PeeringGroupRow extends React.PureComponent {
  static propTypes = {
    peeringGroup: PropTypes.object.isRequired,
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
    let peeringGroup = this.props.peeringGroup;
    return (
      <tr onClick={(e) => this.props.onClick(e, peeringGroup)}>
        {this.renderCellSection('name', peeringGroup.name)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const PeeringGroupRowFragment = createFragmentContainer(PeeringGroupRow, {
  peeringGroup: graphql`
    fragment PeeringGroupRow_peeringGroup on PeeringGroup {
      id
      name
    }
  `,
});

export default PeeringGroupRowFragment;
