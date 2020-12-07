import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import SiteOwnerUpdateFormContainer from '../../containers/siteOwner/SiteOwnerUpdateForm';
import DeleteSiteOwnerMutation from '../../mutations/siteOwner/DeleteSiteOwnerMutation';
import SiteOwnerDetailsQuery from '../../queries/siteOwner/SiteOwnerDetailsQuery';

class SiteOwnerDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'siteOwnerId';
  UpdateFormContainer = SiteOwnerUpdateFormContainer;
  DetailsQuery = SiteOwnerDetailsQuery;
  entityNameProp = 'siteOwner';
  entityGetDetailsMethodName = 'getSiteOwnerById';
  classDetails = 'siteOwner-details';

  handleDelete = () => {
    DeleteSiteOwnerMutation(this.getId(), () => this.props.history.push(`/network/site-owners`));
  };
}

export default SiteOwnerDetails;
