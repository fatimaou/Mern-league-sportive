import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
        action=''
        className='border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]'
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>S'inscrire</h1>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Username'
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Email'
          />
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Password'
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Confirm Password'
          />
        </div>

        <p className='mb-4 '>
          En créant un compte, j'accepte le traitement de mes données personnelles conformément à la &nbsp;
          <a href='' className='uppercase font-bold'>
            Politique de confidentialité
          </a>
        </p>
        <button className='mb-4 bg-teal-700 text-white p-2'>Create</button>
        <Link to='/login' className='capitalize underline mb-4'>
          J'ai déjà un compte!
        </Link>
      </form>
    </div>
  );
};

export default Signup;
