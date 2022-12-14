import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import './Register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [error, setError] = useState('')
  const { providerLogin, createUser, updateUserProfile, githubSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setError('')
        console.log(user)
      })
      .catch(e => {
        console.error(e)
        setError(e.message)
        form.reset();
        handleUpdateUserProfile(name, photoURL)
      });

  }
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
  }
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.log(error))
  }
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  return (
    <div >
      <Form onSubmit={handleSubmit} className='register-form'>
        <h1 className='text-center'>Create Your Account</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Button className='btn-md btn-block btn-dark ' type="submit">
          Register
        </Button>
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
        <div className='text-center pt-3'>
          Or continue with your social account..
        </div>
        <ButtonGroup vertical className=''>
          <Button onClick={handleGoogleSignIn} className='mt-3 mb-3 btn-lg btn-block btn-warning'><FcGoogle></FcGoogle>Login with Google</Button>
          <Button onClick={handleGithubSignIn} className='btn-lg btn-block btn-dark'><FaGithub></FaGithub> Log in with Github</Button>
        </ButtonGroup>
        <div className='text-center'>
          <Link to='/login'>Log In</Link>
          <span className='p-2'></span>

        </div>
      </Form>
    </div>
  );
};

export default Register;