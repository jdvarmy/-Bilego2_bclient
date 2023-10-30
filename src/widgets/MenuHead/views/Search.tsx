import React from 'react';

import { useSearch } from '@/widgets/MenuHead/hooks/useSearch';
import { SearchInput } from '@/widgets/MenuHead/views/SearchInput';
import { SearchModal } from '@/widgets/MenuHead/views/SearchModal';

export const Search = () => {
  const { wrapperRef, inputRef, searchValue, isOpen, handlers } = useSearch();

  return (
    <div ref={wrapperRef}>
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
