import React from 'react';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Provider store={store}>
          <Router />
          <ToastContainer />
      </Provider>
    </div>
  );
};

export default App;
