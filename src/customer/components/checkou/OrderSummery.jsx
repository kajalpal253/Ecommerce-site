import React, { useEffect } from 'react'
import AddressCard from '../addressCard/AddressCard'
;import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../state/Order/Action.js';
import { useLocation } from 'react-router-dom';
import CartItems from '../cart/CartItems.jsx';
import { createPayment } from '../../../state/payment/Action.js';

const OrderSummery = () => {

  const dispatch =useDispatch();
const location = useLocation();
const {order} = useSelector(store=>store);
const searchParams= new URLSearchParams(location.search);

const  orderId = searchParams.get("order_id")


useEffect(() => {
  if (orderId) {
    dispatch(getOrderById(orderId));
    }
   
}, [orderId]);
const handleCheckOut= ()=>{
      console.log("Checkout clicked");

  dispatch(createPayment(orderId));
}

  return (
    <div>
    <div className='p-5 shadow-lg rounded-s-md border'>
      <AddressCard address={order.order?.shippingAddress}/>

    </div>
    <div>
        <div className='lg:grid grid-cols-3  relative'>
          <div className='col-span-2'> 
                {order.order?.orderItems.map((item) => (
                <CartItems key={item.id} item={item} />
          ))}

          </div>
          <div className='px-3 sticky top-0 h-[100vh]  mt-5 lg:mt-0'>
        <div className='border ' > 
        <p className='uppercase font-bold  opacity-60 pb-4  ml-4 mt-5'>Price details</p>  
        <hr />
        <div className='space-y-3 space-x-5 font-semibold mb-10'>
          <div className='flex justify-between  pt-3 text-black ml-4'>
            <span>Price</span>
            <span  className='mr-3'>{order.order?.totalPrice}</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Discount</span>
            <span  className='mr-3'>-{order.order?.discount}</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Delivery Charge</span>
            <span  className='mr-3  text-green-600'>Free</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Total Amount</span>
            <span className='mr-3'>{order.order?.totalDiscountedPrice}</span>
          </div>

        </div>
        <Button variant="contained"  className ="w-full mt-5 " sx={{ px:"2.5rem",py:".7rem",bgcolor:"#9155fd", color:"white" }} onClick={handleCheckOut}> Checkout</Button>

         

          </div>
        </div>
          </div>
        
      
      
      </div>
    </div>
  )
}

export default OrderSummery;
