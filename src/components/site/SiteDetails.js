import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import SiteUpdateFormContainer from '../../containers/site/SiteUpdateForm';
import DeleteSiteMutation from '../../mutations/site/DeleteSiteMutation';
import SiteDetailsQuery from '../../queries/site/SiteDetailsQuery';

class SiteDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'siteId';
  UpdateFormContainer = SiteUpdateFormContainer;
  DetailsQuery = SiteDetailsQuery;
  entityNameProp = 'site';
  entityGetDetailsMethodName = 'getSiteById';
  classDetails = 'site-details';

  handleDelete = () => {
    DeleteSiteMutation(this.getId(), () =>
      this.props.history.push('/network/location-sites'),
    );
  };
}

export default SiteDetails;
