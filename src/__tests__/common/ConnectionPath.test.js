import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConnectionPath from '../../components/common/ConnectionPath';

let ConnectionPathWrapper;
let ConnectionPathComponent;
let InputElement;

const defaultProps = {
  changeConnectionPath: jest.fn(),
  t: jest.fn((t) => t),
  blocks: [
        {
            id: 'fake-id1',
            name: 'test1450',
            connectionType: 'C13 / C14',
            path: '/network/routers/fake-id1',
            portName: '14500',
            portPath: '/network/ports/UG9ydDo3MDE1',
            currentElement: true,
        },
        {
            id: 'fake-id2',
            name: '14400-14500',
            connectionType: 'Dark Fiber',
            path: '/network/cables/fake-id2',
        },
        {
            id: 'fake-id3',
            name: 'test1440',
            connectionType: 'C13 / C14',
            path: '/network/external-equipments/fake-id3',
            portName: '14400',
            portPath: '/network/ports/UG9ydDo3MDEy',
        },
    ]
};

const CreateConnectionPathWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <ConnectionPath {...allProps} />
    </div>
  );
};

const mountConnectionPathWrapper = (props) => mount(<CreateConnectionPathWrapper {...props} />);

beforeEach(() => {
  jest.clearAllMocks();
  ConnectionPathWrapper = mountConnectionPathWrapper();
  ConnectionPathComponent = ConnectionPathWrapper.find('ConnectionPath');
  InputElement = ConnectionPathComponent.find('input');
});
afterEach(() => {
  ConnectionPathWrapper.unmount();
});

describe('Filter Component', () => {
  it('Renders correctly', () => {
    expect(toJson(ConnectionPathWrapper)).toMatchSnapshot();
    expect(ConnectionPathComponent.find('.connection-path')).toHaveLength(1);
  });
});
