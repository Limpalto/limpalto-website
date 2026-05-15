import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20',
    outline: 'border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50',
    ghost: 'text-emerald-900 hover:bg-emerald-50',
    dark: 'bg-emerald-900 hover:bg-emerald-800 text-white'
  };

  return (
    <button 
      className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};