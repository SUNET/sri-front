import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import OpticalPathUpdateFormContainer from '../../containers/opticalPath/OpticalPathUpdateForm';
import DeleteOpticalPathMutation from '../../mutations/opticalPath/DeleteOpticalPathMutation';
import OpticalPathDetailsQuery from '../../queries/opticalPath/OpticalPathDetailsQuery';

class OpticalPathDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'opticalPathId';
  UpdateFormContainer = OpticalPathUpdateFormContainer;
  DetailsQuery = OpticalPathDetailsQuery;
  entityNameProp = 'opticalPath';
  entityGetDetailsMethodName = 'getOpticalPathById';
  classDetails = 'opticalPath-details';

  handleDelete = () => {
    DeleteOpticalPathMutation(this.getId(), () => this.props.history.push(`/network/opticalPaths`));
  };
}

export default OpticalPathDetails;
