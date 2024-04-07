'use client';

import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';

import { UiRouterLink } from '@/shared/uikit/ui-router-link';

import css from '../css/button.module.css';

type ElementType = HTMLButtonElement | HTMLAnchorElement;

type Props<T> = (T extends HTMLButtonElement
  ? ButtonHTMLAttributes<HTMLButtonElement>
  : AnchorHTMLAttributes<HTMLAnchorElement>) & {
  componentType?: 'button' | 'link';
  styleType?: 'primary' | 'rounded';
};

export function ItemButton<T>({
  children,
  className,
  componentType = 'button',
  styleType = 'primary',
  ...props
}: Props<T>) {
  const buttonRef = useRef<ElementType>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const moveHandler: MouseEventHandler<ElementType> = event => {
    setCoords({
      x: event.pageX - ((buttonRef.current as ElementType)?.offsetLeft || 0),
      y: event.pageY - ((buttonRef.current as ElementType)?.offsetTop || 0),
    });
  };

  const Component = componentType === 'button' ? ButtonComponent : UiRouterLink;
  const style = styleType === 'primary' ? ({ '--x': `${coords.x}px`, '--y': `${coords.y}px` } as CSSProperties) : {};
  const classNames =
    styleType === 'primary'
      ? `${css.button} ${
          css.ripple
        } cursor-pointer block bg-blue-900 my-1.5 p-1.5 px-4 border-0 rounded-2xl select-none lowercase ${
          className ? className : ''
        }`
      : `text-xs mt-8 border rounded-2xl border-chrome text-center py-1 px-3 text-chrome mr-8`;

  return (
    <Component
      // @ts-ignore
      ref={buttonRef}
      onMouseMove={moveHandler}
      style={style}
      className={classNames}
      {...props}
    >
      {children}
    </Component>
  );
}

function ButtonComponent({ children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button>{children}</button>;
}
