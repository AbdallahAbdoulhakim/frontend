import React from "react";

const ArticleListPagination = ({ queryPost, getPosts }) => {
  const pagesToShow = [
    queryPost.currentPage !== 1
      ? queryPost.currentPage === queryPost.totalPages
        ? queryPost.currentPage - 2
        : queryPost.currentPage - 1
      : queryPost.currentPage,
    queryPost.currentPage !== 1
      ? queryPost.currentPage === queryPost.totalPages
        ? queryPost.currentPage - 1
        : queryPost.currentPage
      : queryPost.currentPage + 1,
    queryPost.currentPage !== 1
      ? queryPost.currentPage === queryPost.totalPages
        ? queryPost.currentPage
        : queryPost.currentPage + 1
      : queryPost.currentPage + 2,
  ];

  return (
    <nav aria-label="Articles navigation">
      <ul className="pagination">
        <li className={`page-item ${!queryPost.hasPrevPage ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              if (!queryPost.hasPrevPage) return;
              getPosts(
                `?offset=${queryPost.limit * (queryPost.currentPage - 2)}`
              );
            }}
          >
            Previous
          </button>
        </li>
        {pagesToShow.map((page) => {
          return (
            <li
              key={page}
              className={`page-item ${
                queryPost.currentPage === page ? "active" : ""
              }`}
              aria-current={`${queryPost.currentPage === page ? "page" : ""}`}
            >
              <button
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (page === queryPost.currentPage) return;
                  getPosts(`?offset=${queryPost.limit * (page - 1)}`);
                }}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${!queryPost.hasNextPage ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              if (!queryPost.hasNextPage) return;
              getPosts(`?offset=${queryPost.limit * queryPost.currentPage}`);
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ArticleListPagination;
