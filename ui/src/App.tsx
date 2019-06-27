import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import AsyncComponent from './components/AsyncComponent';
import store from './store/store';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const CarsListingPage = AsyncComponent(() => import("./containers/CarsListingPage"));
const CarProductPage = AsyncComponent(() => import("./containers/CarProductPage"));
const ErrorPage = AsyncComponent(() => import("./components/ErrorPage"));

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CarsListingPage}/>
        <Route path="/product/:id" component={CarProductPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
