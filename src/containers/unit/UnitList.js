import { connect } from 'react-redux';

import UnitList from '../../components/unit/UnitList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.unit;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const UnitListContainer = connect(mapStateToProps, mapDispatchToProps)(UnitList);

export default UnitListContainer;
