import BaseComponent from "../BaseComponent/BaseComponent";
import * as icons from './svgs/_index';

interface IconProps {
  name: keyof typeof icons;
  className?: string;
}
export default function Icon({ className, name, ...props }: IconProps) {
  const CurrentIcon = icons[name];

  if(!CurrentIcon) return <>`{name}` is not a valid <Icon /></>;

  return (
    <BaseComponent
      tag="svg"
      className={className}
      color="inherit"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: 'default_icon',
  className: 'h-6 w-6',
}