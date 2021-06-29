import React from 'react';
import { Link } from 'react-router-dom';

// const home = <img src="../assets/icon-home.png" alt=""></img>;

function Navbar() {
  return (
    <div className="flex flex-start border-2 bg-blue-500 p-4 text-white">
      <nav className="ml-6 text-2xl font-bold">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Navbar;
