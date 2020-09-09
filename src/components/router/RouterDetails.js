import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import RouterUpdateFormContainer from '../../containers/router/RouterUpdateForm';
import DeleteRouterMutation from '../../mutations/router/DeleteRouterMutation';
import RouterDetailsQuery from '../../queries/router/RouterDetailsQuery';

class RouterDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'routerId';
  UpdateFormContainer = RouterUpdateFormContainer;
  DetailsQuery = RouterDetailsQuery;
  entityNameProp = 'router';
  entityGetDetailsMethodName = 'getRouterById';
  classDetails = 'router-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/routers`);
    };
    DeleteRouterMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default RouterDetails;
