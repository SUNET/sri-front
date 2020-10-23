import { connect } from 'react-redux';
import CreateSiteForm from '../../components/site/CreateSiteForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'site';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateSiteFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateSiteForm);

export default CreateSiteFormContainer;
