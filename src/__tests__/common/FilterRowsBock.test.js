import React from 'react';
import { mount, shallow } from 'enzyme';
import { FilterRowsBlock } from '../../components/FilterRowsBlock';
import toJson from 'enzyme-to-json';
import * as deviceDetect from 'react-device-detect';

let FilterRowBlockWrapper, FilterRowBlockComponent;
jest.mock('react-i18next', () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  },
}));

const defaultProps = {
  handleOnChangeFilter: jest.fn(),
  handleOnChangeOrderBy: jest.fn(),
  filterDateType: 'created', // "created || modified"
  handleDateTo: jest.fn(),
  handleDateFrom: jest.fn(),
  handleResetDate: jest.fn(),
  changeFilterDateType: jest.fn(),
  t: jest.fn((t) => t),
};

const CreateFilterRowBlockWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <FilterRowsBlock {...allProps} />
    </div>
  );
};

const mountFilterRowBlockWrapper = (props) => mount(<CreateFilterRowBlockWrapper {...props} />);
beforeEach(() => {
  FilterRowBlockWrapper = mountFilterRowBlockWrapper();
  FilterRowBlockComponent = FilterRowBlockWrapper.find('FilterRowsBlock');
});
afterEach(() => {
  FilterRowBlockWrapper.unmount();
});

const getDateFilterCriteriaInputs = (checkedNameElement) => {
  const wrapperWithChecked = mountFilterRowBlockWrapper({ filterDateType: checkedNameElement });
  const createdEl = wrapperWithChecked.find('[data-name="filter-date-created"]');
  const updatedEl = wrapperWithChecked.find('[data-name="filter-date-updated"]');
  const inputCreated = createdEl.find('input');
  const inputUpdated = updatedEl.find('input');
  return {
    inputCreated,
    inputUpdated,
  };
};

describe('Filter Row Block Component', () => {
  it('Renders correctly Desktop Version', () => {
    deviceDetect.isBrowser = true;
    deviceDetect.isMobile = false;
    expect(toJson(FilterRowBlockWrapper)).toMatchSnapshot();
    expect(FilterRowBlockWrapper.find('.data-filter-by-date').length).toBe(1);
  });
  it('Renders correctly Mobile Version', () => {
    deviceDetect.isBrowser = false;
    deviceDetect.isMobile = true;
    expect(toJson(FilterRowBlockWrapper)).toMatchSnapshot();
    expect(FilterRowBlockWrapper.find('.data-filter-by-date').length).toBe(1);
  });
  describe('Created or Updated Option', () => {
    let filterDateBlock, createdElement, modifiedElement;
    beforeEach(() => {
      filterDateBlock = FilterRowBlockWrapper.find('.filter-date');
      createdElement = filterDateBlock.children('[data-name="filter-date-created"]');
      modifiedElement = filterDateBlock.children('[data-name="filter-date-updated"]');
    });

    it('Render Created or Updated filter date', () => {
      expect(filterDateBlock.children('.pretty.p-default.p-round')).toHaveLength(2);
    });
    it('Render Created Label', () => {
      const label = createdElement.find('label');
      expect(createdElement).toHaveLength(1);
      expect(label).toHaveLength(1);
      expect(label.text()).toEqual('filter.date.created');
    });
    it('Render Updated Label', () => {
      const label = modifiedElement.find('label');
      expect(modifiedElement).toHaveLength(1);
      expect(label).toHaveLength(1);
      expect(label.text()).toEqual('filter.date.updated');
    });
    it('Created is Checked', () => {
      const { inputCreated, inputUpdated } = getDateFilterCriteriaInputs('created');
      expect(inputCreated.getElement().props.checked).toEqual(true);
      expect(inputUpdated.getElement().props.checked).toEqual(false);
    });
    it('Updated is Checked', () => {
      const { inputCreated, inputUpdated } = getDateFilterCriteriaInputs('updated');
      expect(inputCreated.getElement().props.checked).toEqual(false);
      expect(inputUpdated.getElement().props.checked).toEqual(true);
    });
  });
  describe('Render RangeDayPicker', () => {
    it('Exists element', () => {
      expect(FilterRowBlockComponent.find('RangeDayPicker')).toHaveLength(1);
    });
  });
  describe('Render Filter By Words', () => {
    it('Exists element', () => {
      expect(FilterRowBlockComponent.find('Filter')).toHaveLength(1);
    });
  });
  describe('Render Order By', () => {
    it('Exists element', () => {
      expect(FilterRowBlockComponent.find('OrderBy')).toHaveLength(1);
    });
  });
});
