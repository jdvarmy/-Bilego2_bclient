import React, { PropsWithChildren } from 'react';

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className='bilego-spinner w-[70%] h-[70%] absolute rounded-4xl'>{children}</div>;
};

const Circle = () => {
  return (
    <div className='circle w-full h-full absolute'>
      <div className='w-full h-full rounded-4xl border-2 border-raspberry border-r-0 border-t-0 border-l-0 bg-clip-padding shadow-spinner' />
    </div>
  );
};

export const UiSpinner = () => {
  return (
    <Wrapper>
      {new Array(5).fill(1).map((_, i) => (
        <Circle key={i} />
      ))}
    </Wrapper>
  );
};
