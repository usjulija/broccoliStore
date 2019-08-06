import React from 'react';
import { render } from 'react-dom';
import { Router } from "react-router-dom";
import history from "./history";
import App from './App';
import './App.css';

render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById("root")
  );