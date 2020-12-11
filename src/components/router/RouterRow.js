import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class RouterRow extends React.PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
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
    let { router } = this.props;
    return (
      <tr onClick={(e) => this.props.onClick(e, router)}>
        {this.renderCellSection('name', router.name)}
        {this.renderCellSection('model', router.model)}
        {this.renderCellSection('version', router.version)}
        {this.renderCellSection('operational_state', router.operational_state?.name)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const RouterRowFragment = createFragmentContainer(RouterRow, {
  router: graphql`
    fragment RouterRow_router on Router {
      id
      name
      operational_state {
        __typename
        name
        value
      }
      version
      model
    }
  `,
});

export default RouterRowFragment;
