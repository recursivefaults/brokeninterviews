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
        <section id="company-info" className="text-center">
            <h1>{companyDetails.name}</h1>
            <p>
                Last Updated: {companyDetails.updated} - Updates: {companyDetails.count}
            </p>
            <Button> Add a Question </Button>
            <Button> Share My Experience </Button>
        </section>
        <section id="questions">
            <h2>Questions</h2>
            <Questions questions={companyDetails.questions} />
            </section>
        <section id="experiences">
            <h2>Experiences</h2>
            <Experiences experiences={companyDetails.experiences} />
        </section>
    </>
    );
};
