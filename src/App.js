import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from 'pages/Root';
import Normal from 'pages/Normal';
import Redux from 'pages/Redux';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/normal" component={Normal} />
        <Route exact path="/redux" component={Redux} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;