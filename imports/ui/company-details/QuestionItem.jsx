import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const QuestionItem = ({question}) => (
    <ListGroup.Item>
        <div className="voting">
            <Button>⇧</Button>
            <Button>⇩</Button>
            <p>{question.score}</p>
        </div>
        <div className="question">
            <p>{question.question}</p>
        </div>
        <div className="interview">
            <p> {question.stage} </p>
        </div>
        <div className="role">
            <p>{question.role}</p>
        </div>
    </ListGroup.Item>
);
