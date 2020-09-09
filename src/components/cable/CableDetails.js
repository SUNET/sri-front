import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import CableUpdateFormContainer from '../../containers/cable/CableUpdateForm';
import DeleteCableMutation from '../../mutations/cable/DeleteCableMutation';
import CableDetailsQuery from '../../queries/cable/CableDetailsQuery';

class CableDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'cableId';
  UpdateFormContainer = CableUpdateFormContainer;
  DetailsQuery = CableDetailsQuery;
  entityNameProp = 'cable';
  entityGetDetailsMethodName = 'getCableById';
  classDetails = 'cable-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/cables`);
    };
    DeleteCableMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default CableDetails;
