import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import ProviderUpdateFormContainer from '../../containers/provider/ProviderUpdateForm';
import DeleteProviderMutation from '../../mutations/provider/DeleteProviderMutation';
import ProviderDetailsQuery from '../../queries/provider/ProviderDetailsQuery';

class ProviderDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'providerId';
  UpdateFormContainer = ProviderUpdateFormContainer;
  DetailsQuery = ProviderDetailsQuery;
  entityNameProp = 'provider';
  entityGetDetailsMethodName = 'getProviderById';
  classDetails = 'provider-details';

  handleDelete = () => {
    DeleteProviderMutation(this.getId(), () => this.props.history.push(`/network/providers`));
  };
}

export default ProviderDetails;
