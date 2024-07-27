import React from "react";

type ButtonProps = {
  textColor: string;
  children: React.ReactNode;
};

const Button = ({ textColor, children }: ButtonProps) => {
  return <button className="bg-blue-400 rounded-lg p-2" style={{ color: textColor }}>{children}</button>;
};

export default Button;
