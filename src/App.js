import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from 'pages/Root';
import Normal from 'pages/Normal';
import Redux from 'pages/Redux';
import Test from 'pages/Test';
import Ref from 'pages/Ref';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/normal" component={Normal} />
        <Route exact path="/redux" component={Redux} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/Ref" component={Ref} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;