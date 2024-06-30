import React from 'react';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import { SpeedInsights } from '@vercel/speed-insights/react'; // Import SpeedInsights component

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <SpeedInsights> {/* Include SpeedInsights component */}
          <Router />
          <ToastContainer />
        </SpeedInsights>
      </Provider>
    </div>
  );
};

export default App;
