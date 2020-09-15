import { connect } from 'react-redux';
import PeeringPartnerUpdateForm from '../../components/peeringPartner/PeeringPartnerUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'peeringPartner';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const PeeringPartnerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(PeeringPartnerUpdateForm);

export default PeeringPartnerUpdateFormContainer;
