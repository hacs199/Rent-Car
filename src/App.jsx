import React from 'react';
import { CarProvider } from './components/CarContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarSearchForm from './components/CarSearchForm';
import CarList from './components/CarList';
import RentalForm from './components/RentalForm';
import RentedCarInfo from './components/RentedCarInfo';

const App = () => {
  return (
    <CarProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <CarSearchForm />
          </Route>
          <Route path="/available">
            <CarList />
          </Route>
          <Route path="/rented">
            <RentalForm />
          </Route>
          <Route path="/rentedCarInfo">
            <RentedCarInfo />
          </Route>
        </Switch>
      </Router>
    </CarProvider>
  );
};

export default App;
