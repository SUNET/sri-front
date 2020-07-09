import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import __EntityClassName__UpdateFormContainer from '../../containers/__entityName__/__EntityClassName__UpdateForm';
import Delete__EntityClassName__Mutation from '../../mutations/__entityName__/Delete__EntityClassName__Mutation';
import __EntityClassName__DetailsQuery from '../../queries/__entityName__/__EntityClassName__DetailsQuery';

class __EntityClassName__Details extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = '__entityName__Id';
  UpdateFormContainer = __EntityClassName__UpdateFormContainer;
  DetailsQuery = __EntityClassName__DetailsQuery;
  entityNameProp = '__entityName__';
  entityGetDetailsMethodName = 'get__EntityClassName__ById';
  classDetails = '__entityName__-details';

  handleDelete = () => {
    Delete__EntityClassName__Mutation(this.getId(), () => this.props.history.push(`/__entityBlock__/__entityName__s`));
  };
}

export default __EntityClassName__Details;
