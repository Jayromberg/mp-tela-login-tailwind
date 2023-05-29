import InputBase, { InputBaseProps } from "./InputBase";

export default function Input({className, ...props}: InputBaseProps) {
  return (
    <InputBase
      className={`text-sm mb-4 pl-3 rounded border py-2 shadow focus:outline-none hover:border-trueBlue hover:ring-1 hover:ring-marianBlue focus:border-marianBlue focus:ring-1 focus:ring-marianBlue ${className}`}
      {...props}
    />
  )
}

Input.Base = InputBase;
