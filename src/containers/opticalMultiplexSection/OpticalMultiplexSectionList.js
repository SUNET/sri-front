import { connect } from 'react-redux';

import OpticalMultiplexSectionList from '../../components/opticalMultiplexSection/OpticalMultiplexSectionList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.opticalMultiplexSection;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const OpticalMultiplexSectionListContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalMultiplexSectionList);

export default OpticalMultiplexSectionListContainer;
