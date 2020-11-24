import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import CreateContactRoute from './CreateContactRoute/CreateContactRoute';
import ContactDetailsContainer from '../../containers/contact/ContactDetails';
import ContactListContainer from '../../containers/contact/ContactList';

class SearchContact extends _SearchEntityParentClass {
  LIST_CONTAINER = ContactListContainer;
  CREATE_COMPONENT = CreateContactRoute;
  DETAIL_CONTAINER = ContactDetailsContainer;
  MODEL_NAME = 'contact';

  MODEL_LIST_NAME = ['contacts', 'organization_types', 'roles_default'];

  PATH_ENTITY = '/community/contacts';
  PATH_ENTITY_ID = 'contactId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Organization', value: 'organizations', filter: 'order' },
    { name: 'Roles', value: 'roles', filter: 'order-filter' },
    { name: 'Contact Type', value: 'contact_type', filter: 'order', textFilter: true },
  ];

  LIST_QUERY = graphql`
    query SearchContactsAllQuery($count: Int!, $filter: ContactFilter, $orderBy: ContactOrderBy) {
      ...ContactList_contacts @arguments(count: $count, filter: $filter, orderBy: $orderBy)
      ...ContactList_organization_types
      ...ContactList_roles_default
    }
  `;

  constructor(props) {
    super(props);
    if (isMobile) {
      const visible = true;
      props.showHideColumn('name', visible, this.MODEL_NAME);
    }
  }
}

export default withTranslation()(withRouter(SearchContact));
