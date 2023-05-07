import React, { MouseEventHandler, useRef, useState } from 'react';

import { RouterLink } from '@/ui/RouterLink/RouterLink';

import css from './../MenuMain.module.css';

type Props = {
  title: string;
  href: string;
};

const MenuItem = ({ title, href }: Props) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const moveHandler: MouseEventHandler<HTMLAnchorElement> = event => {
    setCoords({
      x: event.pageX - (buttonRef.current?.offsetLeft || 0),
      y: event.pageY - (buttonRef.current?.offsetTop || 0),
    });
  };

  return (
    <RouterLink
      href={href}
      ref={buttonRef}
      onMouseMove={moveHandler}
      style={{ '--x': `${coords.x}px`, '--y': `${coords.y}px` } as React.CSSProperties}
      className={`${css.button} ${css.ripple} cursor-pointer block bg-blue-900 my-1.5 p-1.5 pl-4 border-0 rounded-2xl select-none lowercase`}
    >
      <span className='text-chrome'>{title}</span>
    </RouterLink>
  );
};

export default MenuItem;
