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
    DeleteOpticalFilterMutation(this.getId(), () => this.props.history.push('/network/optical-filters'));
  };
}

export default OpticalFilterDetails;
