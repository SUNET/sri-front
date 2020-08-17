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
    DeleteRouterMutation(this.getId(), () => this.props.history.push(`/network/routers`));
  };
}

export default RouterDetails;
