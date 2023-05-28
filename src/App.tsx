import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import {
  Home,
  About,
  OurFleet,
  OurServices,
  Contact,
  FormSuccess,
  ErrorPage,
  CarDetailPage,
  CarReservationForm,
  ReservationSuccess,
} from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-fleet">
          <Route index element={<OurFleet />} />
          <Route path="/our-fleet/:class/:idx" element={<CarDetailPage />} />
        </Route>
        <Route path="/reservation" element={<CarReservationForm />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/message-success" element={<FormSuccess />} />
        <Route path="/reservation-success" element={<ReservationSuccess />} />
        <Route path="/error" element={<ErrorPage />} />

        {/*Error page */}
        <Route path="*" element={<Navigate replace to="/error" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
