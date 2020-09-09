import { connect } from 'react-redux';
import SearchOpticalNode from '../../components/opticalNode/SearchOpticalNode';
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

const SearchOpticalNodeContainer = connect(mapStateToProps, mapDispatchToProps)(SearchOpticalNode);

export default SearchOpticalNodeContainer;
