import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import FirewallUpdateFormContainer from '../../containers/firewall/FirewallUpdateForm';
import DeleteFirewallMutation from '../../mutations/firewall/DeleteFirewallMutation';
import FirewallDetailsQuery from '../../queries/firewall/FirewallDetailsQuery';

class FirewallDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'firewallId';
  UpdateFormContainer = FirewallUpdateFormContainer;
  DetailsQuery = FirewallDetailsQuery;
  entityNameProp = 'firewall';
  entityGetDetailsMethodName = 'getFirewallById';
  classDetails = 'firewall-details';

  handleDelete = () => {
    const { history, isFromModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/firewalls`);
    };
    DeleteFirewallMutation(idEntity, isFromModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };
}

export default FirewallDetails;
