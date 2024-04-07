import React from 'react';

import { useSearch } from '@/features/search/model/use-search';
import { Input } from '@/features/search/ui/input';
import { SearchModal } from '@/features/search/ui/search-modal';

export const Search = () => {
  const { wrapperRef, inputRef, searchValue, isOpen, handlers } = useSearch();

  return (
    <div ref={wrapperRef} className='relative h-9 bg-white w-full border-0 rounded-2xl'>
      <Input
        ref={inputRef}
        value={searchValue}
        onKeyUp={handlers.search}
        onClick={handlers.openModal}
        onChange={handlers.searchValue}
        onClickSearch={handlers.searchIconClick}
        onClickRemove={handlers.removeSearchValue}
      />
      <SearchModal show={isOpen} onClose={handlers.closeModal} target={wrapperRef.current} />
    </div>
  );
};
