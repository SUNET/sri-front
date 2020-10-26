import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import ServiceUpdateFormContainer from '../../containers/service/ServiceUpdateForm';
import DeleteServiceMutation from '../../mutations/service/DeleteServiceMutation';
import ServiceDetailsQuery from '../../queries/service/ServiceDetailsQuery';

class ServiceDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'serviceId';
  UpdateFormContainer = ServiceUpdateFormContainer;
  DetailsQuery = ServiceDetailsQuery;
  entityNameProp = 'service';
  entityGetDetailsMethodName = 'getServiceById';
  classDetails = 'service-details';

  handleDelete = () => {
    DeleteServiceMutation(this.getId(), () =>
      this.props.history.push('/network/services'),
    );
  };
}

export default ServiceDetails;
