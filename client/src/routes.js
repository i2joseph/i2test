import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import routes here
import App from './components/App';
import Home from './components/chart/Home';
import TableHome from './components/table/TableHome';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={TableHome} />
    <Route path="home" component={Home} />
  </Route>

);
