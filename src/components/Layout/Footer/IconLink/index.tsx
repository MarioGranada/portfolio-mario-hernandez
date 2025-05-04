import Link from 'next/link';
import { FC } from 'react';

type Props = {
  Icon: React.ElementType;
  label: string;
  as?: 'a' | 'button';
  href?: string;
};
const IconLink: FC<Props> = ({ Icon, label, href = '/' }) => {
  const IconComponent = Icon;
  return (
    <li>
      <Link href={href} className="group relative">
        <IconComponent className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />

        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default IconLink;
