import React from 'react';
import { shallow, mount } from 'enzyme';
// import configureMockStore from 'redux-mock-store';
import { BrowserRouter, withRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { shape } from 'prop-types';
import { getFormMeta, reduxForm, getFormSyncErrors, formValueSelector, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { CreateGroupFormComponent } from '../../../components/group/CreateGroupForm';
import ValidationsGroupForm from '../../../components/group/ValidationsGroupForm';

jest.unmock('redux-form');
// const mockStore = configureStore();
let CreateGroupForm;
let form;

const historyMock = {
  push: jest.fn(),
  goBack: jest.fn(),
  location: {
    pathname: '/community/groups/create',
  },
  listen: () => {},
};
const mockState = {
  form: {
    createGroup: {
      values: { name: '' },
      initial: { name: '' },
      syncErrors: { name: '* Required!' },
      registeredFields: {
        name: { name: 'name', type: 'Field', count: 1 },
        description: { name: 'description', type: 'Field', count: 1 },
        members: { name: 'members', type: 'FieldArray', count: 1 },
        comment: { name: 'comment', type: 'Field', count: 1 },
      },
    },
  },
};
const updateGroupSelector = formValueSelector('createGroup');
const defaultProps = {
  t: jest.fn(),
  memberValues: undefined,
  fields: getFormMeta('createGroup')(mockState),
  name: updateGroupSelector(mockState, 'name'),
  formSyncErrors: getFormSyncErrors('createGroup')(mockState),
};
const store = createStore(combineReducers({ form: formReducer }));
const Decorated = reduxForm({
  form: 'createGroup',
  validate: ValidationsGroupForm.validate,
  initialValues: {
    name: '',
  },
})(CreateGroupFormComponent);

const CreateGroupFormWrapper = (props) => (
  <Provider store={store}>
    <Router history={historyMock}>
      <Decorated history={historyMock} {...defaultProps} {...props} />
    </Router>
  </Provider>
);

beforeEach(() => {
  CreateGroupForm = mount(<CreateGroupFormWrapper />);
  form = CreateGroupForm.find('#create-group-form');
});
afterEach(() => {
  CreateGroupForm.unmount();
});

describe('Create Group Form Component', () => {
  it('Render Form Component', () => {
    expect(form.length).toBe(1);
  });

  describe('Form Validation', () => {
    it('No error appears when the field is filled: Name', () => {
      // console.log(defaultProps.handleSubmit.mock.calls.length);

      // const spy = jest.spyOn(CreateGroupForm.getElement(), 'handleSubmit');
      const nameFieldContainer = form.find('[data-name="name"]');
      // nameFieldContainer.find('input').simulate('change', { target: { value: '' } });
      form.simulate('submit');
      // CreateGroupForm.update();
      // console.log(nameFieldContainer.find('.w-100.has-error').length);

      // expect(nameFieldContainer.find('.w-100.has-error').length).toBe(1);
    });
    // it('An error appears in the required field: Name', () => {
    // const formElement = CreateGroupForm.find('#create-group-form');
    // formElement.simulate('submit');
    // const nameFieldContainer = CreateGroupForm.find('[data-name="name"]');
    // expect(nameFieldContainer.find('.w-100.has-error').length).toBe(1);
    // });
    // it('', () => {});
    // it('', () => {});
  });
  describe('Actions Buttons', () => {
    it('Click in Back CTA', () => {
      const backCTA = CreateGroupForm.find('[data-action="back"]');
      backCTA.simulate('click');
      expect(historyMock.goBack.mock.calls.length).toBe(1);
    });
    // it('', () => {});
  });
});
