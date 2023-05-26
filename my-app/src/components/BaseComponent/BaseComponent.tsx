import React from 'react';

interface BaseComponentProps {
  children?: React.ReactNode;
  tag: 'main'| 'header' | 'article' | 'section' | 'form' | 'ul' | string;
  className?: string;
  src?: string;
  alt?: string;
};
const BaseComponent = ({ tag, children, className, src, alt,...props }: BaseComponentProps) => {
  const element = tag;
  const elementClass = `flex flex-col content-start shrink-0 ${className}`
  return React.createElement(
    element, 
    { 
      className: elementClass,
      src,
      alt,
      ...props
    }, 
    children
  );
};

BaseComponent.defaultProps = {
  tag: 'div',
  className: '',
}

export default BaseComponent;
