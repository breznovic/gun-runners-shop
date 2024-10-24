"use client";

import React from "react";
import s from "./Button.module.css";
import { FormStatus } from "react-dom";
import { font } from "@/app/utils/font";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  type?: string;
  disabled?: FormStatus | boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={`${s.button} ${font.className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
