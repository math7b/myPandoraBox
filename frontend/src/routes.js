import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Slash from './pages/Slash';
import Logar from './pages/Logar';
import Cadastrar from './pages/Cadastrar';
import Home from './pages/Midias/Home';
import Animes from './pages/Midias/List/Animes';
import Filmes from './pages/Midias/List/FIlmes';
import Series from './pages/Midias/List/Series';
import AnimeDetails from './pages/Midias/Details/Animes';
import FilmeDetails from './pages/Midias/Details/Filmes';
import SerieDetails from './pages/Midias/Details/Series';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Slash} />
                <Route path="/logar" component={Logar} />
                <Route path="/cadastrar" component={Cadastrar} />
                <Route path="/midias/home" component={Home} />
                <Route path="/midias/animes" component={Animes} />
                <Route path="/midias/filmes" component={Filmes} />
                <Route path="/midias/series" component={Series} />
                <Route path="/midia/details/anime/:midiaId" component={AnimeDetails} />
                <Route path="/midia/details/filme/:midiaId" component={FilmeDetails} />
                <Route path="/midia/details/serie/:midiaId" component={SerieDetails} />
            </Switch>
        </BrowserRouter>
    );
}
