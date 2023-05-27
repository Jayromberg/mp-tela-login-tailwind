import BaseComponent from "../BaseComponent/BaseComponent";

export interface InputBaseProps {
  type?: string;
  placeholder?: string;
  id?: string;
  className?: string
}
export default function InputBase({type, placeholder, id, className, ...props}: InputBaseProps) {
  return (
    <BaseComponent
      tag="input"
      type={type}
      placeholder={placeholder}
      id={id}
      className={className}
      {...props}
    />
  )
}

InputBase.defaultProps = {
  type: 'text',
}
