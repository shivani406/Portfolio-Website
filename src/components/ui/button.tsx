import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md font-semibold transition-colors ${className}`}
    >
      {children}
    </button>
  );
};
