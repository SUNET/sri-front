import { connect } from 'react-redux';
import ExternalEquipmentUpdateForm from '../../components/externalEquipment/ExternalEquipmentUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'externalEquipment';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const ExternalEquipmentUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ExternalEquipmentUpdateForm);

export default ExternalEquipmentUpdateFormContainer;
