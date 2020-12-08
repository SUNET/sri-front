import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import renderCellElementsList from '../common/ListElements/CellListElements';

class OpticalLinkRow extends React.PureComponent {
  static propTypes = {
    opticalLink: PropTypes.object.isRequired,
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
    let { opticalLink, columnsVisible, showAllColumns } = this.props;
    return (
      <tr onClick={(e) => this.props.onClick(e, opticalLink)}>
        {this.renderCellSection('name', opticalLink.name)}
        {this.renderCellSection('link_type', opticalLink.link_type?.name)}
        {renderCellElementsList(columnsVisible, showAllColumns, 'dependencies', opticalLink.dependencies, 'network')}
        {this.renderCellSection('description', opticalLink.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const OpticalLinkRowFragment = createFragmentContainer(OpticalLinkRow, {
  opticalLink: graphql`
    fragment OpticalLinkRow_opticalLink on OpticalLink {
      id
      name
      description
      link_type {
        id
        name
        value
      }
      dependencies {
        __typename
        id
        name
      }
    }
  `,
});

export default OpticalLinkRowFragment;
