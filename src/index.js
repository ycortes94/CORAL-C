import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";

import LandingPage from "./LandingPage.js";
import App from './App';

import * as serviceWorker from './serviceWorker';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route
          path="/" exact
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/app" exact
          render={props => <App {...props} />}
        />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );

serviceWorker.unregister();