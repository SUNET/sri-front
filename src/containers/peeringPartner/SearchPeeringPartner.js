import { connect } from 'react-redux';
import SearchPeeringPartner from '../../components/peeringPartner/SearchPeeringPartner';
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

const SearchPeeringPartnerContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPeeringPartner);

export default SearchPeeringPartnerContainer;
