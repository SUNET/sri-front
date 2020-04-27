import React from 'react';
import { mount, shallow } from 'enzyme';
import { RangeDayPicker } from '../../components/RangeDayPicker';
import toJson from 'enzyme-to-json';

let RangeDayPickerWrapper;
let RangeDayPickerComponent;
let RangeDayPickerComponentInstance;

const defaultProps = {
  dateTo: jest.fn(),
  dateFrom: jest.fn(),
  resetDate: jest.fn(),
  t: jest.fn((t) => t),
};

const CreateRangeDayPickerWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <RangeDayPicker {...allProps} />
    </div>
  );
};

const mountRangeDayPickerWrapper = (props) => mount(<CreateRangeDayPickerWrapper {...props} />);

const getDatePickerElements = (className) => {
  return {
    wrapper: RangeDayPickerComponent.find(className),
    label: RangeDayPickerComponent.find(className).find('label'),
    rangeDayPicker: RangeDayPickerComponent.find(className).find('DayPickerInput'),
  };
};
beforeEach(() => {
  jest.clearAllMocks();
  RangeDayPickerWrapper = mountRangeDayPickerWrapper();
  RangeDayPickerComponent = RangeDayPickerWrapper.find('RangeDayPicker');
  RangeDayPickerComponentInstance = RangeDayPickerComponent.instance();
  RangeDayPickerComponentInstance.showFromMonth = jest.fn();
});
afterEach(() => {
  RangeDayPickerWrapper.unmount();
});

describe('RangeDayPicker Component', () => {
  it('Renders correctly', () => {
    expect(toJson(RangeDayPickerWrapper)).toMatchSnapshot();
    expect(RangeDayPickerComponent.find('.range-day-picker')).toHaveLength(1);
  });
});

describe('Elements', () => {
  it('DateRange for From date', () => {
    const pickerElements = getDatePickerElements('.input-from-to--from');
    expect(pickerElements.wrapper).toHaveLength(1);
    expect(pickerElements.label).toHaveLength(1);
    expect(pickerElements.label.text()).toBe('filter.daypicker.from');
    expect(pickerElements.rangeDayPicker).toHaveLength(1);
  });
  it('DateRange for To date', () => {
    const pickerElements = getDatePickerElements('.input-from-to--to');
    expect(pickerElements.wrapper).toHaveLength(1);
    expect(pickerElements.label).toHaveLength(1);
    expect(pickerElements.label.text()).toBe('filter.daypicker.to');
    expect(pickerElements.rangeDayPicker).toHaveLength(1);
  });
  it('Reset Dates Button', () => {
    const resetButton = RangeDayPickerComponent.find('[data-action="reset"]');
    expect(resetButton.type()).toBe('button');
    expect(resetButton.text()).toBe('filter.date.clear');
  });
});

describe('Add Events', () => {
  it('Add a date in from input', () => {
    const pickerElements = getDatePickerElements('.input-from-to--from');
    const input = pickerElements.rangeDayPicker.find('input');
    input.simulate('change', { target: { value: '30/05/20' } });
    expect(RangeDayPickerComponent.state().from.toString()).toBe('Sat May 30 2020 00:00:00 GMT+0200 (GMT+02:00)');
    expect(defaultProps.dateFrom.mock.calls[0][0].toString()).toBe('Sat May 30 2020 00:00:00 GMT+0200 (GMT+02:00)');
  });
  it('Add a date in to input ', () => {
    const pickerElementsTo = getDatePickerElements('.input-from-to--to');
    const inputTo = pickerElementsTo.rangeDayPicker.find('input');
    inputTo.simulate('change', { target: { value: '30/05/20' } });
    expect(defaultProps.dateTo.mock.calls[0][0].toString()).toBe('Sat May 30 2020 00:00:00 GMT+0200 (GMT+02:00)');
  });
  it('Filled from and to inputs', () => {
    const pickerElementsTo = getDatePickerElements('.input-from-to--to');
    const pickerElements = getDatePickerElements('.input-from-to--from');
    const inputTo = pickerElementsTo.rangeDayPicker.find('input');
    const inputFrom = pickerElements.rangeDayPicker.find('input');
    inputFrom.simulate('change', { target: { value: '29/05/20' } });
    inputTo.simulate('change', { target: { value: '30/05/20' } });
    expect(defaultProps.dateFrom.mock.calls[0][0].toString()).toBe('Fri May 29 2020 00:00:00 GMT+0200 (GMT+02:00)');
    expect(defaultProps.dateTo.mock.calls[0][0].toString()).toBe('Sat May 30 2020 00:00:00 GMT+0200 (GMT+02:00)');
    expect(RangeDayPickerComponentInstance.showFromMonth.mock.calls).toHaveLength(1);
  });

  it('Click in reset dates ', () => {
    RangeDayPickerComponentInstance.setState = jest.fn();
    RangeDayPickerComponentInstance.toRef.current.setState = jest.fn();
    RangeDayPickerComponentInstance.fromRef.current.setState = jest.fn();
    const resetButton = RangeDayPickerComponent.find('[data-action="reset"]');
    resetButton.simulate('click');
    expect(defaultProps.resetDate.mock.calls[0][0]).toBeUndefined();
    expect(defaultProps.resetDate.mock.calls[0][1]).toBeUndefined();
    expect(RangeDayPickerComponentInstance.setState.mock.calls[0][0]).toEqual({ from: undefined, to: undefined });
    expect(RangeDayPickerComponentInstance.fromRef.current.setState.mock.calls[0][0]).toEqual({
      value: '',
      typedValue: '',
    });
    expect(RangeDayPickerComponentInstance.toRef.current.setState.mock.calls[0][0]).toEqual({
      value: '',
      typedValue: '',
    });
  });
});
