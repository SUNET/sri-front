import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { OrderBy } from '../../components/OrderBy';

let OrderByWrapper;
let OrderByComponent;
let InputElement;

const defaultProps = {
  changeOrderBy: jest.fn(),
  t: jest.fn((t) => t),
};

const CreateOrderByWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <OrderBy {...allProps} />
    </div>
  );
};

const mountOrderByWrapper = (props) => mount(<CreateOrderByWrapper {...props} />);

beforeEach(() => {
  jest.clearAllMocks();
  OrderByWrapper = mountOrderByWrapper();
  OrderByComponent = OrderByWrapper.find('OrderBy');
  InputElement = OrderByComponent.find('input');
});
afterEach(() => {
  OrderByWrapper.unmount();
});

describe('Filter Component', () => {
  it('Renders correctly', () => {
    expect(toJson(OrderByWrapper)).toMatchSnapshot();
    expect(OrderByComponent.find('.order-by')).toHaveLength(1);
  });
  describe('Texts', () => {
    it('By default appears "Newest" Text', () => {
      const labelWrapper = OrderByComponent.find('.p-on');
      const labelElement = labelWrapper.find('label');
      expect(labelElement).toHaveLength(1);
      expect(labelElement.text()).toBe('filter.newest-first');
      expect(labelWrapper).toHaveStyleRule('opacity', '1');
      // expect(labelWrapper.styleRule('opacity').toBe('1'));
    });
    it('After first click appears "Newest" Text', () => {
      OrderByComponent.find('input').simulate('change', { target: { checked: true } });
      const labelWrapper = OrderByComponent.find('.p-off');
      const labelElement = labelWrapper.find('label');
      expect(labelElement).toHaveLength(1);
      expect(labelElement.text()).toBe('filter.latest-first');
      expect(labelWrapper.prop('style')).toHaveProperty('opacity', '1');
    });
  });

  describe('Checked Values', () => {
    it('Input unchecked by default', () => {
      expect(InputElement).toHaveLength(1);
      expect(InputElement.getElement().props.checked).toBe(false);
    });
    it('In the first click change order to ASC', () => {
      OrderByComponent.find('input').simulate('change', { target: { checked: true } });
      expect(defaultProps.changeOrderBy).toHaveBeenCalledTimes(1);
      expect(defaultProps.changeOrderBy.mock.calls[0][0]).toBe('handle_id_ASC');
    });
    it('In the second click change order to DESC', () => {
      OrderByComponent.find('input').simulate('change', { target: { checked: true } });
      OrderByComponent.find('input').simulate('change', { target: { checked: false } });
      expect(defaultProps.changeOrderBy).toHaveBeenCalledTimes(2);
      expect(defaultProps.changeOrderBy.mock.calls[1][0]).toBe('handle_id_DESC');
    });
  });
});
