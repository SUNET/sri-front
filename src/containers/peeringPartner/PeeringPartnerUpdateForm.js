import { connect } from 'react-redux';
import PeeringPartnerUpdateForm from '../../components/peeringPartner/PeeringPartnerUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'peeringPartner';

const mapStateToProps = (state, props) => {
  const { peeringPartner } = props;
  const { uses } = peeringPartner;
  const resourcedUsed = uses.map((pGroup) => {
    const unit = pGroup.dependencies.find((dep) => dep.ip_address === pGroup.ip_address);
    const port = unit.part_of;
    const router = port?.parent && port?.parent.length ? port.parent.find((par) => par.__typename === 'Router') : [];
    return {
      ip_address: pGroup.ip_address,
      peeringGroup: pGroup.name,
      id: pGroup.id,
      __typename: pGroup.__typename,
      interfaceNetwork: pGroup.ip_address,
      unit: unit.name,
      pic: port.name,
      router: router?.name,
    };
  });
  const peeringPartnerWithResourcedUsed = { ...peeringPartner, ...{ resourcedUsed } };
  const mappedStateToProps = getUpdateProps(
    ENTITY_NAME,
    { ...props, peeringPartner: peeringPartnerWithResourcedUsed },
    state,
  );
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const PeeringPartnerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(PeeringPartnerUpdateForm);

export default PeeringPartnerUpdateFormContainer;
