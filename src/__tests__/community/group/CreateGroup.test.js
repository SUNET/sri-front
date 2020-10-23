import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { CreateGroupForm } from '../../../components/group/CreateGroupForm';

jest.unmock('redux-form');

const rootReducer = combineReducers({
  form: formReducer,
});

let store;
let wrapper;

const defaultProps = {
  t: jest.fn(),
  formSyncErrors: {},
  fields: {},
};

beforeEach(() => {
  const initialValues = { name: '' };
  const handleSubmit = jest.fn();
  store = createStore(rootReducer);
  wrapper = mount(
    <Provider store={store}>
      <CreateGroupForm handleSubmit={handleSubmit} initialValues={initialValues} {...defaultProps} />
    </Provider>,
  );
});

afterEach(() => {});
describe('CreateGroup Form Component', () => {
  it('Render Form Component', () => {
    const form = wrapper.find('#create-group-form');
    expect(form.length).toBe(1);
  });
  it('Render Save and Cancel CTAs', () => {
    const saveCancelCTAs = wrapper.find('.save-cancel-ctas');
    expect(saveCancelCTAs.length).toBe(2);
  });
  it('Render Form Body', () => {
    const saveCancelCTAs = wrapper.find('.create-group-form');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: WorkLog Block', () => {
    const saveCancelCTAs = wrapper.find('.create-group-form .model-section.workLog-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: Description Block', () => {
    const saveCancelCTAs = wrapper.find('.create-group-form .model-section.description-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: Contacts Block', () => {
    const saveCancelCTAs = wrapper.find('.create-group-form .model-section.contacts-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
});
