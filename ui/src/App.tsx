import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { CarsListing } from './components/CarsListing';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CarsListing></CarsListing>
    </Provider>
  );
}

export default App;
