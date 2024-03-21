import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import whatsapp from "/src/assets/Dp.jpeg"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <FloatingWhatsApp phoneNumber={9745680111} accountName={"Mentorow"} statusMessage={"online"} placeholder={"Message"} darkMode={true} avatar={whatsapp}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;