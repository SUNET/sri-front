import { connect } from 'react-redux';
import ProviderUpdateForm from '../../components/provider/ProviderUpdateForm';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'provider';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const ProviderUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProviderUpdateForm);

export default ProviderUpdateFormContainer;
