import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import OpticalLinkUpdateFormContainer from '../../containers/opticalLink/OpticalLinkUpdateForm';
import DeleteOpticalLinkMutation from '../../mutations/opticalLink/DeleteOpticalLinkMutation';
import OpticalLinkDetailsQuery from '../../queries/opticalLink/OpticalLinkDetailsQuery';

class OpticalLinkDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'opticalLinkId';
  UpdateFormContainer = OpticalLinkUpdateFormContainer;
  DetailsQuery = OpticalLinkDetailsQuery;
  entityNameProp = 'opticalLink';
  entityGetDetailsMethodName = 'getOpticalLinkById';
  classDetails = 'opticalLink-details';

  handleDelete = () => {
    DeleteOpticalLinkMutation(this.getId(), () => this.props.history.push(`/network/optical-links`));
  };
}

export default OpticalLinkDetails;
