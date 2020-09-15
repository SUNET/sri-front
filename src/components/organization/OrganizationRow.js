import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { INPUTS } from '../FieldArrayCheckbox';

import '../../style/ModelRow.scss';

class OrganizationRow extends React.PureComponent {
  static propTypes = {
    organization: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { affiliation_list: [] };
  }

  componentDidMount() {
    const organization = this.props.organization;
    const affiliation_list = [];

    if (organization.affiliation_customer) affiliation_list.push(0);
    if (organization.affiliation_end_customer) affiliation_list.push(1);
    if (organization.affiliation_host_user) affiliation_list.push(2);
    if (organization.affiliation_partner) affiliation_list.push(3);
    if (organization.affiliation_provider) affiliation_list.push(4);
    if (organization.affiliation_site_owner) affiliation_list.push(5);
    this.setState({ affiliation_list: affiliation_list });
  }

  render() {
    const organization = this.props.organization;
    return (
      <tr onClick={(e) => this.props.onClick(e, organization)}>
        {(this.props.columnsVisible['name'] || this.props.showAllColumns) && <td>{organization.name}</td>}
        {(this.props.columnsVisible['organization_id'] || this.props.showAllColumns) && (
          <td>{organization.organization_id}</td>
        )}
        {(this.props.columnsVisible['type'] || this.props.showAllColumns) &&
          (organization.type ? <td>{organization.type.name}</td> : <td></td>)}
        {(this.props.columnsVisible['afffiliation'] || this.props.showAllColumns) && (
          <td>
            {this.state.affiliation_list.map((affiliation, index) => {
              return (
                <span key={index}>
                  {INPUTS[affiliation].label} {this.state.affiliation_list[index + 1] ? ', ' : ''}
                </span>
              );
            })}
          </td>
        )}
        {(this.props.columnsVisible['parent_organization_id'] || this.props.showAllColumns) && (
          <td>{organization.parent_organization && <span>{organization.parent_organization.organization_id}</span>}</td>
        )}
        <td></td>
      </tr>
    );
  }
}

const OrganizationRowFragment = createFragmentContainer(OrganizationRow, {
  organization: graphql`
    fragment OrganizationRow_organization on Organization {
      id
      name
      type {
        name
        value
      }
      organization_id
      affiliation_customer
      affiliation_end_customer
      affiliation_host_user
      affiliation_partner
      affiliation_provider
      affiliation_site_owner
      parent_organization {
        organization_id
        relation_id
        id
        name
      }
      incoming {
        name
        relation {
          type
          start {
            id
            node_name
          }
        }
      }
    }
  `,
});

export default OrganizationRowFragment;
