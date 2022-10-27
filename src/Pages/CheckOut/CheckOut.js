import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h4 className='text-center'>Checkout</h4>
            <div className='text-center p-5 m-4'>
                <span>UserName: {user.displayName}</span>
                <span>UserEmail: {user.email}</span>
            </div>
        </div>
    );
};

export default CheckOut;