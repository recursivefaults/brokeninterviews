import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


export const CompanyListItem = (props) => (
   <ListGroup.Item as="a" action href="#">
        <h2><Badge variant="success">{props.grade}</Badge>{props.name}</h2>
        <span>{props.count} reviews</span>
        <span>last updated: {props.updated}</span>
   </ListGroup.Item> 
);
