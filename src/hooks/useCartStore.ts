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
    devtools((set) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (payload) =>
        set(
          produce((state) => {
            state.products.push(payload);
            state.totalItems = state.totalItems + payload.quantity;
            state.totalPrice = state.totalPrice + payload.price;
          }),
          false,
          'addToCart'
        ),
      removeFromCart: (payload) =>
        set(
          produce((state) => {
            state.products.splice(
              state.products.find(
                (item: { id: string }) => item.id !== payload.id
              ),
              1
            );
            state.totalItems = state.totalItems - payload.quantity;
            state.totalPrice = state.totalPrice - payload.price;
          }),
          false,
          'removeFromCart'
        ),
    })),
    { name: 'cart' }
  )
);
