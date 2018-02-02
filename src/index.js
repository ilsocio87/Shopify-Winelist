import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Proute from './helpers/routes/proute';
import Login from './components/login';
import App from './components/app';

const Index = () =>
  <Router>
    <div>
      <Route exact path='/' component={Login} />
      <Proute path='/app' component={App} />
    </div>
  </Router>

ReactDOM.render(<Index />, document.getElementById('root'));
