import { connect } from 'react-redux';

import OpticalFilterList from '../../components/opticalFilter/OpticalFilterList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.opticalFilter;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const OpticalFilterListContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalFilterList);

export default OpticalFilterListContainer;
