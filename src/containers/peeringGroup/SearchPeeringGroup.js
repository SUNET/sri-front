import { connect } from 'react-redux';
import SearchPeeringGroup from '../../components/peeringGroup/SearchPeeringGroup';
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

const SearchPeeringGroupContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPeeringGroup);

export default SearchPeeringGroupContainer;
