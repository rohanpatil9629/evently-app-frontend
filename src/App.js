import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Dashborad from "./pages/dashboard/Dashborad";
import Layout from "./components/layout/Layout"
import Home from "./pages/Home/Home";
import axios from "axios"

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import AddProduct from "./pages/addProduct/AddProduct";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import EditProduct from "./pages/editProduct/EditProduct";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";


axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
      async function loginStatus (){
        const status = await getLoginStatus()
        dispatch(SET_LOGIN(status));
      }
      loginStatus()
  },[dispatch])

  return (
   <BrowserRouter>
    <ToastContainer />
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/forgot" element={<Forgot/>} />
    <Route path="/logout" element={<Header/>} />
    <Route path="/resetpassword/:resetToken" element={<Reset/>} />
    
    <Route path="/dashboard" element={
    <Sidebar>
      <Layout>
        <Dashborad/>
      </Layout>
    </Sidebar>
    // <Dashborad></Dashborad>
    }/>
    <Route path="/add-product" element={
    <Sidebar>
      <Layout>
        <AddProduct/>
      </Layout>
    </Sidebar>
    }/>
    <Route path="/product-detail/:id" element={
    <Sidebar>
      <Layout>
        <ProductDetail/>
      </Layout>
    </Sidebar>
    }/>
    <Route path="/edit-product/:id" element={
    <Sidebar>
      <Layout>
        <EditProduct/>
      </Layout>
    </Sidebar>
    }/>
    <Route path="/profile" element={
    <Sidebar>
      <Layout>
        <Profile/>
      </Layout>
    </Sidebar>
    }/>
    <Route path="/edit-profile" element={
    <Sidebar>
      <Layout>
        <EditProfile/>
      </Layout>
    </Sidebar>
    }/>
    <Route path="/contact-us" element={
    <Sidebar>
      <Layout>
        <Contact/>
      </Layout>
    </Sidebar>
    }/>


   </Routes>
   </BrowserRouter>
  );
}

export default App;
