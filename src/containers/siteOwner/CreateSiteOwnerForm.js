import { connect } from 'react-redux';
import CreateSiteOwnerForm from '../../components/siteOwner/CreateSiteOwnerForm';
import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'siteOwner';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateSiteOwnerFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateSiteOwnerForm);

export default CreateSiteOwnerFormContainer;
