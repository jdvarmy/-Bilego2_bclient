'use client';

import { ChangeEvent, KeyboardEvent, useCallback, useRef, useState } from 'react';

export function useSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);
  const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleRemoveSearchValue = () => {
    setSearchValue('');
    handleFocus();
    setIsOpen(true);
  };
  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      alert('search');
    }
  };
  const handleSearchIconClick = () => {
    if (!searchValue) {
      handleFocus();
      handleOpenModal();
    } else {
      alert('search');
    }
  };

  return {
    wrapperRef,
    inputRef,
    searchValue,
    isOpen,
    handlers: {
      search: handleSearch,
      openModal: handleOpenModal,
      searchValue: handleSearchValue,
      searchIconClick: handleSearchIconClick,
      removeSearchValue: handleRemoveSearchValue,
      closeModal: handleCloseModal,
    },
  };
}
