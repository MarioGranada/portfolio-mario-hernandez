import Link from 'next/link';
import { FC } from 'react';
import IconButton from './IconButton';

type Props = {
  Icon: React.ElementType;
  label: string;
  as?: 'a' | 'button';
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
};

const IconLink: FC<Props> = ({
  Icon,
  label,
  as = 'a',
  href = '/',
  target = '_blank',
  onClick,
  className,
}) => {
  const IconComponent = Icon;

  if (as === 'button') {
    return (
      <IconButton
        Icon={Icon}
        label={label}
        onClick={onClick}
        className={className}
      />
    );
  }

  return (
    <li>
      <Link
        href={href}
        target={target}
        className={`group relative ${className || ''}`}
      >
        <IconComponent className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />

        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default IconLink;
