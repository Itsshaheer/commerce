import React from 'react';
import './checkout-item.scss';
import { useContext } from 'react';
import { CartContext } from '../cart.context';

const Checkoutitem = React.memo(({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);
  const { name, imageUrl, quantity, price } = cartItem;

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} /> {/* Added alt attribute for accessibility */}
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'> ${price}</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
});

export default Checkoutitem;