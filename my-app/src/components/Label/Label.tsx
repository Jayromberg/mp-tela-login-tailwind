import LabelBase, { LabelBaseProps } from "./LabelBase";

export default function Label({children, htmlFor, className}: LabelBaseProps) {
  return (
    <LabelBase
      htmlFor={htmlFor}
      className={`text-sm mb-2 ${className}`}
    >
      {children}
    </LabelBase>
  )
}

Label.Base = LabelBase;
