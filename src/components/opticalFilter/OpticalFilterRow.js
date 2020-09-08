import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class OpticalFilterRow extends React.PureComponent {
  static propTypes = {
    opticalFilter: PropTypes.object.isRequired,
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
    let opticalFilter = this.props.opticalFilter;
    return (
      <tr onClick={(e) => this.props.onClick(e, opticalFilter)}>
        {this.renderCellSection('name', opticalFilter.name)}
        {this.renderCellSection('description', opticalFilter.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const OpticalFilterRowFragment = createFragmentContainer(OpticalFilterRow, {
  opticalFilter: graphql`
    fragment OpticalFilterRow_opticalFilter on OpticalFilter {
      id
      name
      description
    }
  `,
});

export default OpticalFilterRowFragment;
