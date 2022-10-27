import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import './Login.css'


const Login = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation()
const from=location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        toast.success('Successfully Login', { autoClose: 3000 })
        console.log(user)
        form.reset();
        setError('');
        navigate(from,{replace:true});
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })
  }
  return (

    <Form onSubmit={handleSubmit} className='login-form'>
      <h1 className='text-center'>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>

      
      <Button className='btn-lg btn-dark btn-block' type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">
      
        {error}
      </Form.Text>

      <div className='text-center'>
        <Link to='/register'>Register</Link>

        <span className='p-2'></span>
        <a href="/login">forgot password</a>
      </div>
    </Form>
  );
};

export default Login;