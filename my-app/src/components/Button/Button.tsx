import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

export default function Button({
  children,
  className
}: ButtonBaseProps) {
  return (
    <ButtonBase
      className={`${className}`}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
