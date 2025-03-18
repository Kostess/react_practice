'use client';

import Link from "next/link";
import { useCart } from "../../hooks/useCart";

export default function Cart() {

    const {state, dispatch} = useCart();

    const increment = (e) => {
        const idPorduct = Number(e.currentTarget.dataset.idporduct);
        dispatch({
            type: "INCREMENT",
            products: state.products.map((item) => {
                if (item.id === idPorduct) return {...item, quantity: item.quantity + 1};
                return item
            })
        })
    }

    const decrement = (e) => {
        const idPorduct = Number(e.currentTarget.dataset.idporduct);
        dispatch({
            type: "DECREMENT",
            products: state.products.map((item) => {
                if (item.id === idPorduct && item.quantity > 0) return {...item, quantity: item.quantity - 1};
                return item
            }).filter((item) => item.quantity !== 0)
        })
    }

    return (
      <div className="max-w-2xl mx-auto mt-8 p-4 bg-gray-50 rounded-lg">

        <div className="flex justify-between">
            <Link href="/" className="mb-4 inline-block text-blue-600 hover:text-blue-800">
                ← Назад
            </Link>
            
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer" onClick={() => dispatch({type: 'CLEAR'})}>
                Очистить корзину
            </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-600">Корзина</h2>
        
        {/* Список товаров */}
        <div className="space-y-4 mb-8">
            {state.products.map(({id, name, price, quantity}) => {
                return (
            <div key={id} className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
                <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-600">{price}$ × {quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                <button data-idporduct={id} onClick={decrement} className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                    −
                </button>
                <span>{quantity}</span>
                <button data-idporduct={id} onClick={increment} className="px-3 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200">
                    +
                </button>
                </div>
            </div>
                )
            })}
        </div>
  
        {/* Итого */}
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex justify-between font-bold text-lg">
            <span>Итого:</span>
            <span>{state.totalPrice}$</span>
          </div>
        </div>
      </div>
    );
  }