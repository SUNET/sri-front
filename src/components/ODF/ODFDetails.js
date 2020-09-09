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
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/odfs`);
    };
    DeleteODFMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default ODFDetails;
