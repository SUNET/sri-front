import { connect } from 'react-redux';

import ExternalEquipmentList from '../../components/externalEquipment/ExternalEquipmentList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.externalEquipment;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const ExternalEquipmentListContainer = connect(mapStateToProps, mapDispatchToProps)(ExternalEquipmentList);

export default ExternalEquipmentListContainer;
