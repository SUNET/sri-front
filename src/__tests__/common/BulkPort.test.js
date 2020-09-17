import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import BulkPort from '../../components/common/BulkPort';

const mockMath = Object.create(global.Math);
mockMath.random = () => {
  return 1;
};
global.Math = mockMath;

let BulkPortWrapper;
let BulkPortComponent;
let BulkPortComponentInstance;

const defaultProps = {
  t: jest.fn((t) => t),
};

const CreateBulkPortWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <BulkPort {...allProps} />
    </div>
  );
};

const mountComponentWrapper = (props) => mount(<CreateBulkPortWrapper {...props} />);

beforeEach(() => {
  jest.clearAllMocks();
  BulkPortWrapper = mountComponentWrapper();
  BulkPortComponent = BulkPortWrapper.find('BulkPort');
  BulkPortComponentInstance = BulkPortComponent.instance();
});
afterEach(() => {
  BulkPortWrapper.unmount();
});

describe('BulkPort Component', () => {
  it('Renders correctly', () => {
    expect(toJson(BulkPortWrapper)).toMatchSnapshot();
  });
});

describe('Add Events', () => {
  it('Validations Errors appears when click in ADD NEW with inputs empty', () => {
    const addNewButton = BulkPortComponent.find('.bulk-create__right-block__add-button button');
    addNewButton.simulate('click');
    expect(BulkPortComponent.update().find('.bulk-create__type-block .select-input.has-error')).toHaveLength(1);
    expect(BulkPortComponent.update().find('.bulk-create__prefix-block .has-error')).toHaveLength(1);
    expect(BulkPortComponent.update().find('.bulk-create__ports-number-block .has-error')).toHaveLength(1);
  });
  // it('When the fields are correct the list of ports is sent ', () => {
  //   BulkPortComponent.find('.bulk-create__type-block .select-input select').simulate('change', {target: { value: 'CEE' }});
  //   BulkPortComponent.find('.bulk-create__prefix-block input').simulate('change', { target: { value: 'prefix-test-' } });
  //   BulkPortComponent.find('.bulk-create__ports-number-block input').simulate('change', { target: { value: 5 } });
  //   BulkPortComponent.find('.bulk-create__right-block__add-button button').simulate('click');
  //   expect(BulkPortComponent.find('.bulk-create__type-block .select-input select')).toHaveLength(1);
  // });
  it('Filled from and to inputs', () => {
  });

  it('Click in reset dates ', () => {
  });
});
