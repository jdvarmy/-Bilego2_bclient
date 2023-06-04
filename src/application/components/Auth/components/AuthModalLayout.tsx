import React from 'react';

import { Login } from '@/application/components/Auth/components/Login';
import { ModalWindow } from '@/ui/ModalWindow/ModalWindow';
import { Tabs } from '@/ui/Tabs/Tabs';

type Props = {
  show: boolean;
  onClose: (value: boolean) => void;
};

export const AuthModalLayout = ({ show, onClose }: Props) => {
  return (
    <ModalWindow show={show} onClose={onClose}>
      <Tabs />
      <Login />
    </ModalWindow>
  );
};
