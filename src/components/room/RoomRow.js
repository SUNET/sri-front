import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class RoomRow extends React.PureComponent {
  static propTypes = {
    room: PropTypes.object.isRequired,
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
    let room = this.props.room;
    return (
      <tr onClick={(e) => this.props.onClick(e, room)}>
        {this.renderCellSection('name', room.name)}
        {/* td for generate the space for the final cta */}
        <td></td>
      </tr>
    );
  }
}

const RoomRowFragment = createFragmentContainer(RoomRow, {
  room: graphql`
    fragment RoomRow_room on Room {
      id
      name
    }
  `,
});

export default RoomRowFragment;
