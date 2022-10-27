import React from 'react';
import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import error from '../../assets/covers/error.png'
import './ErrorPage.css'
const ErrorPage = () => {
  return (
    <div className='error-page mt-5'>
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this page
        </p>
        <img src={error} />
      </Alert>
      <Button className=' bg-dark'><Link to='./' className='text-center text-white text-decoration-none'>Back to home page</Link></Button>
    </div>
  );
};

export default ErrorPage;