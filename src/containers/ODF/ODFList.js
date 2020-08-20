import { connect } from 'react-redux';

import ODFList from '../../components/ODF/ODFList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.odf;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const ODFListContainer = connect(mapStateToProps, mapDispatchToProps)(ODFList);

export default ODFListContainer;
