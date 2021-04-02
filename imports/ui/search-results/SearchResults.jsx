import React, {useState} from 'react';

import { CompanyListItem } from './CompanyListItem.jsx'
import { searchCompanies } from '../../api/companies.js'

import ListGroup from 'react-bootstrap/ListGroup';

export const SearchResults = ({search}) => {
    const getHeader = () => {
        if(!!search) {
            return "Results for " + search;
        }
        return "Top Searches";
    }

    const fetchCompanies = (query) => {
        return searchCompanies(query);
    }

    return (
        <section id="search-results">
            <h1>{getHeader()}</h1>
            <ListGroup>
                {fetchCompanies(search).map((company) => <CompanyListItem key={company.name} company={company} />)}
            </ListGroup>
        </section>
    );
};
