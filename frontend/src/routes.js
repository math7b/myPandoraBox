import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Midias/Home';
import Animes from './pages/Midias/List/Animes';
import AnimesDetails from './pages/Midias/Details/Animes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/midias/home" component={Home} />
                <Route path="/midias/animes" component={Animes} />
                <Route paath="/midia/details/:midiaId" component={AnimesDetails} />
            </Switch>
        </BrowserRouter>
    );
}
