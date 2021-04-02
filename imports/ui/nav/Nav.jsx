import React from 'react';

import { NavSearch } from './NavSearch.jsx'
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export const Nav  = () => {
    return (
    <Navbar>
        <Navbar.Toggle />
        <NavSearch />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Link to="/register">Mark Otto</Link>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
            );
};
