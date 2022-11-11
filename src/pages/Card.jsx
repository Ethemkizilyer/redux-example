import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Basket from '../components/Basket'
import { clear } from '../redux/action/basketActions'

const Card = () => {
    let sumTotal = 0
    const state= useSelector((state)=>state)
    state.map((product) => (sumTotal += product.price));
        const dispatch = useDispatch();
        
        // console.log(product);
        const removeClick = () => {
          dispatch(clear());
        };
  return (
    <>
      {state.length ? (
        <div className="flex flex-wrap justify-center gap-6 mt-7">
          {state.map((product, index) => (
            <Basket product={product} key={index} />
          ))}
        </div>
      ) : (
        <p className="flex justify-center mt-20">
          Sepette Ürün Bulunmamaktadır...
        </p>
      )}
      
      <button
        className="w-40 fixed bottom-20 mx-auto  bg-slate-700 py-1 px-2 rounded-md text-slate-300 font-bold active:scale-95 active:bg-slate-600 mt-3"
        onClick={removeClick}
      >
        SİL
      </button>
      <div className="fixed bg-slate-300 bottom-0 w-full text-end pr-4 font-bold py-2 text-lg">
        TOPLAM : {sumTotal}
      </div>
    </>
  );
}

export default Card