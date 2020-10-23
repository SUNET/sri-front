import { connect } from 'react-redux';

import RackList from '../../components/rack/RackList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.rack;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const RackListContainer = connect(mapStateToProps, mapDispatchToProps)(RackList);

export default RackListContainer;
