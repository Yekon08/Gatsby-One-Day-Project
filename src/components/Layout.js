import React from "react";
import "../styles/global.css";

const Layout = ({ children }) => {
  return <main className="text-center">{children}</main>;
};

export default Layout;
