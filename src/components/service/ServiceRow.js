import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import renderCellElementsList from '../common/ListElements/CellListElements';

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
    let { service, columnsVisible, showAllColumns } = this.props;
    return (
      <tr onClick={(e) => this.props.onClick(e, service)}>
        {this.renderCellSection('name', service.name)}
        {this.renderCellSection('service_type', service.service_type.name)}
        {this.renderCellSection('service_class', service.service_class.name)}
        {renderCellElementsList(columnsVisible, showAllColumns, 'customers', service.customers, 'network')}
        {renderCellElementsList(columnsVisible, showAllColumns, 'end_users', service.end_users, 'network')}
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
      service_class {
        name
      }
      service_type {
        name
      }
      customers {
        id
        __typename
        name
      }
      end_users {
        id
        __typename
        name
      }
    }
  `,
});

export default ServiceRowFragment;
