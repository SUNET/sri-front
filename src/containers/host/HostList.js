import { connect } from 'react-redux';

import HostList from '../../components/host/HostList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.host;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const HostListContainer = connect(mapStateToProps, mapDispatchToProps)(HostList);

export default HostListContainer;
