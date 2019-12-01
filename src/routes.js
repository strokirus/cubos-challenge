import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './containers/Search';
import Movie from './containers/Movie';
import { routePaths } from './settings';

// TODO: implement multiple path routes
export default (
  <div className="flex-container">
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routePaths.home}
        >
          <Search />
        </Route>

        <Route
          exact
          path="/movie/:id" render={props => (
            <Movie
              id={props.match.params.id}
            />
          )}
        />
        <Route
          exact
          path="/search/:text/:page" render={props => (
            <Search
              query={props.match.params.text || ''}
              page={props.match.params.page || ''}
            />
          )}
        />

      </Switch>
    </BrowserRouter>
  </div>
);
