import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';


export const NavSearch = () => {
    const history = useHistory();
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        history.push(`/?s=${query}`);
        setQuery('');
        e.preventDefault();
    };


    return (
        <Form inline onSubmit={handleSubmit}>
            <FormControl value={query} type="text" placeholder="Company" className="mr-sm-2" onChange={handleChange} />
            <Button variant="outline-success" type="submit">Search</Button>
        </Form>
    );
};
