import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="bg-gray-100	p-4 shadow-md mb-4 flex w-auto h-auto">
      <Link to="/gatsby-config.js" className="flex">
        <StaticImage
          src="../images/icon.png"
          alt="Gatsby logo"
          className="w-8 h-auto"
        />
        <h2 className="text-2xl font-bold uppercase font-sans ml-3">
          Gatsy One Day Project
        </h2>
      </Link>
    </nav>
  );
};

export default Navbar;
