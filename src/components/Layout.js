import React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <main className="text-center">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
