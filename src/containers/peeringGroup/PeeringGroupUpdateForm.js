import { connect } from 'react-redux';
import PeeringGroupUpdateForm from '../../components/peeringGroup/PeeringGroupUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'peeringGroup';

const mapStateToProps = (state, props) => {
  const { peeringGroup } = props;
  const { used_by, dependencies } = peeringGroup;
  const resourcedUsed = dependencies.map((dep) => {
    const dataUsedBy = used_by.filter((user) => user.ip_address === dep.ip_address);
    const router =
      dep.part_of?.__typename === 'Port' && dep.part_of?.parent && dep.part_of?.parent.length > 0
        ? dep.part_of.parent.find((par) => par.__typename === 'Router')
        : null;
    return {
      router: router ? [router] : null,
      pic: dep.part_of.name,
      unit: dep.name,
      ip_address: dep.ip_address,
      vlan: dep.vlan,
      user_address: dataUsedBy ? dataUsedBy.map((user) => user.ip_address).join(', ') : null,
      userName: dataUsedBy ? dataUsedBy.map((user) => user.name).join(', ') : null,
      user: dataUsedBy ? [...dataUsedBy] : null,
      dataUsedBy,
      id: dep ? dep.id : null,
      __typename: dep.__typename,
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
