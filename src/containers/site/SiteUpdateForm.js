import { connect } from 'react-redux';
import SiteUpdateForm from '../../components/site/SiteUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'site';

const mapStateToProps = (state, props) => {
  // const rooms = has?.filter((el) => el.__typename === 'Room');
  // console.log('rooms: ', rooms);
  const { site } = props;
  const siteWithRoomsAndRacksSeparates = {
    ...site,
    rooms: site.has?.filter((el) => el.__typename === 'Room'),
    racks: site.has?.filter((el) => el.__typename === 'Rack'),
  };
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, { ...props, site: siteWithRoomsAndRacksSeparates }, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const SiteUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(SiteUpdateForm);

export default SiteUpdateFormContainer;
