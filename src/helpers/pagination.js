export const paginate = (totalItems, currentPage = 1, pageSize = 20, maxPages = 10) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  let cPage = currentPage;

  if (cPage < 1) {
    cPage = 1;
  } else if (cPage > totalPages) {
    cPage = totalPages;
  }

  let startPage;
  let endPage;

  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

    if (cPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (cPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = (totalPages - maxPages) + 1;
      endPage = totalPages;
    } else {
      startPage = cPage - maxPagesBeforeCurrentPage;
      endPage = cPage + maxPagesAfterCurrentPage;
    }
  }

  const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

  return {
    current: cPage,
    totalPages,
    startPage,
    endPage,
    pages,
  };
};

export default {
  paginate,
};
