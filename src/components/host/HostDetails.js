import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import HostUpdateFormContainer from '../../containers/host/HostUpdateForm';
import DeleteHostMutation from '../../mutations/host/DeleteHostMutation';
import HostDetailsQuery from '../../queries/host/HostDetailsQuery';

class HostDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'hostId';
  UpdateFormContainer = HostUpdateFormContainer;
  DetailsQuery = HostDetailsQuery;
  entityNameProp = 'host';
  entityGetDetailsMethodName = 'getHostById';
  classDetails = 'host-details';

  handleDelete = () => {
    DeleteHostMutation(this.getId(), () => this.props.history.push(`/network/hosts`));
  };
}

export default HostDetails;
