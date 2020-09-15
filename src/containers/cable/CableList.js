import { connect } from 'react-redux';

import CableList from '../../components/cable/CableList';

const mapStateToProps = (state, props) => {
  let { columns_visible, all_columns } = state.filterColumns.cable;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const CableListContainer = connect(mapStateToProps, mapDispatchToProps)(CableList);

export default CableListContainer;
