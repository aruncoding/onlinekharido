import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import UserProfile from './components/pages/UserProfile';
import AddUser from './components/pages/AddUser';
import ChangePassword from './components/pages/ChangePassword';
import Contact from './components/pages/Contact';
import Dashboard from './components/pages/Dashboard';
import LoginReg from './components/auth/LoginReg';
import SendPasswordResetEmail from './components/auth/SendPasswordResetEmail';
import ResetPassword from './components/auth/ResetPassword';
import Layout from './components/pages/Layout';
import AddProduct from './components/pages/AddProduct'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} > 
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={ <LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
