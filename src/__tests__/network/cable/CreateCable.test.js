import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { CreateCableForm } from '../../../components/cable/CreateCableForm';

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
  form: 'createCable',
};

beforeEach(() => {
  const initialValues = { affiliation: false };
  const handleSubmit = jest.fn();
  store = createStore(rootReducer);
  wrapper = mount(
    <Provider store={store}>
      <CreateCableForm handleSubmit={handleSubmit} initialValues={initialValues} {...defaultProps} />
    </Provider>,
  );
});

afterEach(() => {});
describe('CreateCableForm Form Component', () => {
  it('Render Form Component', () => {
  const form = wrapper.find('#create-cable-form');
  expect(form.length).toBe(1);
 });
  it('Render Save and Cancel CTAs', () => {
  const saveCancelCTAs = wrapper.find('.save-cancel-ctas');
  expect(saveCancelCTAs.length).toBe(2);
 });
  it('Render Form Body', () => {
  const formBody = wrapper.find('.model-details');
  expect(formBody.length).toBe(1);
 });
  it('Render Form: Description Block', () => {
    const saveCancelCTAs = wrapper.find('.model-section.description-block');
    expect(saveCancelCTAs.length).toBe(1);
 });
 it('Render Form: Gemeral Info Block', () => {
   expect(wrapper.find('.model-section.general-info-block').length).toBe(1);
 });
 it('Render Form: Connections Block', () => {
   expect(wrapper.find('.model-section.connections-block').length).toBe(1);
 });
});
