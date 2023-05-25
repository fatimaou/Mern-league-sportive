import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';

import { userRequest } from '../request-methods';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Footer from '../layout/Footer';
import CartProduct from '../components/CartProduct';

const ShoppingCart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const cart = useSelector((store) => store.cart);

  const continueShoppingClickHandler = () => {
    history.goBack();
  };

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const checkout = async () => {
      try {
        await userRequest.post('/checkout', {
          tokenId: stripeToken.id,
          amount: cart.totalPrice * 100,
        });
        history.push('/orders');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cart.totalPrice > 1 && checkout();
  }, [stripeToken]);

  return (
    <>
      <Announcement />
      <Navbar />
      <section className='px-8 py-4'>
        <h1 className='uppercase mt-4 mb-8 text-4xl text-center'>Votre Panier </h1>
        <div className='grid sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
          <div>
            <a
              onClick={continueShoppingClickHandler}
              className='text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500'
            >
              Continuer mon shopping 
            </a>
          </div>
          <div className='flex'>
            <p className='mr-4 cursor-pointer'>
              Panier ({cart.totalQantity})
            </p>
          </div>
          <div>
            <StripeCheckout
              name='HEIN.'
              billingAddress
              shippingAddress
              description={`Your total is €${cart.totalPrice}`}
              amount={cart.totalPrice * 100}
              currency='EUR'
              token={onToken}
              stripeKey='pk_test_51LbSFeDby8a9HLcBzbuGETbDJiWZkCbNQx3gSpAfRZIKSrvsKakFGjvkNPTvzuHNNXKDYojDjdk3XhLlTajrQmeZ00JSyq9AOO'
            >
              <a className='text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 hover:text-black hover:border-black hover:bg-white bg-black text-white transition ease-out duration-500'>
                Commander 
              </a>
            </StripeCheckout>
          </div>
        </div>
        <div className='my-12 grid gap-8 lg:grid-cols-[2fr_1fr]'>
          <div>
            {cart.products.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))}
          </div>
          <div>
            <div className='border rounded-xl p-4'>
              <h1 className='uppercase text-4xl mb-8'>Récapitulatif de la commande</h1>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>Sous-total</span>
                <span> {cart.totalPrice} €</span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>Frais de livraison estimés</span>
                <span> 00.00 € </span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>Remise </span>
                <span> - 00.00 €</span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize font-bold text-2xl'>Total</span>
                <span className='font-bold text-2xl'>€ {cart.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShoppingCart;

