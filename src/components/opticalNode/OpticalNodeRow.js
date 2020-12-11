import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class OpticalNodeRow extends React.PureComponent {
  static propTypes = {
    opticalNode: PropTypes.object.isRequired,
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
    let { opticalNode } = this.props;
    return (
      <tr onClick={(e) => this.props.onClick(e, opticalNode)}>
        {this.renderCellSection('name', opticalNode.name)}
        {this.renderCellSection('type', opticalNode.type?.name)}
        {this.renderCellSection('link', opticalNode.link)}
        {this.renderCellSection('ots', opticalNode.ots)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const OpticalNodeRowFragment = createFragmentContainer(OpticalNodeRow, {
  opticalNode: graphql`
    fragment OpticalNodeRow_opticalNode on OpticalNode {
      id
      name
      link
      ots
      type {
        id
        name
        value
      }
    }
  `,
});

export default OpticalNodeRowFragment;
