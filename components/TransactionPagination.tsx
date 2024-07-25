'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';

const TransactionPagination = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
  const router = useRouter();
  const scrollPositionRef = useRef(0);

  const handlePageChange = (page: number) => {
    scrollPositionRef.current = window.scrollY; // Save the current scroll position
    router.push(`?page=${page}`);
  };

  // Use effect to restore scroll position after navigation
  useEffect(() => {
    window.scrollTo(0, scrollPositionRef.current); // Restore the scroll position
  }, [currentPage]);

  return (
    <Pagination>
      <PaginationContent className='mt-3'>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePageChange(Math.max(1, currentPage - 1))} className='hover:cursor-pointer' />
        </PaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i} className='hover:cursor-pointer'>
            <PaginationLink
              onClick={() => handlePageChange(i + 1)}
              isActive={currentPage === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} className='hover:cursor-pointer' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TransactionPagination;
