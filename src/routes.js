import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Networks from './containers/Networks';
import Stations from './containers/Stations';
import { routePaths } from './settings';

export default (
  <div className="flex-container">
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routePaths.home}
        >
          <Networks />
        </Route>

        <Route
          exact
          path="/stations/:id" render={props => (
            <Stations
              id={props.match.params.id}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  </div>
);
