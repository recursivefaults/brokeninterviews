import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';

export const QuestionItem = ({question}) => {

    const getPillVariant = (stage) => {
        return "light";
    }
    return (
    <ListGroup.Item>
        <div className="inline align-center">
            <div className="voting">
                <Button>⇧</Button>
                <Button>⇩</Button>
                <p className="question-score">{question.score}</p>
            </div>
            <div className="question">
                <p>
                    {question.question}
                </p>
                <div className="pills">
                    <Badge pill variant="light">{question.stage}</Badge>
                    <Badge pill variant="dark">{question.role}</Badge>
                </div>
            </div>
        </div>
    </ListGroup.Item>
    );
};
