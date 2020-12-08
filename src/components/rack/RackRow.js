import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import renderCellElementsList from '../common/ListElements/CellListElements';
class RackRow extends React.PureComponent {
  static propTypes = {
    rack: PropTypes.object.isRequired,
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
    let { rack, columnsVisible, showAllColumns } = this.props;
    // the typename is modified to relate it to the route, which for locations is location-TYPE
    const parent = rack.parent ? [{ ...rack.parent, __typename: `location-${rack.parent.__typename}` }] : [];
    return (
      <tr onClick={(e) => this.props.onClick(e, rack)}>
        {this.renderCellSection('name', rack.name)}
        {renderCellElementsList(columnsVisible, showAllColumns, 'location', parent, 'network')}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const RackRowFragment = createFragmentContainer(RackRow, {
  rack: graphql`
    fragment RackRow_rack on Rack {
      id
      name
      parent {
        id
        name
        __typename
      }
    }
  `,
});

export default RackRowFragment;
