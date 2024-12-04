import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AltHeader from './Components/AltHeader';
import AltFooter from './Components/AltFooter';
import AdminTemplate from './Components/AdminTemplate';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import PageNotFound from './Components/PageNotFound';
import Home from './Pages/Home/Home';
import './App.css';
import Service from './Pages/myService/Service';
import ServiceDetail from './Pages/myService/ServiceDetail';
import Driver from './Pages/Driver/Driver';
import DriverDetail from './Pages/Driver/DriverDetail';
import Signup from './Pages/Security/Signup';
import Signin from './Pages/Security/Login';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ForgetPassword from './Pages/Security/ForgetPassword';
import AddProduct from './Pages/Admin/AddProduct';
import UserTemplate from './Components/UserTemplate';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Default Header and Footer */}
        <Route
          path="/"
          element={
            <UserTemplate>
            <WithDefaultLayout>
              <Home />
            </WithDefaultLayout>
            </UserTemplate>
          }
        />
        <Route
          path="/about"
          element={
            <UserTemplate>
            <WithDefaultLayout>
              <About />
            </WithDefaultLayout>
            </UserTemplate>
          }
        />
        <Route
          path="/service"
          element={
            <UserTemplate>
            <WithDefaultLayout>
              <Service />
            </WithDefaultLayout>
            </UserTemplate>
          }
        />
        <Route
          path="/servicedetail"
          element={
            <UserTemplate>
            <WithDefaultLayout>
              <ServiceDetail />
            </WithDefaultLayout>
            </UserTemplate>
          }
        />

        {/* Routes with Alternative Header and Footer */}
        <Route
          path="/driver"
          element={
            <UserTemplate>
            <WithAltLayout>
              <Driver />
            </WithAltLayout>
            </UserTemplate>
          }
        />
        <Route
          path="/driverdetail"
          element={
            <UserTemplate>
            <WithAltLayout>
              <DriverDetail />
            </WithAltLayout>
            </UserTemplate>
          }
        />
        <Route
          path="/contact"
          element={
            <UserTemplate>
            <WithDefaultLayout>
              <Contact />
            </WithDefaultLayout>
            </UserTemplate>
          }
        />
         <Route
          path="/forgetpassword"
          element={
            <AdminTemplate>
              <ForgetPassword />
            </AdminTemplate>
          }
        />

        {/* Routes without Header and Footer */}
        <Route
          path="/signin"
          element={
            <AdminTemplate>
              <Signin />
            </AdminTemplate>
          }
        />

       <Route
          path="/signup"
          element={
            <AdminTemplate>
              <Signup />
            </AdminTemplate>
          }
        />

                <Route
  path="/admindashboard"
  element={
    <AdminTemplate>
      <WithAltLayout>
        <AdminDashboard />
      </WithAltLayout>
    </AdminTemplate>
  }
/>

<Route
  path="/addproduct"
  element={
    <AdminTemplate>
      <WithAltLayout>
        <AddProduct />
      </WithAltLayout>
    </AdminTemplate>
  }
/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

function WithDefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function WithAltLayout({ children }) {
  return (
    <>
      <AltHeader />
      {children}
      <AltFooter />
    </>
  );
}

export default App;
