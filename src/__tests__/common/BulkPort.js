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
});
afterEach(() => {
  BulkPortWrapper.unmount();
});

describe('BulkPort Component', () => {
  it('Renders correctly', () => {
    expect(toJson(BulkPortWrapper)).toMatchSnapshot();
  });
});
