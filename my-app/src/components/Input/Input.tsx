import InputBase, { InputBaseProps } from "./InputBase";

export default function Input({className, ...props}: InputBaseProps) {
  return (
    <InputBase
      className={`text-sm ${className}`}
      {...props}
    />
  )
}

Input.Base = InputBase;
