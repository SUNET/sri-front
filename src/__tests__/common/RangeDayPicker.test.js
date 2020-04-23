import React from 'react';
import { mount, shallow } from 'enzyme';
import { RangeDayPicker } from '../../components/RangeDayPicker';
import toJson from 'enzyme-to-json';

let RangeDayPickerWrapper;
let RangeDayPickerComponent;
let RangeDayPickerComponentInstance;

const defaultProps = {
  changeRangeDayPicker: jest.fn(),
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
  RangeDayPickerComponentInstance.changeRangeDayPickerDebounce = RangeDayPickerComponentInstance.changeRangeDayPicker;
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
  it('', () => {});
});
