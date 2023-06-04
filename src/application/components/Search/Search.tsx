import React, { ChangeEvent, KeyboardEvent, useCallback, useRef, useState } from 'react';

import { SearchModal } from '@/application/components/Search/SearchModal';
import { SearchInput } from '@/ui/SearchInput/SearchInput';

export const Search = () => {
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

  return (
    <div ref={wrapperRef}>
      <SearchInput
        ref={inputRef}
        value={searchValue}
        onKeyUp={handleSearch}
        onClick={handleOpenModal}
        onChange={handleSearchValue}
        onClickSearch={handleSearchIconClick}
        onClickRemove={handleRemoveSearchValue}
      />
      <SearchModal open={isOpen} onClose={handleCloseModal} target={wrapperRef.current} />
    </div>
  );
};
