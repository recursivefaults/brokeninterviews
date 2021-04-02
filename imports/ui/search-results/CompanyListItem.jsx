import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


export const CompanyListItem = ({company}) => (
   <ListGroup.Item>
        <Link to={"/company-details/"+company._id}>
        <h2><Badge variant="success">{company.grade}</Badge>{company.name}</h2>
        <span>{company.count} reviews</span>
        <span>last updated: {company.updated}</span>
    
        </Link>
   </ListGroup.Item> 
);
