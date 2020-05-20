import React from 'react';
import { mount } from 'enzyme';
import { Filter } from '../../components/Filter';
import toJson from 'enzyme-to-json';

let FilterWrapper;
let FilterComponent;
let FilterComponentInstance;
let InputElement;

const defaultProps = {
  changeFilter: jest.fn(),
  t: jest.fn((t) => t),
};

const CreateFilterWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <Filter {...allProps} />
    </div>
  );
};

const mountFilterWrapper = (props) => mount(<CreateFilterWrapper {...props} />);
beforeEach(() => {
  jest.clearAllMocks();
  FilterWrapper = mountFilterWrapper();
  FilterComponent = FilterWrapper.find('Filter');
  FilterComponentInstance = FilterComponent.instance();
  FilterComponentInstance.changeFilterDebounce = FilterComponentInstance.changeFilter;
  InputElement = FilterComponent.find('input');
});
afterEach(() => {
  FilterWrapper.unmount();
});

describe('Filter Component', () => {
  it('Renders correctly', () => {
    expect(toJson(FilterWrapper)).toMatchSnapshot();
    expect(FilterComponent.find('.filter')).toHaveLength(1);
  });
});
describe('Filter Elements', () => {
  it('Remove text icon: No appears when input is clean', () => {
    expect(FilterComponent.state().filterValue).toBe('');
    expect(FilterWrapper.find('.clear-input-cta')).toHaveLength(0);
  });
  it('Remove text icon: Appears when input is filled', () => {
    InputElement.simulate('change', { target: { value: 'new search' } });
    expect(FilterComponent.state().filterValue).toBe('new search');
    expect(FilterWrapper.find('.clear-input-cta')).toHaveLength(1);
  });
});
describe('Clear Input', () => {
  it('The input is cleared when the X is pressed when there is written text', () => {
    InputElement.simulate('change', { target: { value: 'text to be deleted' } });
    const cleanCTA = FilterWrapper.find('.clear-input-cta');
    expect(FilterComponent.state().filterValue).toBe('text to be deleted');
    cleanCTA.simulate('click');
    expect(FilterComponent.state().filterValue).toBe('');
    expect(FilterWrapper.find('.clear-input-cta')).toHaveLength(0);
  });
});
describe('The search method is called', () => {
  it('When you write in the input, the props search method is called', () => {
    InputElement.simulate('change', { target: { value: 'text to search' } });
    expect(defaultProps.changeFilter).toHaveBeenCalledWith('text to search');
    expect(defaultProps.changeFilter).toHaveBeenCalledTimes(1);
  });
});
