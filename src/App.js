import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import BroccoliStore from './components/BroccoliStore';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Login from './components/Login';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/store" component={BroccoliStore} />
            <Route exact path="/store/cart" component={Cart} />
            <Route exact path="/store/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;