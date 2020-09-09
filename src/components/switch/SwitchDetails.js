import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import SwitchUpdateFormContainer from '../../containers/switch/SwitchUpdateForm';
import DeleteSwitchMutation from '../../mutations/switch/DeleteSwitchMutation';
import SwitchDetailsQuery from '../../queries/switch/SwitchDetailsQuery';

class SwitchDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'switchId';
  UpdateFormContainer = SwitchUpdateFormContainer;
  DetailsQuery = SwitchDetailsQuery;
  entityNameProp = 'switch';
  entityGetDetailsMethodName = 'getSwitchById';
  classDetails = 'switch-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/switches`);
    };
    DeleteSwitchMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default SwitchDetails;
