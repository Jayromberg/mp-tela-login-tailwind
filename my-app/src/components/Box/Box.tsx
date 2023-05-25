import BaseComponent from "@/components/BaseComponent/BaseComponent";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  tag?: string;
}
export default function Box({ children, className, tag, ...props }: BoxProps) {
  return (
    <BaseComponent tag={tag} className={className} {...props}>
      {children}
    </BaseComponent>
  );
}
