import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import UnitUpdateFormContainer from '../../containers/unit/UnitUpdateForm';
import UnitDetailsQuery from '../../queries/unit/UnitDetailsQuery';

class UnitDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'unitId';
  UpdateFormContainer = UnitUpdateFormContainer;
  DetailsQuery = UnitDetailsQuery;
  entityNameProp = 'unit';
  entityGetDetailsMethodName = 'getUnitById';
  classDetails = 'unit-details';

  handleDelete = () => {
    return null;
  };
}

export default UnitDetails;
