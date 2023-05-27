import React from "react";
import BaseComponent from "../BaseComponent/BaseComponent";

export interface LabelBaseProps {
  children: React.ReactNode
  htmlFor: string
  className?: string
}
export default function LabelBase({children, htmlFor, className}: LabelBaseProps) {
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
