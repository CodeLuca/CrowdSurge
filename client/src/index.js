import React from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory, Router, Route, IndexRoute } from 'react-router'

// Frame holds components that persist across views.
import Layout from './pages/Layout/Layout/Layout'
import Home from './pages/Home/Home/Home'
import NotFound from './pages/NotFound/NotFound/NotFound'

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAgM_Gimfh2Bk4OhP4C3ciJxh7RK4R6e2A",
  authDomain: "crowdsurge-89a57.firebaseapp.com",
  databaseURL: "https://crowdsurge-89a57.firebaseio.com",
  storageBucket: "crowdsurge-89a57.appspot.com",
  messagingSenderId: "240893724664"
};

firebase.initializeApp(config);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>

      {/** 404 Handler */}
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
