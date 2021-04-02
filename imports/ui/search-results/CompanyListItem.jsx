import React from 'react';
import { useHistory } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


export const CompanyListItem = ({company}) => {

    const history = useHistory();

    const handleClick = (e) => {
        history.push("/company-details/"+company._id);
        e.preventDefault();

    };

    return (
        <ListGroup.Item action onClick={handleClick}>
            <div className="company-image"></div>
            <h2>{company.name}</h2>
            <span>
            Questions: <Badge pill variant="light">{company.question_count}</Badge>
            Stories: <Badge pill variant="light">{company.experience_count}</Badge>
            last updated: {company.update}
            </span>
                
        </ListGroup.Item> 
    );
};
