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

  renderCellElementsList(sectionName, path, listElements) {
    const links = listElements.map((el, index, arr) => {
      const isLast = index === arr.length - 1;
      const uniqKey = `${new Date().getTime()}-${index}`;
      return (
        <span key={uniqKey}>
          <a
            href={`${window.location.origin}/${path}/${el.id}`}
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {el.name}
          </a>
          {!isLast && <span>|</span>}
        </span>
      );
    });
    return (
      (this.props.columnsVisible[sectionName] || this.props.showAllColumns) && (
        <td>
          <span className="d-flex flex-wrap" style={{ width: '100%' }}>
            {links}
          </span>
        </td>
      )
    );
  }

  render() {
    let { service } = this.props;
    return (
      <tr onClick={(e) => this.props.onClick(e, service)}>
        {this.renderCellSection('name', service.name)}
        {this.renderCellSection('service_type', service.service_type.name)}
        {this.renderCellSection('service_class', service.service_class.name)}
        {this.renderCellElementsList('customers', 'network/customers', service.customers)}
        {this.renderCellElementsList('end_users', 'network/end-users', service.end_users)}
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
