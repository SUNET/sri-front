import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import OpticalFilterUpdateFormContainer from '../../containers/opticalFilter/OpticalFilterUpdateForm';
import DeleteOpticalFilterMutation from '../../mutations/opticalFilter/DeleteOpticalFilterMutation';
import OpticalFilterDetailsQuery from '../../queries/opticalFilter/OpticalFilterDetailsQuery';

class OpticalFilterDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'opticalFilterId';
  UpdateFormContainer = OpticalFilterUpdateFormContainer;
  DetailsQuery = OpticalFilterDetailsQuery;
  entityNameProp = 'opticalFilter';
  entityGetDetailsMethodName = 'getOpticalFilterById';
  classDetails = 'opticalFilter-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/optical-filters`);
    };
    DeleteOpticalFilterMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default OpticalFilterDetails;
