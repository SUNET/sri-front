import { connect } from 'react-redux';

import FirewallList from '../../components/firewall/FirewallList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.firewall;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const FirewallListContainer = connect(mapStateToProps, mapDispatchToProps)(FirewallList);

export default FirewallListContainer;
