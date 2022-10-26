import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import {FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
  const {providerLogin}=useContext(AuthContext);
  const googleProvider=new GoogleAuthProvider()
  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.error(error))
  }
    return (
        <div>
        <ButtonGroup vertical >
        <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FcGoogle></FcGoogle>Login with Google</Button>
      <Button variant='outline-dark'><FaGithub></FaGithub> Log in with Github</Button>
        </ButtonGroup>
      

      
        </div>
    );
};

export default Register;