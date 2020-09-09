import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import OpticalNodeUpdateFormContainer from '../../containers/opticalNode/OpticalNodeUpdateForm';
import DeleteOpticalNodeMutation from '../../mutations/opticalNode/DeleteOpticalNodeMutation';
import OpticalNodeDetailsQuery from '../../queries/opticalNode/OpticalNodeDetailsQuery';

class OpticalNodeDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'opticalNodeId';
  UpdateFormContainer = OpticalNodeUpdateFormContainer;
  DetailsQuery = OpticalNodeDetailsQuery;
  entityNameProp = 'opticalNode';
  entityGetDetailsMethodName = 'getOpticalNodeById';
  classDetails = 'opticalNode-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/opticalNodes`);
    };
    DeleteOpticalNodeMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default OpticalNodeDetails;
