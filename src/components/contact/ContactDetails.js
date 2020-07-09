import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import ContactUpdateFormContainer from '../../containers/contact/ContactUpdateForm';
import DeleteContactMutation from '../../mutations/contact/DeleteContactMutation';
import ContactDetailsQuery from '../../queries/contact/ContactDetailsQuery';

class ContactDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'contactId';
  UpdateFormContainer = ContactUpdateFormContainer;
  DetailsQuery = ContactDetailsQuery;
  entityNameProp = 'contact';
  entityGetDetailsMethodName = 'getContactById';
  classDetails = 'contact-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/community/contacts`);
    };
    DeleteContactMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default ContactDetails;
