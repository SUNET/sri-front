import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashBoardGeneralSearchBlock from './DashBoardGeneralSearchBlock';
import * as generalSearchActions from '../../actions/GeneralSearch';

const GeneralSearch = ({ environment, filter, history, cleanGeneralSearch }) => (
  <>
    {filter && filter.length > 2 && (
      <DashBoardGeneralSearchBlock
        environment={environment}
        filter={filter}
        onClickDetails={(urlToDetails) => {
          cleanGeneralSearch();
          history.push(urlToDetails);
        }}
      />
    )}
  </>
);

GeneralSearch.defaultProps = {
  filter: '',
  environment: {},
};

GeneralSearch.propTypes = {
  filter: PropTypes.string,
  environment: PropTypes.any,
};

// export default GeneralSearch;

const mapStateToProps = (state, props) => {
  return {
    filter: state.generalSearch.filter,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    cleanGeneralSearch: () => {
      dispatch(generalSearchActions.cleanGeneralSearch());
    },
  };
};

const GeneralSearchContainer = connect(mapStateToProps, mapDispatchToProps)(GeneralSearch);

export default withRouter(GeneralSearchContainer);
