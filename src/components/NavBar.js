// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Animated Brand Name */}
        <motion.div
          className="text-3xl font-bold cursor-pointer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="font-cursive">
            Fire-Frys
          </Link>
        </motion.div>
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link to="/menu" className="hover:text-yellow-400 transition duration-300">
            Menu
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
            Catering & Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
