import React from 'react';

import { useSearch } from '@/refactor/Search/hooks/useSearch';
import { SearchInput } from '@/refactor/Search/SearchInput';
import { SearchModal } from '@/refactor/Search/SearchModal';

export const Search = () => {
  const { wrapperRef, inputRef, searchValue, isOpen, handlers } = useSearch();

  return (
    <div ref={wrapperRef} className='relative h-9 bg-white w-full border-0 rounded-2xl'>
      <SearchInput
        ref={inputRef}
        value={searchValue}
        onKeyUp={handlers.search}
        onClick={handlers.openModal}
        onChange={handlers.searchValue}
        onClickSearch={handlers.searchIconClick}
        onClickRemove={handlers.removeSearchValue}
      />
      <SearchModal open={isOpen} onClose={handlers.closeModal} target={wrapperRef.current} />
    </div>
  );
};
