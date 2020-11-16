import { connect } from 'react-redux';
import PeeringGroupUpdateForm from '../../components/peeringGroup/PeeringGroupUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'peeringGroup';

const mapStateToProps = (state, props) => {
  const { peeringGroup } = props;
  const { used_by, dependencies } = peeringGroup;
  const resourcedUsed = dependencies.map((dep) => {
    console.log('dep: ', dep);
    const dataUsedBy = used_by.filter((user) => user.ip_address === dep.ip_address);
    const router =
      dep.part_of.__typename === 'Port' ? dep.part_of.parent.find((par) => par.__typename === 'Router') : null;
    console.log('router: ', router);
    return {
      router: router ? router.name : null,
      pic: dep.part_of.name,
      unit: dep.name,
      ip_address: dep.ip_address,
      vlan: dep.vlan,
      user_address: dataUsedBy ? dataUsedBy.map((user) => user.ip_address).join(', ') : null,
      userName: dataUsedBy ? dataUsedBy.map((user) => user.name).join(', ') : null,
      dataUsedBy,
    };
  });
  const peeringGroupWithResourcedUsed = { ...peeringGroup, ...{ resourcedUsed } };
  const mappedStateToProps = getUpdateProps(
    ENTITY_NAME,
    { ...props, peeringGroup: peeringGroupWithResourcedUsed },
    state,
  );
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const PeeringGroupUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(PeeringGroupUpdateForm);

export default PeeringGroupUpdateFormContainer;
