import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Midias/Home';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/midias/home" component={Home} />
        </Switch>
        </BrowserRouter>
    );
}
