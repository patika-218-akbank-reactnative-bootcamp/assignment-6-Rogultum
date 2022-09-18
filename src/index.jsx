// Redux container should be in another file other than App.jsx because for using theme in App.jsx,
//  App.jsx should also be wrapped in Redux Provider.
import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import { store } from './redux/store';

function AppWrapper() {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
}

export default AppWrapper;
