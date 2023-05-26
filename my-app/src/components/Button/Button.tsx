import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

export default function Button({
  children,
  className
}: ButtonBaseProps) {
  return (
    <ButtonBase
      className={`bg-blue-500 ${className}`}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
