import { connect } from 'react-redux';
import SearchOpticalMultiplexSection from '../../components/opticalMultiplexSection/SearchOpticalMultiplexSection';
import { showHideColumn, showAllColumns, cancelFilterColumns } from '../../actions/FilterColumns';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    showHideColumn: (column, visible, model) => dispatch(showHideColumn(column, visible, model)),
    showAllColumns: (columns, model) => dispatch(showAllColumns(columns, model)),
    cancelFilterColumns: (columns, model) => dispatch(cancelFilterColumns(columns, model)),
  };
};

const SearchOpticalMultiplexSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchOpticalMultiplexSection);

export default SearchOpticalMultiplexSectionContainer;
