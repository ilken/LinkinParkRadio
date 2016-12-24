import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './pages/Layout.js';
import App from './pages/App.js';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={App} />
        </Route>
    </Router>,
app);
