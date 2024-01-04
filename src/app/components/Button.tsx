'use client';
import { FC } from 'react';

type Button = {
  children: string;
  className: string;
  onClick?: () => void;
};
const Button: FC<Button> = ({ children, className, onClick }) => {
  return (
    <button className={`border-ocean-green border-2 ${className}`} onClick={onClick}>
      <p>{children}</p>
    </button>
  );
};

export default Button;
