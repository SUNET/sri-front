import { connect } from 'react-redux';

import __EntityClassName__List from '../../components/__entityName__/__EntityClassName__List';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.__entityName__;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const __EntityClassName__ListContainer = connect(mapStateToProps, mapDispatchToProps)(__EntityClassName__List);

export default __EntityClassName__ListContainer;
