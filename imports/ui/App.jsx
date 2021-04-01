import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { Nav } from './Nav.jsx';
import { CompanyListItem } from './CompanyListItem.jsx';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
    <>
    <Nav />
    <Container>
        <h1>Top Searches</h1>
        <section id="search-results">
            <ListGroup>
                <CompanyListItem name="Toyota" grade="F" count="1000" updated="01/01/2021" />
            </ListGroup>
        </section>
    </Container>
    </>
);
