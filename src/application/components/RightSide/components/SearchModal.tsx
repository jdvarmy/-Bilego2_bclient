import React, { MouseEventHandler } from 'react';

import { ModalWindow } from '@/ui/ModalWindow/ModalWindow';

type Props = {
  open: boolean;
  target?: HTMLDivElement | null;
  onClose?: MouseEventHandler<HTMLElement>;
};

export const SearchModal = ({ open, target, onClose }: Props) => {
  return (
    <ModalWindow open={open} onClose={onClose} target={target?.firstChild}>
      <>
        <h3 className='text-h3 text-purple'>Поиск</h3>
        <div className='mt-2'>
          <p className='text-xs text-purple'>Здесь будут всякие ссылки на поисковые запросы.</p>
        </div>
        <div className='mt-4'>
          <button
            type='button'
            className='inline-flex justify-center px-4 py-2 text-xs text-purple border rounded-md border-purple'
            onClick={onClose}
          >
            Ясно, спасибо!
          </button>
        </div>
      </>
    </ModalWindow>
  );
};
