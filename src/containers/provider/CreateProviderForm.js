import { connect } from 'react-redux';
import CreateProviderForm from '../../components/provider/CreateProviderForm';
import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'provider';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateProviderFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProviderForm);

export default CreateProviderFormContainer;
