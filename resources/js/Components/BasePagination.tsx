import { Paginated } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Flex, FlexProps, Pagination } from '@mantine/core';

interface Props<T> extends FlexProps {
  paginatedData: Paginated<T>;
}

export default function BasePagination<T>({
  paginatedData,
  justify = 'flex-end',
  mt = 'lg',
  ...props
}: Props<T>) {
  const { url } = usePage();

  const handlePageChange = (page: number) => {
    const currentUrl = new URL(url, window.location.origin);
    currentUrl.searchParams.set('page', String(page));
    const newUrl = currentUrl.toString();
    router.visit(newUrl);
  };

  return (
    <Flex justify={justify} mt={mt} {...props}>
      <Pagination
        total={paginatedData.last_page}
        value={paginatedData.current_page}
        onChange={handlePageChange}
      />
    </Flex>
  );
}
