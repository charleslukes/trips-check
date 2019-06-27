import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard';
import Trips from './trips';
import DriverDetails from './driverD';

const Main = () => (
  <Switch>
    <Route exact path="/" component={DashBoard} />
    <Route path="/trips" component={Trips} />
    <Route path="/driverD" component={DriverDetails} />
  </Switch>
);

export default Main;
