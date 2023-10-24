import React from 'react'
import { motion } from 'framer-motion'

const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.2,
        ease: [0, 0.5, 0.13, 1],
      },
    }
  };
  
  const Framer = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        />      
      </div>
    );
  };

export default Framer