import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class OpticalMultiplexSectionRow extends React.PureComponent {
  static propTypes = {
    opticalMultiplexSection: PropTypes.object.isRequired,
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
    let opticalMultiplexSection = this.props.opticalMultiplexSection;
    return (
      <tr onClick={(e) => this.props.onClick(e, opticalMultiplexSection)}>
        {this.renderCellSection('name', opticalMultiplexSection.name)}
        {this.renderCellSection('description', opticalMultiplexSection.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const OpticalMultiplexSectionRowFragment = createFragmentContainer(OpticalMultiplexSectionRow, {
  opticalMultiplexSection: graphql`
    fragment OpticalMultiplexSectionRow_opticalMultiplexSection on OpticalMultiplexSection {
      id
      name
      description
    }
  `,
});

export default OpticalMultiplexSectionRowFragment;
