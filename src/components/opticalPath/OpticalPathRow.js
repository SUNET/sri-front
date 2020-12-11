import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import renderCellElementsList from '../common/ListElements/CellListElements';

class OpticalPathRow extends React.PureComponent {
  static propTypes = {
    opticalPath: PropTypes.object.isRequired,
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
    let { opticalPath, columnsVisible, showAllColumns } = this.props;
    const enrs = opticalPath.enrs ? JSON.parse(opticalPath.enrs) : [];
    return (
      <tr onClick={(e) => this.props.onClick(e, opticalPath)}>
        {this.renderCellSection('name', opticalPath.name)}
        {this.renderCellSection('framing', opticalPath.framing?.name)}
        {this.renderCellSection('capacity', opticalPath.capacity?.name)}
        {renderCellElementsList(
          columnsVisible,
          showAllColumns,
          'enrs',
          enrs.map((ip) => ({ name: ip })),
        )}
        {this.renderCellSection('description', opticalPath.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const OpticalPathRowFragment = createFragmentContainer(OpticalPathRow, {
  opticalPath: graphql`
    fragment OpticalPathRow_opticalPath on OpticalPath {
      id
      name
      framing {
        __typename
        name
        value
      }
      capacity {
        __typename
        name
        value
      }
      enrs
      description
    }
  `,
});

export default OpticalPathRowFragment;
