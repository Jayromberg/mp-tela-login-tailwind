import React from "react";
import BaseComponent from "../BaseComponent/BaseComponent";

interface LabelProps {
  children: React.ReactNode
  htmlFor: string
  className?: string
}
export default function Label({children, htmlFor, className}: LabelProps) {
  return (
    <BaseComponent
      tag="label"
      htmlFor={htmlFor}
      className={className}
    >
      {children}
    </BaseComponent>
  );
}