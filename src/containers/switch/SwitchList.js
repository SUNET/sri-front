import { connect } from 'react-redux';

import SwitchList from '../../components/switch/SwitchList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.switch;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const SwitchListContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchList);

export default SwitchListContainer;
