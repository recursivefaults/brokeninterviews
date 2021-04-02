import React from 'react';

import { ExperienceItem } from './ExperienceItem.jsx';

import ListGroup from 'react-bootstrap/ListGroup';


export const Experiences = ({experiences}) => (
    <ListGroup id="experiences">
        {experiences.map((e) => <ExperienceItem key={e._id} experience={e} />)}
    </ListGroup>
);
