import BaseComponent from "../BaseComponent/BaseComponent";

interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
  className?: string
}
export default function Input({type, placeholder, id, className, ...props}: InputProps) {
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

Input.defaultProps = {
  type: 'text',
}
