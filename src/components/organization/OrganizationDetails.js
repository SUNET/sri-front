import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import OrganizationUpdateFormContainer from '../../containers/organization/OrganizationUpdateForm';
import DeleteOrganizationMutation from '../../mutations/organization/DeleteOrganizationMutation';
import OrganizationDetailsQuery from '../../queries/organization/OrganizationDetailsQuery';

class OrganizationDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'organizationId';
  UpdateFormContainer = OrganizationUpdateFormContainer;
  DetailsQuery = OrganizationDetailsQuery;
  entityNameProp = 'organization';
  entityGetDetailsMethodName = 'getOrganizationById';
  classDetails = 'organization-details';

  handleDelete = () => {
    DeleteOrganizationMutation(this.getId(), () => this.props.history.push(`/community/organizations`));
  };
}

export default OrganizationDetails;
