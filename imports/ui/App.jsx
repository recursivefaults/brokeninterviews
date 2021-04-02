import React from 'react';
import { Nav } from './nav/Nav.jsx';
import { SearchResults } from './search-results/SearchResults.jsx';
import { CompanyDetails } from './company-details/Details.jsx';
import { RegisterUser } from './profile/RegisterUser.jsx';
import { useQuery } from './search-results/query.js';

import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export const App = () => {
    const query = useQuery();

    console.log(query);

    return (
    <>
        <Nav />
        <Container>
            <Switch>
                <Route exact path="/">
                    <SearchResults search={query} />
                </Route>
                <Route path="/profile">
                </Route>
                <Route path="/register">
                    <RegisterUser />
                </Route>
                <Route path="/company-details/:company">
                    <CompanyDetails />
                </Route>
            </Switch>
        </Container>
    </>
    );
};
