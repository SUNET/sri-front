import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class ProviderRow extends React.PureComponent {
  static propTypes = {
    provider: PropTypes.object.isRequired,
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
    let provider = this.props.provider;
    return (
      <tr onClick={(e) => this.props.onClick(e, provider)}>
        {this.renderCellSection('name', provider.name)}
        {this.renderCellSection('url', provider.url)}
        {this.renderCellSection('description', provider.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const ProviderRowFragment = createFragmentContainer(ProviderRow, {
  provider: graphql`
    fragment ProviderRow_provider on Provider {
      id
      name
      description
      url
    }
  `,
});

export default ProviderRowFragment;
