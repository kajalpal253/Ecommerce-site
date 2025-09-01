import React, { useEffect } from 'react'
import CartItems from './CartItems'
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../state/Cart/Action';
const Cart = () => {
  const navigate = useNavigate();
  const {cart} =useSelector(store=>store);
  const dispatch = useDispatch();
  const handleCheckout=()=>{
    navigate("/checkout?step=1")
  }
  useEffect(()=>{
    dispatch(getCart());
  },[cart.updateItemToCart,cart.removeItemToCart])
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
          <div className='col-span-2'> {cart.cart?.cartItems.map((item)=> <CartItems item={item}/>)}
          </div>
          <div className='px-3 sticky top-0 h-[100vh]  mt-5 lg:mt-0'>
        <div className='border ' > 
        <p className='uppercase font-bold  opacity-60 pb-4  ml-4 mt-5'>Price details</p>  
        <hr />
        <div className='space-y-3 space-x-5 font-semibold mb-10'>
          <div className='flex justify-between  pt-3 text-black ml-4'>
            <span>Price</span>
            <span  className='mr-3'>₹{cart.cart?.totalPrice}</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Discount</span>
            <span  className='mr-3'>-{cart.cart?.discount}</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Delivery Charge</span>
            <span  className='mr-3  text-green-600'>Free</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Total Amount</span>
            <span className='mr-3'>₹{cart.cart?.totalDiscountedPrice}</span>
          </div>

        </div>
        <Button onClick={handleCheckout} varient="contained"  className ="w-full mt-5 " sx={{ px:"2.5rem",py:".7rem",bgcolor:"#9155fd", color:"white" }}> Checkout</Button>

         

          </div>
        </div>
          </div>
        
      
      
      </div>
    
  )
}

export default Cart
