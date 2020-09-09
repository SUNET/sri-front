import { connect } from 'react-redux';

import OpticalNodeList from '../../components/opticalNode/OpticalNodeList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.opticalNode;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const OpticalNodeListContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalNodeList);

export default OpticalNodeListContainer;
