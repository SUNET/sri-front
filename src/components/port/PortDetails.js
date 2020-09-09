import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import PortUpdateFormContainer from '../../containers/port/PortUpdateForm';
import DeletePortMutation from '../../mutations/port/DeletePortMutation';
import PortDetailsQuery from '../../queries/port/PortDetailsQuery';

class PortDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'portId';
  UpdateFormContainer = PortUpdateFormContainer;
  DetailsQuery = PortDetailsQuery;
  entityNameProp = 'port';
  entityGetDetailsMethodName = 'getPortById';
  classDetails = 'port-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/ports`);
    };
    DeletePortMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default PortDetails;
