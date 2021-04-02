import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


export const ExperienceItem = ({experience}) => (
    <ListGroup.Item>
        <div className="experience-meta">
            <a href="mailto:">{experience.username}</a>
            <span className="experience-date">{experience.updated}</span>
        </div>
        <div className="experience-story">
            <p>{experience.story}</p>
        </div>
    </ListGroup.Item>
);
