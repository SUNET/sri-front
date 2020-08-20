import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class ODFRow extends React.PureComponent {
  static propTypes = {
    ODF: PropTypes.object.isRequired,
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
    let ODF = this.props.ODF;
    return (
      <tr onClick={(e) => this.props.onClick(e, ODF)}>
        {this.renderCellSection('name', ODF.name)}
        {this.renderCellSection('description', ODF.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const ODFRowFragment = createFragmentContainer(ODFRow, {
  ODF: graphql`
    fragment ODFRow_ODF on ODF {
      id
      name
      description
    }
  `,
});

export default ODFRowFragment;
