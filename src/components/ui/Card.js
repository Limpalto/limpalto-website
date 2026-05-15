import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);