import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import ODFUpdateFormContainer from '../../containers/ODF/ODFUpdateForm';
import DeleteODFMutation from '../../mutations/ODF/DeleteODFMutation';
import ODFDetailsQuery from '../../queries/ODF/ODFDetailsQuery';

class ODFDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'ODFId';
  UpdateFormContainer = ODFUpdateFormContainer;
  DetailsQuery = ODFDetailsQuery;
  entityNameProp = 'ODF';
  entityGetDetailsMethodName = 'getODFById';
  classDetails = 'ODF-details';

  handleDelete = () => {
    DeleteODFMutation(this.getId(), () => this.props.history.push(`/network/odfs`));
  };
}

export default ODFDetails;
