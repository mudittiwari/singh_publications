import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import ShippingAddress from './ShippingAddress';
import ProfileSetting from './ProfileSetting';
import AccountSetting from './AccountSetting';
import Home from './Homepage';
import Wishlist from './Wishlist';
import Cart from './Cart';
import PurchasedBooks from './PurchasedBooks';
import Orderdetails from './Orderdetails';
import Navbar from './comps/Navbar';
import Orders from './Orders';
import Otp from './Otp';
import BillingAddress from './BillingAddress';
import { BrowserRouter,HashRouter ,Routes, Route } from 'react-router-dom';
import Footer from './comps/Footer';
import Product from './Product';
import Deliveryaddress from './Deliveryaddress';
import Orderplaced from './Orderplaced';
function App() {
  return (
    <>
    
     <HashRouter>
     <Navbar />
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/login" element={<Login />} />
          <Route exact  path="/otp" element={<Otp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shippingaddress" element={<ShippingAddress />} />
          <Route path="/billingaddress" element={<BillingAddress />} />
          <Route path="/deliveryaddress" element={<Deliveryaddress />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/accountsetting" element={<AccountSetting />} />
          
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchasedbooks" element={<PurchasedBooks />} />
          <Route path="/orderdetails" element={<Orderdetails />} />
          <Route path="/orderplaced" element={<Orderplaced />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product" element={<Product />} />

        </Routes>
        <Footer/>
      </HashRouter>
      
    </>
  );
}

export default App;
