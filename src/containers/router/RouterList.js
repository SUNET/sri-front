import { connect } from 'react-redux';

import RouterList from '../../components/router/RouterList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.router;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const RouterListContainer = connect(mapStateToProps, mapDispatchToProps)(RouterList);

export default RouterListContainer;
