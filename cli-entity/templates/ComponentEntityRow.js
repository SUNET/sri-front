import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class __EntityClassName__Row extends React.PureComponent {
  static propTypes = {
    __entityName__: PropTypes.object.isRequired,
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
    let __entityName__ = this.props.__entityName__;
    return (
      <tr onClick={(e) => this.props.onClick(e, __entityName__)}>
        {this.renderCellSection('name', __entityName__.name)}
        {this.renderCellSection('description', __entityName__.description)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const __EntityClassName__RowFragment = createFragmentContainer(__EntityClassName__Row, {
  __entityName__: graphql`
    fragment __EntityClassName__Row___entityName__ on __EntityClassName__ {
      id
      name
      description
    }
  `,
});

export default __EntityClassName__RowFragment;
