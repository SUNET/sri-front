import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../actions/Notify';
import * as appActions from '../actions/App';

const mapStateToProps = (state, props) => {
  const updateGroupSelector = formValueSelector('profile');

  if (state.app.user) {
    const user_profile = state.app.user;
    const initialValues = {
      name: user_profile.display_name,
      email: user_profile.email,
      landing_page: user_profile.landing_page,
      landing_choices: user_profile.landing_choices,
      network: user_profile.view_network,
      services: user_profile.view_services,
      community: user_profile.view_community,
    };
    return {
      initialValues,
      name: updateGroupSelector(state, 'name'),
      email: updateGroupSelector(state, 'email'),
      landing_page: updateGroupSelector(state, 'landing_page'),
      network: updateGroupSelector(state, 'network'),
      services: updateGroupSelector(state, 'services'),
      community: updateGroupSelector(state, 'community'),
      formSyncErrors: getFormSyncErrors('profile')(state),
      fields: getFormMeta('profile')(state),
      user: state.app.user,
    };
  } else {
    return {};
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateProfile: (newDataProfile) => {
      dispatch(appActions.updateProfile(newDataProfile));
    },
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
