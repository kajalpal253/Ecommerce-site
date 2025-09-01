import { Route ,Routes} from 'react-router-dom';
import './App.css'; // ya jo bhi relevant CSS file ho
//import Footer from './customer/components/footer/Footer';
//import Navigation from './customer/components/navigation/Navigation.jsx';
//import Product from './customer/components/Product/Product.jsx';
//import Productdetails from './customer/components/ProductDetails/Productdetails.jsx';

//import HomePage from './customer/pages/HomePage/HomePage';
//import Cart from './customer/components/cart/Cart.jsx'
//import CheckOut from './customer/components/checkou/CheckOut.jsx';
//import Order from './customer/components/order/Order.jsx';
//import OrderDetail from './customer/components/order/OrderDetail.jsx';
import CustomerRoutes from './customer/routers/CustomerRoutes.jsx';

function App() {
  return (
    <div className=" ">

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
