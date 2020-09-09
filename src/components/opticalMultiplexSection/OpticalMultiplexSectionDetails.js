import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import OpticalMultiplexSectionUpdateFormContainer from '../../containers/opticalMultiplexSection/OpticalMultiplexSectionUpdateForm';
import DeleteOpticalMultiplexSectionMutation from '../../mutations/opticalMultiplexSection/DeleteOpticalMultiplexSectionMutation';
import OpticalMultiplexSectionDetailsQuery from '../../queries/opticalMultiplexSection/OpticalMultiplexSectionDetailsQuery';

class OpticalMultiplexSectionDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'opticalMultiplexSectionId';
  UpdateFormContainer = OpticalMultiplexSectionUpdateFormContainer;
  DetailsQuery = OpticalMultiplexSectionDetailsQuery;
  entityNameProp = 'opticalMultiplexSection';
  entityGetDetailsMethodName = 'getOpticalMultiplexSectionById';
  classDetails = 'opticalMultiplexSection-details';

  handleDelete = () => {
    DeleteOpticalMultiplexSectionMutation(this.getId(), () => this.props.history.push(`/network/optical-multiplex-sections`));
  };
}

export default OpticalMultiplexSectionDetails;
