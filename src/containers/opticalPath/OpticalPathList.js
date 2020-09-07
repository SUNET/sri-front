import { connect } from 'react-redux';

import OpticalPathList from '../../components/opticalPath/OpticalPathList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.opticalPath;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const OpticalPathListContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalPathList);

export default OpticalPathListContainer;
