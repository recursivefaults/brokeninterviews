import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


export const ExperienceItem = ({experience}) => (
    <ListGroup.Item>
        <div className="experience-meta">
            <a href="mailto:">{experience.username}</a>
            <small className="experience-date">{experience.created}</small>
        </div>
        <div className="experience-story">
            <p>{experience.story}</p>
        </div>
    </ListGroup.Item>
);
