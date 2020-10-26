import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class ServiceRow extends React.PureComponent {
  static propTypes = {
    service: PropTypes.object.isRequired,
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
    let service = this.props.service;
    return (
      <tr onClick={(e) => this.props.onClick(e, service)}>
        {this.renderCellSection('name', service.name)}
        {this.renderCellSection('description', service.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const ServiceRowFragment = createFragmentContainer(ServiceRow, {
  service: graphql`
    fragment ServiceRow_service on Service {
      id
      name
      description
    }
  `,
});

export default ServiceRowFragment;
