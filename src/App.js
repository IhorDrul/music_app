import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Switch>
      <Route path='/sign-in'>
        <div>Sign in page</div>
      </Route>
      <Route path='/main-page'>
        <div>Main page</div>
      </Route>
    </Switch>
  );
}
