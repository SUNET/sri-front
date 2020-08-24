import { connect } from 'react-redux';

import OpticalLinkList from '../../components/opticalLink/OpticalLinkList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.opticalLink;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const OpticalLinkListContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalLinkList);

export default OpticalLinkListContainer;
