import { connect } from 'react-redux';

import PeeringGroupList from '../../components/peeringGroup/PeeringGroupList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.peeringGroup;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const PeeringGroupListContainer = connect(mapStateToProps, mapDispatchToProps)(PeeringGroupList);

export default PeeringGroupListContainer;
