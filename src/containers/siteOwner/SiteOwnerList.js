import { connect } from 'react-redux';

import SiteOwnerList from '../../components/siteOwner/SiteOwnerList';

const mapStateToProps = (state, props) => {
  let { columns_visible, all_columns } = state.filterColumns.siteOwner;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const SiteOwnerListContainer = connect(mapStateToProps, mapDispatchToProps)(SiteOwnerList);

export default SiteOwnerListContainer;
