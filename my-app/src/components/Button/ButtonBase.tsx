'use client';

import React from "react";
import BaseComponent from "../BaseComponent/BaseComponent";
import { useRouter } from 'next/navigation';

interface CurrentRef {
  current: HTMLElement | null
}

export interface ButtonBaseProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ButtonBase({
  children,
  className,
  href,
  ...props
}: ButtonBaseProps) {
  const router = useRouter();
  const ref = React.useRef() as unknown as CurrentRef;
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  return (  
    <BaseComponent
      ref={ref}
      tag={Tag}
      href={href}
      className={className}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        isLink && event.preventDefault();
        isLink && router.push(href!);
        !isLink && props.onClick && props.onClick(event);
      }}
      {...props}
    >
      {children}
    </BaseComponent>
  );
}