import React from 'react';

interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
  tag: string;
};
const BaseComponent = ({ tag, children, className }: BaseComponentProps) => {
  const element = tag;

  return React.createElement(element, { className }, children);
};

BaseComponent.defaultProps = {
  tag: 'div'
}

export default BaseComponent;
