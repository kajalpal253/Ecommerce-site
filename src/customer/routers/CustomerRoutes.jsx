import React from 'react'
import { Route, Routes} from  'react-router-dom'
import HomePage from '../pages/HomePage/HomePage.jsx';
import Cart from '../components/cart/Cart.jsx';
import Product from '../components/Product/Product.jsx'
import Productdetails from '../components/ProductDetails/Productdetails.jsx'
import Navigation from '../components/navigation/Navigation.jsx';
import Footer from '../components/footer/Footer.jsx';
import CheckOut from '../components/checkou/CheckOut.jsx'
import Order from '../components/order/Order.jsx'
import OrderDetail from '../components/order/OrderDetail.jsx';
import PaymentSuccess from '../components/payment/PaymentSuccess.jsx';

const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
      <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<Productdetails/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
        <Route path='/payment/order/:orderId' element={<PaymentSuccess/>}></Route>




    {/* <Order/>*/}
   {/* <OrderDetail/> */}
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
