import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import  CarsListingPage  from './components/CarsListingPage';
import store from './store/store';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CarProductPage from './components/CarProductPage';
import ErrorPage from './components/ErrorPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CarsListingPage}/>
        <Route path="/product/:id" component={CarProductPage}/>
        <Route path="/error" component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
