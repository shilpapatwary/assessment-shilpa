import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import  CarsListingPage  from './components/CarsListingPage';
import store from './store/store';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CarProductPage from './components/CarProductPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CarsListingPage}/>
        <Route exact path="/product/:id" component={CarProductPage}/>
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
