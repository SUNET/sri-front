import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class SiteRow extends React.PureComponent {
  static propTypes = {
    site: PropTypes.object.isRequired,
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
    let site = this.props.site;
    return (
      <tr onClick={(e) => this.props.onClick(e, site)}>
        {this.renderCellSection('name', site.name)}
        {this.renderCellSection('description', site.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const SiteRowFragment = createFragmentContainer(SiteRow, {
  site: graphql`
    fragment SiteRow_site on Site {
      id
      name
    }
  `,
});

export default SiteRowFragment;
