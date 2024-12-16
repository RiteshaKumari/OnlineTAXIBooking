import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AltHeader from "./Components/AltHeader";
import AltFooter from "./Components/AltFooter";
import AdminTemplate from "./Components/AdminTemplate";
import PageNotFound from "./Components/PageNotFound";
import UserTemplate from "./Components/UserTemplate";
import "./App.css";

// Lazy-loaded pages
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Service = React.lazy(() => import("./Pages/myService/Service"));
const ServiceDetail = React.lazy(() => import("./Pages/myService/ServiceDetail"));
const Driver = React.lazy(() => import("./Pages/Driver/Driver"));
const VehicleDetail = React.lazy(() => import("./Pages/Home/VehicleDetail"));
const Signup = React.lazy(() => import("./Pages/Security/Signup"));
const Signin = React.lazy(() => import("./Pages/Security/Login"));
const AdminDashboard = React.lazy(() => import("./Pages/Admin/AdminDashboard"));
const ForgetPassword = React.lazy(() => import("./Pages/Security/ForgetPassword"));
const AddProduct = React.lazy(() => import("./Pages/Admin/AddProduct"));
const Vehicle = React.lazy(() => import("./Pages/Home/Vehicle"));
const Booking = React.lazy(() => import("./Pages/Home/Booking"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));

// Loader component
const Loader = () => (
  <div className="preloader">
    <h2 data-text="taxix">Loading..</h2>
  </div>
);

function App() {

  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
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
            path="/vehicle"
            element={
              <UserTemplate>
                <WithDefaultLayout>
                  <Vehicle />
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
            path="/vehicledetail"
            element={
              <UserTemplate>
                <WithDefaultLayout>
                  <VehicleDetail />
                </WithDefaultLayout>
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
            path="/booking"
            element={
              <UserTemplate>
                <WithDefaultLayout>
                  <Booking />
                </WithDefaultLayout>
              </UserTemplate>
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
            path="/forgetpassword"
            element={
              <AdminTemplate>
                <ForgetPassword />
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
          {/* Catch-all Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </React.Suspense>
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
