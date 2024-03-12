import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  text: string;
};

const classes = {
  chipElement:
    'flex justify-between items-center h-[30px] leading-loose py-[5px] px-[12px] mr-3 my-[5px] font-normal ' +
    'cursor-pointer bg-blue-900 rounded-4xl transition-[opacity] duration-300 ease-linear [word-wrap: break-word] ' +
    'shadow-none lowercase hover:!shadow-none active:bg-blue-800 inline-block font-medium leading-normal ' +
    'text-chrome text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid ' +
    'border-transparent py-1.5 px-3 text-xs rounded',
};

export function UiChip({ text, className, ...props }: Props) {
  return (
    <div className={clsx(classes.chipElement, className)} {...props}>
      <span>{text}</span>
    </div>
  );
}
