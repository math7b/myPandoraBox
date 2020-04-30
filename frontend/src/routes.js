import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Midias/Home';
import Animes from './pages/Midias/Animes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/midias/home" component={Home} />
                <Route path="/midias/animes" component={Animes}/>
            </Switch>
        </BrowserRouter>
    );
}
