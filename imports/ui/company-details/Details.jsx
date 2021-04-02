import React from 'react';

import { Questions } from './Questions.jsx';
import { Experiences } from './Experiences.jsx';
import { fetchCompanyDetails } from '../../api/companies.js';

import { useParams } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';


export const CompanyDetails = () => {

    let { company } = useParams();

    let companyDetails = fetchCompanyDetails(company);

    return (
    <>
        <Row>
            <h1>{companyDetails.name}</h1>
        </Row>
        <Row>
            <Badge variant="success">{companyDetails.grade}</Badge>
            Last Updated: {companyDetails.updated} - Updates: {companyDetails.count}
        </Row>
        <Button> Add a Question </Button>
        <Button> Share My Experience </Button>

        <h2>Questions</h2>
        <Questions questions={companyDetails.questions} />
        <h2>Experiences</h2>
        <Experiences experiences={companyDetails.experiences} />
    </>
    );
};
