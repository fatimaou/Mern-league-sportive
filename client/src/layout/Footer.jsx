import React from 'react';

import { Place, MailOutline, LocalPhone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className='p-8 grid gap-x-16 gap-y-4 md:grid-cols-3'>
      <div>
        <h1 className='font-bold text-3xl uppercase mb-4 tracking-wider'>
          <a href=''>Ligue sportive d'Auvergne . </a>
        </h1>
        <p className='text-justify'>
        Au cœur des montagnes enneigées et des vallées verdoyantes d'Auvergne, 
        se trouve une nouvelle ère numérique qui a révolutionné le monde du sport : un site de commerce électronique dynamique et intuitif, 
        dédié à la location de matériel sportif par la Ligue Sportive d'Auvergne.
        </p>
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-4 tracking-wider'>Liens pratiques </h2>
        <div className='grid grid-cols-2'>
          <ul>
            <li>
              <a href=''>Accueil</a>
            </li>
            <li>
              <a href=''>Man Fashion</a>
            </li>
            <li>
              <a href=''>Accessoires</a>
            </li>
            <li>
              <a href=''>Suivre ma commande ! </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=''>Panier</a>
            </li>
            <li>
              <a href=''>Mon compte</a>
            </li>
            <li>
              <a href=''>Wishlist</a>
            </li>
            <li>
              <a href=''>conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-4 tracking-wider'>Contact</h2>
        <ul>
          <li>
            <Place className='mr-4' />
            <span>Auvergne, France</span>
          </li>
          <li>
            <LocalPhone className='mr-4' />
            <span>01 48 78 24 95 </span>
          </li>
          <li>
            <MailOutline className='mr-4' />
            <span>contact@association.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
