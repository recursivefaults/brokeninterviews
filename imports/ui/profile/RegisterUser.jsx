import React from 'react';
import { Meteor } from 'meteor/meteor';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const RegisterUser = () => {

    const signInGoogle = () => {
    };

    const signInGitHub = () => {
        Meteor.loginWithGithub();
    };

    return (
        <>
        <h1> Register </h1>

        <Card className="text-center" bg="light">
            <Card.Title>Sign-In/Register</Card.Title>
            <Button onClick={signInGoogle}>Google</Button>
            <Button onClick={signInGitHub}>GitHub</Button>
        </Card>
        </>
    );
};
