import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import {FaGithub } from "react-icons/fa";

const Register = () => {
    return (
        <div>
        <ButtonGroup vertical >
        <Button className='mb-2' variant='outline-primary'><FcGoogle></FcGoogle>Login with Google</Button>
      <Button variant='outline-dark'><FaGithub></FaGithub> Log in with Github</Button>
        </ButtonGroup>
      

      
        </div>
    );
};

export default Register;