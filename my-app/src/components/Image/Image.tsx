import BaseComponent from "../BaseComponent/BaseComponent";

interface ImageProps {
  src: string;
  alt: string;
  className?: string; 
}
export default function Image({ src, alt, ...props }: ImageProps) {
  return (
    <BaseComponent
      tag="img"
      src={src}
      alt={alt}
      {...props}
    />
  )
}