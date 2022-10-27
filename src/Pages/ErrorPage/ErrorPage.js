import React from 'react';
// import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import error from '../../assets/covers/error.png'
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='error-page'>
            <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this page
        </p>
        <img src={error}/>
      </Alert>
        </div>
    );
};

export default ErrorPage;