import { connect } from 'react-redux';
import CreateRoomForm from '../../components/room/CreateRoomForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'room';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateRoomFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRoomForm);

export default CreateRoomFormContainer;
