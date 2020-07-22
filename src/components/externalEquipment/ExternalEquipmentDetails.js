import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import ExternalEquipmentUpdateFormContainer from '../../containers/externalEquipment/ExternalEquipmentUpdateForm';
import DeleteExternalEquipmentMutation from '../../mutations/externalEquipment/DeleteExternalEquipmentMutation';
import ExternalEquipmentDetailsQuery from '../../queries/externalEquipment/ExternalEquipmentDetailsQuery';

class ExternalEquipmentDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'externalEquipmentId';
  UpdateFormContainer = ExternalEquipmentUpdateFormContainer;
  DetailsQuery = ExternalEquipmentDetailsQuery;
  entityNameProp = 'externalEquipment';
  entityGetDetailsMethodName = 'getExternalEquipmentById';
  classDetails = 'externalEquipment-details';

  handleDelete = () => {
    DeleteExternalEquipmentMutation(this.getId(), () => this.props.history.push(`/network/external-equipments`));
  };
}

export default ExternalEquipmentDetails;
