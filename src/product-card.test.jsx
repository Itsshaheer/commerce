import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CartContext } from './cart.context';
import ProductCard from './product-card';

// Mock CartContext
const mockAddItemToCart = jest.fn();

const mockCartContextValue = {
  addItemToCart: mockAddItemToCart,
};

const mockProduct = {
  name: 'Sample Product',
  price: 20,
  imageUrl: 'sample-image.jpg',
};

test('adds item to cart on button click', () => {
  render(
    <CartContext.Provider value={mockCartContextValue}>
      <ProductCard product={mockProduct} />
    </CartContext.Provider>
  );

  // Find and click the Add to Cart button
  const button = screen.getByText('Add To Cart');
  fireEvent.click(button);

  // Ensure the addItemToCart function was called with the correct product
  expect(mockAddItemToCart).toHaveBeenCalledTimes(1);
  expect(mockAddItemToCart).toHaveBeenCalledWith(mockProduct);
});
