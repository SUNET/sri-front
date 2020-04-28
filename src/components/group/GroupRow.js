import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import '../../style/ModelRow.scss';

export class GroupRow extends React.PureComponent {
  render() {
    const { group, columnsVisible, showAllColumns, onClick } = this.props;
    return (
      <tr onClick={(e) => onClick(e, group)}>
        {(columnsVisible.name || showAllColumns) && <td data-name="name">{group.name}</td>}
        {(columnsVisible.description || showAllColumns) && <td data-name="description">{group.description}</td>}
        {/* td for generate the space for the final cta */}
        <td data-name="empty-for-space" />
      </tr>
    );
  }
}

GroupRow.defaultProps = {};

GroupRow.propTypes = {
  group: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  columnsVisible: PropTypes.objectOf(PropTypes.bool).isRequired,
  showAllColumns: PropTypes.bool.isRequired,
};

const GroupRowFragment = createFragmentContainer(GroupRow, {
  group: graphql`
    fragment GroupRow_group on Group {
      id
      name
      description
    }
  `,
});

export default GroupRowFragment;
