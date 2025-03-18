'use client';

import { productsData } from "@/tempData/tempData";
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    isProduct: true,
    products: productsData,
    totalPrice: productsData.reduce((prev, currenNumber) => {
        return prev + currenNumber.price * currenNumber.quantity;
    }, 0)
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                isProduct: true,
                products: action.products
            };
        case 'REMOVE':
            return {
                ...state,
                isProduct: action.products.length? true : false,
                products: action.products,
            };
        case 'INCREMENT':
            return {
                ...state,
                isProduct: true,
                products: action.products,
                totalPrice: action.products.reduce((prev, currenNumber) => {
                    return prev + currenNumber.price * currenNumber.quantity;
                }, 0)
            };
        case 'DECREMENT':
            return {
                ...state,
                isProduct: action.products.length? true : false,
                products: action.products,
                totalPrice: action.products.reduce((prev, currenNumber) => {
                    return prev + currenNumber.price * currenNumber.quantity;
                }, 0)
            };
        case 'CLEAR':
            return {
                ...state,
                isProduct: false,
                products: [],
                totalPrice: 0
            }
        default: {
            return state;
        }
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}