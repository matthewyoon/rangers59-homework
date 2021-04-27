import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Home, Dashboard, SignIn, SignUp } from './components';
import reportWebVitals from './reportWebVitals';

// Import from React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path = '/'>
          <Home title={'Car Inventory Dashboard React Project'}/> 
        </Route>

        <Route path = '/dashboard' component = { Dashboard } />

        <Route path = '/signin' component = { SignIn } />

        <Route path = '/signup' component = { SignUp } />
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
