import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { CarsListingPage } from './components/CarsListingPage';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CarsListingPage></CarsListingPage>
    </Provider>
  );
}

export default App;
