import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

export default function Button({
  children,
  className
}: ButtonBaseProps) {
  return (
    <ButtonBase
      className={`items-center justify-center font-bold bg-marianBlue w-full text-white py-2 rounded-full shadow-2xl hover:bg-trueBlue duration-150 ${className}`}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
