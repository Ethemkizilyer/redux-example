import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/action/basketActions';

const Basket = ({product}) => {
     const dispatch = useDispatch();
     const state= useSelector((state)=>state)
    // console.log(product);
    const removeClick=()=>{
        dispatch(remove(product)); 
    }
  return (

    <div className="flex justify-center w-[400px] ">
      <div className="bg-slate-300 flex flex-col md:flex-row md:max-w-xl rounded-lg  shadow-lg">
        <img
          className=" w-[90%] h-[90%] p-5 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={product.url}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {product.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{product.name}</p>
          <p className="text-gray-600 text-2xl">{product.price} TL</p>
          <button
            className="w-40 bg-slate-700 py-1 px-2 rounded-md text-slate-300 font-bold active:scale-95 active:bg-slate-600 mt-3"
            // onClick={() => dispatch({ type: "ADD", payload: product })}
            onClick={removeClick}
          >
            Remove To Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket