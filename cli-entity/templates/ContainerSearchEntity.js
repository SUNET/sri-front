import { connect } from 'react-redux';
import Search__EntityClassName__ from '../../components/__entityName__/Search__EntityClassName__';
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

const Search__EntityClassName__Container = connect(mapStateToProps, mapDispatchToProps)(Search__EntityClassName__);

export default Search__EntityClassName__Container;
