import { connect } from 'react-redux';
import CreateExternalEquipmentForm from '../../components/externalEquipment/CreateExternalEquipmentForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'externalEquipment';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateExternalEquipmentFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateExternalEquipmentForm);

export default CreateExternalEquipmentFormContainer;
