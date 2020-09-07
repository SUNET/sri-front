import { connect } from 'react-redux';
import SearchOpticalPath from '../../components/opticalPath/SearchOpticalPath';
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

const SearchOpticalPathContainer = connect(mapStateToProps, mapDispatchToProps)(SearchOpticalPath);

export default SearchOpticalPathContainer;
