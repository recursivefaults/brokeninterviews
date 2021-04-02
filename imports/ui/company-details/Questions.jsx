import React from 'react';

import { QuestionItem } from './QuestionItem.jsx';

import ListGroup from 'react-bootstrap/ListGroup';


export const Questions = ({questions}) => (
    <ListGroup id="questions">
        {questions.map((q) => <QuestionItem key={q._id} question={q} />)}
    </ListGroup>
);
