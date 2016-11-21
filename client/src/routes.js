import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import routes here
import App from './components/App';
import Landing from './components/Landing';
import Home from './components/chart/Home';
import TableHome from './components/table/TableHome';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="market" component={Home} />
    <Route path="company" component={TableHome} />
  </Route>

);
