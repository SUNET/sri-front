import { connect } from 'react-redux';
import CreateEndUserForm from '../../components/endUser/CreateEndUserForm';
import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'endUser';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateEndUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEndUserForm);

export default CreateEndUserFormContainer;
