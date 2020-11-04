import { connect } from 'react-redux';
import CreateServiceForm from '../../components/service/CreateServiceForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'service';

const mapStateToProps = (state, props) => {
  const { currentClass } = props;
  const servicePropsWithClassType = {
    service: {
      service_type: {
        id: currentClass.id,
        name: currentClass.originalName,
      },
    },
  };
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, servicePropsWithClassType, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateServiceFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateServiceForm);

export default CreateServiceFormContainer;
