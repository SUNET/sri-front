import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { CreateOrganizationForm } from '../../../components/organization/CreateOrganizationForm';

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
  affiliation: {
    customer: false,
    end_customer: false,
    host_user: false,
    partner: false,
    provider: false,
    site_owner: false,
  },
};

beforeEach(() => {
  const initialValues = { affiliation: false };
  const handleSubmit = jest.fn();
  store = createStore(rootReducer);
  wrapper = mount(
    <Provider store={store}>
      <CreateOrganizationForm handleSubmit={handleSubmit} initialValues={initialValues} {...defaultProps} />
    </Provider>,
  );
});

afterEach(() => {});
describe('CreateOrganization Form Component', () => {
  it('Render Form Component', () => {
    const form = wrapper.find('#create-organization-form');
    expect(form.length).toBe(1);
  });
  it('Render Save and Cancel CTAs', () => {
    const saveCancelCTAs = wrapper.find('.save-cancel-ctas');
    expect(saveCancelCTAs.length).toBe(2);
  });
  it('Render Form Body', () => {
    const saveCancelCTAs = wrapper.find('.create-organization-form');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: WorkLog Block', () => {
    const saveCancelCTAs = wrapper.find('.create-organization-form .model-section.workLog-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: Description Block', () => {
    const saveCancelCTAs = wrapper.find('.create-organization-form .model-section.description-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: Contacts Block', () => {
    const saveCancelCTAs = wrapper.find('.create-organization-form .model-section.contacts-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: General Info Block', () => {
    const saveCancelCTAs = wrapper.find('.create-organization-form .model-section.general-info-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
  it('Render Form: Address Block', () => {
    const saveCancelCTAs = wrapper.find('.create-organization-form .model-section.address-block');
    expect(saveCancelCTAs.length).toBe(1);
  });
});
