import { connect } from 'react-redux';

import PeeringPartnerList from '../../components/peeringPartner/PeeringPartnerList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.peeringPartner;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const PeeringPartnerListContainer = connect(mapStateToProps, mapDispatchToProps)(PeeringPartnerList);

export default PeeringPartnerListContainer;
