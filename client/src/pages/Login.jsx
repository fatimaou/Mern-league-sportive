import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../store/auth-actions';

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (!password.trim() || !username.trim()) return;
    dispatch(
      login({
        username,
        password,
      })
    );
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div 
      style={{
        backgroundImage: 'url(https://www.numero-dix.fr/content/galleries/accueil/equipements.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }} 
      className='px-4 w-full h-screen flex justify-center items-center'
    >
      <form
        onSubmit={formSubmitHandler}
        action=''
        className='border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]'
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Se connecter </h1>
        <input
          className='p-2 mb-4 border-2 rounded focus:outline-none'
          type='text'
          placeholder='Username'
          ref={usernameRef}
        />
        <input
          className='p-2 mb-4 border-2 rounded focus:outline-none'
          type='password'
          placeholder='Password'
          ref={passwordRef}
        />
        <button
          className='mb-4 bg-teal-700 text-white p-2 disabled:bg-teal-500 disabled:cursor-not-allowed'
          disabled={auth.isFetching}
        >
          Se connecter
        </button>
      {auth.error && <p></p>}
        <Link to='/signup' className='capitalize underline mb-4'>
          Creer un compte
        </Link>
      </form>
    </div>
  );
};

export default Login

