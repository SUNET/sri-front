import { connect } from 'react-redux';
import SearchService from '../../components/service/SearchService';
import { showHideColumn, showAllColumns, cancelFilterColumns } from '../../actions/FilterColumns';

const mapStateToProps = (state, props) => {
  console.log('props: ', props);
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    showHideColumn: (column, visible, model) => dispatch(showHideColumn(column, visible, model)),
    showAllColumns: (columns, model) => dispatch(showAllColumns(columns, model)),
    cancelFilterColumns: (columns, model) => dispatch(cancelFilterColumns(columns, model)),
  };
};

const SearchServiceContainer = connect(mapStateToProps, mapDispatchToProps)(SearchService);

export default SearchServiceContainer;
