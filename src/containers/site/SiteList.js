import { connect } from 'react-redux';

import SiteList from '../../components/site/SiteList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.site;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const SiteListContainer = connect(mapStateToProps, mapDispatchToProps)(SiteList);

export default SiteListContainer;
