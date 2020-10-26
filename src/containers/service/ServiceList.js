import { connect } from 'react-redux';

import ServiceList from '../../components/service/ServiceList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.service;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const ServiceListContainer = connect(mapStateToProps, mapDispatchToProps)(ServiceList);

export default ServiceListContainer;
