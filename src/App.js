import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import BroccoliStore from './components/BroccoliStore';
import NotFound from './components/NotFound';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/store" component={BroccoliStore} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;