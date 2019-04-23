import React from 'react';
import ReactDOM from 'react-dom';
import mock from 'jest-mock';
import { Provider } from 'react-redux';

import App from '../components/App';


const fakeStore = (state) => ({
      default: () => {},
      dispatch: mock.fn(),
      subscribe: mock.fn(),
      getState: () => ({ ...state })
});

const fakeState = {
    app: {
      is_app_loaded: false
  }
}

const store = fakeStore(fakeState);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = (
				<Provider store={store}>
          <App />
        </Provider>);

    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
});
