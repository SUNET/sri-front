import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { CreateContactForm } from '../../../components/contact/CreateContactForm';
// import ValidationsContactForm from '../../../components/contact/ValidationsContactForm';

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
  form: 'createContact',
};

beforeEach(() => {
  const initialValues = { name: '' };
  const handleSubmit = jest.fn();
  store = createStore(rootReducer);
  wrapper = mount(
    <Provider store={store}>
      <CreateContactForm handleSubmit={handleSubmit} initialValues={initialValues} {...defaultProps} />
    </Provider>,
  );
});

afterEach(() => {});
describe('CreateContact Form Component', () => {
  it('Render Form Component', () => {
    const form = wrapper.find('#create-contact-form');
    expect(form.length).toBe(1);
  });
  it('Render Save and Cancel CTAs', () => {
    const saveCancelCTAs = wrapper.find('.save-cancel-ctas');
    expect(saveCancelCTAs.length).toBe(2);
  });
  it('Render Form Body', () => {
    const saveCancelCTAs = wrapper.find('.create-contact-form');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: WorkLog Block', () => {
    const saveCancelCTAs = wrapper.find('.create-contact-form .model-section.workLog-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: Notes Block', () => {
    const saveCancelCTAs = wrapper.find('.create-contact-form .model-section.notes-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: General Info Block', () => {
    const saveCancelCTAs = wrapper.find('.create-contact-form .model-section.general-info-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: Professional Details Block', () => {
    const saveCancelCTAs = wrapper.find('.create-contact-form .model-section.professional-details-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
});
