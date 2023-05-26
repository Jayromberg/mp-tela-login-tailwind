import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2' | string;
}
export default function Text({ children, className, tag, ...props }: TextProps) {
  return (
    <BaseComponent
      tag={tag}
      className={className}
      {...props}
    >
      {children}
    </BaseComponent>
  );
}

Text.defaultProps = {
  tag: 'p',
};
