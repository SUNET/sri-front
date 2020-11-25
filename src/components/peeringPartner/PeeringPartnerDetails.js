import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import PeeringPartnerUpdateFormContainer from '../../containers/peeringPartner/PeeringPartnerUpdateForm';
import DeletePeeringPartnerMutation from '../../mutations/peeringPartner/DeletePeeringPartnerMutation';
import PeeringPartnerDetailsQuery from '../../queries/peeringPartner/PeeringPartnerDetailsQuery';

class PeeringPartnerDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'peeringPartnerId';
  UpdateFormContainer = PeeringPartnerUpdateFormContainer;
  DetailsQuery = PeeringPartnerDetailsQuery;
  entityNameProp = 'peeringPartner';
  entityGetDetailsMethodName = 'getPeeringPartnerById';
  classDetails = 'peeringPartner-details';

  handleDelete = () => {
    DeletePeeringPartnerMutation(this.getId(), () => this.props.history.push(`/network/peering-partners`));
  };
}

export default PeeringPartnerDetails;
