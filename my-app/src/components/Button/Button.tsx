import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

export default function Button({
  children,
  className
}: ButtonBaseProps) {
  return (
    <ButtonBase
      className={`font-bold bg-gradient-to-r from-purple-500 to-pink-500 ${className}`}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
