import React from 'react';
import { ButtonProps } from '../utils/types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  onClick, 
  type = 'button',
  className = '' 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300
        ${primary 
          ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl' 
          : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;