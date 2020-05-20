import { connect } from 'react-redux';
import Breadcrumbs from '../components/Breadcrumbs';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, props) => {
  return {
    isDetailsEntity: state.breadcrumbs.isDetailsEntity,
    entityDetails: state.breadcrumbs.entityDetails,
    history: props.history,
  };
};

export const BreadcrumbsContainer = connect(mapStateToProps)(Breadcrumbs);

export default withRouter(BreadcrumbsContainer);
