// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-red-600 text-white min-h-screen flex flex-col items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold">Welcome to Fire-Frys!</h1>
        <p className="text-2xl mt-4">Home of the Spiciest Fries in Town!</p>
      </motion.div>
    </div>
  );
};

export default Home;
