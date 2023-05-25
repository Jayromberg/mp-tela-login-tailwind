import React from 'react';

interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
  tag: 'main'| 'header' | 'article' | 'section' | 'form' | 'ul' | string;
};
const BaseComponent = ({ tag, children, className }: BaseComponentProps) => {
  const element = tag;
  return React.createElement(
    element, 
    { 
      className: `'flex flex-col content-start shrink-0' ${className}` 
    }, 
    children
  );
};

BaseComponent.defaultProps = {
  tag: 'div'
}

export default BaseComponent;
