import React from 'react';
import { motion } from "motion/react"

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 ,y: 0 }}
            animate={{ opacity: 0,y: 1000 }}
            transition={{ duration: 3.5,delay: 5 }}
            className="flex items-center justify-center h-screen w-screen bg-[#242424]">
            <motion.h1 
            initial={{ opacity: 0,z: 0 }}
            animate={{ opacity: 1,z: 100 }}
            transition={{ duration: 4 }}
            
            className="text-4xl font-bold">Swasthya</motion.h1>
        </motion.div>
    );
};

export default Loader;