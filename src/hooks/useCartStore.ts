'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { produce } from 'immer';

import { ActionType, CartStore } from '@/types';

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<CartStore & ActionType>()(
  persist(
    devtools((set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      reset: () =>
        set(
          produce((state) => {
            state.products = INITIAL_STATE.products;
            state.totalItems = INITIAL_STATE.totalItems;
            state.totalPrice = INITIAL_STATE.totalPrice;
          }),
          false,
          'resetCart'
        ),
      addToCart: (payload) =>
        set(
          produce((state) => {
            const products = get().products;
            const productInState = products.find(
              (item) => item.id === payload.id
            );

            if (productInState) {
              const updatedProducts = products.map((item) =>
                item.id === productInState.id
                  ? {
                      ...item,
                      quantity: payload.quantity + item.quantity,
                      price: payload.price + item.price,
                    }
                  : item
              );
              state.products = updatedProducts;
              state.totalItems += payload.quantity;
              state.totalPrice += payload.price;
            } else {
              state.products.push(payload);
              state.totalItems += payload.quantity;
              state.totalPrice += payload.price;
            }
          }),
          false,
          'addToCart'
        ),
      removeFromCart: (payload) =>
        set(
          produce((state) => {
            const products = get().products;
            const index = products.find((item) => item.id === payload.id);

            state.products.splice(index, 1);
            state.totalItems -= payload.quantity;
            state.totalPrice -= payload.price;
          }),
          false,
          'removeFromCart'
        ),
    })),
    { name: 'cart' }
  )
);
